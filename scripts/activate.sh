#!/usr/bin/env bash
#
# Activate an already-uploaded build. Runs ON the server.
#
# CI builds the site on the runner and ships the result into $APP_DIR/build.new,
# then pipes this script in over SSH. The server does no fetching and no
# building: the bytes CI tested are exactly the bytes that go live, and a
# GitHub outage can no longer stall a deploy halfway.
#
# The swap is a directory rename, so the live site is never partially written.
# Any failure after the swap puts the previous build straight back.
#
# By hand, if you ever need it:
#   tar czf - -C build . | ssh japs 'cd /root/anikbakht.ir && rm -rf build.new \
#       && mkdir build.new && tar xzf - -C build.new'
#   ssh japs 'bash -s' < scripts/activate.sh
#
set -euo pipefail

APP_DIR="${APP_DIR:-/root/anikbakht.ir}"
HEALTH_URL="${HEALTH_URL:-https://anikbakht.com/}"
RELEASE="${RELEASE:-unknown}"

log()  { printf '\n\033[1;35m▸ %s\033[0m\n' "$*"; }
ok()   { printf '\033[1;32m  ✓ %s\033[0m\n' "$*"; }
warn() { printf '\033[1;33m  ! %s\033[0m\n' "$*"; }
fail() { printf '\n\033[1;31m✗ %s\033[0m\n' "$*" >&2; exit 1; }

cd "$APP_DIR" 2>/dev/null || fail "APP_DIR not found: $APP_DIR"

[ -s build.new/index.html ] || fail "build.new/index.html missing - upload did not land"

BUNDLE_PATH="$(find build.new/assets -name 'index-*.js' 2>/dev/null | head -1)"
[ -n "$BUNDLE_PATH" ] || fail "no hashed JS bundle in build.new/assets"
BUNDLE="$(basename "$BUNDLE_PATH")"

# ---------------------------------------------------------------- swap ------
log "Activating ${RELEASE:0:8} ($(find build.new -type f | wc -l) files)"
rm -rf build.prev
# `[ -d x ] && mv ...` would abort under `set -e` whenever the test is false,
# so these stay as explicit ifs.
if [ -d build ]; then mv build build.prev; fi
mv build.new build
ok "swapped in"

rollback() {
    warn "rolling back"
    if [ -d build.prev ]; then
        rm -rf build.failed
        if [ -d build ]; then mv build build.failed; fi
        mv build.prev build
        warn "previous build restored"
    else
        warn "no build.prev to restore - site may be down"
    fi
}

# -------------------------------------------------------------- verify -----
# `curl -f` is deliberately NOT used for status probes: it exits non-zero on
# 4xx/5xx while -w has already printed the code, so a `|| echo 000` fallback
# would concatenate into nonsense like "404000". Without -f, curl exits 0 and
# prints the real code (or 000 if it never connected).
probe() {
    curl -sS -o /dev/null -w '%{http_code}' --max-time 20 "$1" 2>/dev/null || true
}

# Content-Length for a URL, or empty if the request failed.
served_size() {
    curl -sSI --max-time 25 "$1" 2>/dev/null \
        | tr -d '\r' \
        | awk 'tolower($1) == "content-length:" { print $2 }' \
        | tail -1
}

log "Verifying $HEALTH_URL"

STATUS="$(probe "$HEALTH_URL")"
[ "$STATUS" = "200" ] || { rollback; fail "health check returned $STATUS"; }
ok "HTTP $STATUS"

# The hashed bundle name changes every build, so finding the one we just
# shipped in the served HTML proves the edge is handing out THIS release.
curl -sS --max-time 20 "$HEALTH_URL" 2>/dev/null | grep -qF "$BUNDLE" \
    || { rollback; fail "live HTML does not reference $BUNDLE"; }
ok "serving $BUNDLE"

# The CV download is a primary call to action; a 404 here is a silent failure.
CV_STATUS="$(probe "${HEALTH_URL%/}/Arash-Nikbakht-CV.pdf")"
[ "$CV_STATUS" = "200" ] || { rollback; fail "CV download returned $CV_STATUS"; }
ok "CV reachable"

# Compare the served size of every hashed asset against the build.
#
# A status code only proves something answered. On 2026-11-14 the origin held
# the right portrait while the CDN served a two-month-old copy as a HIT,
# because the file lived in public/ under a fixed name and our cache-control
# says `immutable` for a year. Assets are content-hashed now, so a stale hit
# means a genuine cache or path problem - worth failing the deploy over.
#
# HEAD, not a full download: this box's upstream bandwidth is poor enough that
# whole bundles time out mid-transfer, which looks exactly like a size
# mismatch. The Content-Length header settles it in one round trip.
#
# index.html names only the entry css/js; hashed images are referenced from
# inside the bundle, so both get scanned.
log "Checking served assets match the build"
MISMATCH=0
CHECKED=0
while read -r REL; do
    [ -n "$REL" ] || continue
    LOCAL="build/$REL"
    [ -f "$LOCAL" ] || continue
    WANT="$(wc -c < "$LOCAL" | tr -d ' ')"
    GOT="$(served_size "${HEALTH_URL%/}/$REL")"
    CHECKED=$((CHECKED + 1))
    if [ -z "$GOT" ]; then
        warn "$REL - no Content-Length returned"
        MISMATCH=$((MISMATCH + 1))
    elif [ "$WANT" != "$GOT" ]; then
        warn "$REL served $GOT B, built $WANT B"
        MISMATCH=$((MISMATCH + 1))
    fi
done <<EOF
$(grep -ohE 'assets/[A-Za-z0-9@._-]+[.](js|css|jpg|jpeg|png|svg|webp|woff2)' build/index.html build/assets/*.js 2>/dev/null | sort -u)
EOF

if [ "$MISMATCH" -gt 0 ]; then
    rollback
    fail "$MISMATCH of $CHECKED assets served stale - check CDN cache"
fi
ok "$CHECKED assets match"

printf '\n\033[1;32m✓ Live: %s\033[0m\n' "${RELEASE:0:8}"
