#!/usr/bin/env bash
#
# Deploy anikbakht.com the self-contained way: the server fetches the commit
# and builds it itself.
#
# NOT the normal path. CI builds on the runner and ships the result, which is
# faster and means the bytes tested are the bytes served - see
# .github/workflows/deploy.yml and scripts/activate.sh.
#
# Keep this for when you need a deploy without CI: a runner outage, a hotfix
# from a laptop, or rebuilding the box from scratch. Note that it needs the
# server to reach GitHub, which has been unreliable from this host - if the
# fetch hangs, use the CI path or upload a build with activate.sh instead.
#
#   ssh japs 'bash -s' < scripts/deploy.sh
#
# nginx serves static files straight out of $APP_DIR/build, so a deploy is
# "get the new commit, build it, swap the directory". The build goes into a
# scratch directory first and is only swapped in once it looks valid, so a
# broken build can never leave the live site empty. The previous build and
# commit are kept, and any failure after the swap rolls both back.
#
set -euo pipefail

APP_DIR="${APP_DIR:-/root/anikbakht.ir}"
BRANCH="${BRANCH:-main}"
HEALTH_URL="${HEALTH_URL:-https://anikbakht.com/}"

log()  { printf '\n\033[1;35m▸ %s\033[0m\n' "$*"; }
ok()   { printf '\033[1;32m  ✓ %s\033[0m\n' "$*"; }
fail() { printf '\n\033[1;31m✗ %s\033[0m\n' "$*" >&2; exit 1; }

cd "$APP_DIR" 2>/dev/null || fail "APP_DIR not found: $APP_DIR"
command -v npm >/dev/null || fail "npm not on PATH"

# ---------------------------------------------------------------- fetch ----
log "Fetching origin/$BRANCH"
git fetch --prune origin "$BRANCH"

PREV_SHA="$(git rev-parse HEAD)"
NEXT_SHA="$(git rev-parse "origin/$BRANCH")"
printf '  %s -> %s\n' "${PREV_SHA:0:8}" "${NEXT_SHA:0:8}"

if [ "$PREV_SHA" = "$NEXT_SHA" ] && [ -f build/index.html ]; then
    ok "Already up to date, build present - nothing to do"
    exit 0
fi

# Roll the working tree AND the live build back to where we started.
rollback() {
    printf '\n\033[1;33m  rolling back to %s\033[0m\n' "${PREV_SHA:0:8}" >&2
    git reset --hard "$PREV_SHA" >/dev/null 2>&1 || true
    if [ -d build.prev ]; then
        rm -rf build.failed
        # Note: `[ -d x ] && mv ...` would abort the script under `set -e`
        # whenever the test is false, so these stay as explicit ifs.
        if [ -d build ]; then mv build build.failed; fi
        mv build.prev build
    fi
}

# ------------------------------------------------------------- checkout ----
# Hard reset rather than merge: the deployed tree must match the commit
# exactly, with no drift from anything edited on the server by hand.
log "Checking out ${NEXT_SHA:0:8}"
git reset --hard "$NEXT_SHA"

# --------------------------------------------------------------- deps ------
log "Installing dependencies"
if [ -f package-lock.json ]; then
    npm ci --no-audit --no-fund
else
    npm install --no-audit --no-fund
fi

# --------------------------------------------------------------- build -----
log "Building"
rm -rf build.new
if ! npm run build -- --outDir build.new --emptyOutDir; then
    git reset --hard "$PREV_SHA" >/dev/null 2>&1 || true
    fail "build failed - live site untouched"
fi
[ -s build.new/index.html ] || {
    git reset --hard "$PREV_SHA" >/dev/null 2>&1 || true
    fail "build produced no index.html - live site untouched"
}

# --------------------------------------------------------------- swap ------
log "Swapping build in"
rm -rf build.prev
if [ -d build ]; then mv build build.prev; fi
mv build.new build
ok "$(find build -type f | wc -l) files live"

# -------------------------------------------------------------- verify -----
# `curl -f` is deliberately NOT used for status probes: it exits non-zero on
# 4xx/5xx while -w has already printed the code, so a `|| echo 000` fallback
# would concatenate into nonsense like "404000". Without -f, curl exits 0 and
# prints the real code (or 000 if it never connected).
probe() {
    curl -sS -o /dev/null -w '%{http_code}' --max-time 20 "$1" 2>/dev/null || true
}

log "Verifying $HEALTH_URL"

STATUS="$(probe "$HEALTH_URL")"
[ "$STATUS" = "200" ] || { rollback; fail "health check returned $STATUS"; }
ok "HTTP $STATUS"

# The hashed bundle name changes every build, so finding the one we just
# produced in the served HTML proves nginx is handing out THIS deploy and
# not a cached or stale directory.
BUNDLE_PATH="$(find build/assets -name 'index-*.js' 2>/dev/null | head -1)"
if [ -n "$BUNDLE_PATH" ]; then
    BUNDLE="$(basename "$BUNDLE_PATH")"
    curl -sS --max-time 20 "$HEALTH_URL" 2>/dev/null | grep -qF "$BUNDLE" \
        || { rollback; fail "live HTML does not reference $BUNDLE"; }
    ok "serving $BUNDLE"
else
    rollback
    fail "no hashed JS bundle in build/assets"
fi

# The CV download is a primary call to action; a 404 here is a silent failure.
CV_STATUS="$(probe "${HEALTH_URL%/}/Arash-Nikbakht-CV.pdf")"
[ "$CV_STATUS" = "200" ] || { rollback; fail "CV download returned $CV_STATUS"; }
ok "CV reachable"

printf '\n\033[1;32m✓ Deployed %s\033[0m\n' "${NEXT_SHA:0:8}"
git --no-pager log -1 --format='  %s%n  %an, %ar%n'
