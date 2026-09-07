# -*- coding: utf-8 -*-
"""
Generate every VeRJiL brand asset from one definition of the mark.

    python scripts/build_brand.py

The mark is the "split V": a single closed outline whose left arm is wider
than its right. Under the brand gradient the left arm lands in PHP indigo and
the right in Go cyan, so the letterform carries the PHP-first, Go-second
positioning without needing two shapes.

Everything below - SVGs, PWA icons, favicon, Apple touch icon, OG card - is
derived from V_OUTLINE, so the mark can never drift between assets.
"""

import os

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC = os.path.join(ROOT, "public")

# ---------------------------------------------------------------- brand ----
INDIGO = (109, 74, 239)   # PHP end of the gradient
CYAN = (34, 184, 220)     # Go end
INK = (8, 11, 20)         # knocked-out V, and the OG background
PAPER = (237, 241, 250)

# The mark, on a 100x100 grid.
#   outer-left top -> inner-left top -> inner vertex -> inner-right top
#   -> outer-right top -> outer vertex -> close
V_OUTLINE = [
    (14, 22),
    (36, 22),
    (50, 58),
    (72, 22),
    (86, 22),
    (50, 80),
]

SS = 4  # supersample factor; every raster is drawn big and downsampled


def _scaled(box, pad_ratio):
    """Fit the mark into `box` px, leaving pad_ratio on each side.

    Fitted against the outline's own bounding box, not the 100-unit grid: the
    V is much wider than it is tall, so scaling by the grid would leave it
    swimming in vertical whitespace and looking undersized in an app icon.
    """
    xs = [p[0] for p in V_OUTLINE]
    ys = [p[1] for p in V_OUTLINE]
    w, h = max(xs) - min(xs), max(ys) - min(ys)

    inner = box * (1 - 2 * pad_ratio)
    scale = inner / max(w, h)
    # Centre whatever the mark does not fill on the shorter axis.
    ox = (box - w * scale) / 2.0
    oy = (box - h * scale) / 2.0
    return [((x - min(xs)) * scale + ox, (y - min(ys)) * scale + oy)
            for x, y in V_OUTLINE]


def _gradient(size):
    """Diagonal indigo -> cyan, drawn once and reused."""
    g = Image.new("RGB", (size, size))
    px = g.load()
    for y in range(size):
        for x in range(size):
            # Diagonal ramp: 0 at top-left, 1 at bottom-right.
            t = (x + y) / (2.0 * (size - 1))
            px[x, y] = (
                round(INDIGO[0] + (CYAN[0] - INDIGO[0]) * t),
                round(INDIGO[1] + (CYAN[1] - INDIGO[1]) * t),
                round(INDIGO[2] + (CYAN[2] - INDIGO[2]) * t),
            )
    return g


def tile_icon(size, pad_ratio=0.22, radius_ratio=0.22, full_bleed=False):
    """Gradient tile with the V knocked out to ink.

    Dark-on-gradient rather than white-on-gradient: white would drop to about
    2:1 against the cyan end, while ink stays above 5:1 across the whole ramp.
    """
    box = size * SS
    grad = _gradient(box)

    mask = Image.new("L", (box, box), 0)
    md = ImageDraw.Draw(mask)
    if full_bleed:
        md.rectangle([0, 0, box, box], fill=255)
    else:
        md.rounded_rectangle([0, 0, box - 1, box - 1], radius=box * radius_ratio, fill=255)

    icon = Image.new("RGBA", (box, box), (0, 0, 0, 0))
    icon.paste(grad, (0, 0), mask)

    ImageDraw.Draw(icon).polygon(_scaled(box, pad_ratio), fill=INK + (255,))
    return icon.resize((size, size), Image.LANCZOS)


def flat_mark(size, color, pad_ratio=0.06):
    """The bare V on transparency, one flat colour."""
    box = size * SS
    img = Image.new("RGBA", (box, box), (0, 0, 0, 0))
    ImageDraw.Draw(img).polygon(_scaled(box, pad_ratio), fill=color + (255,))
    return img.resize((size, size), Image.LANCZOS)


# ------------------------------------------------------------------ SVG ----
def _n(v):
    """Trim a coordinate to 2dp and drop a trailing .0 - these paths ship."""
    return f"{round(v, 2):g}"


def _path_d(points):
    return "M" + " L".join(f"{_n(x)} {_n(y)}" for x, y in points) + " Z"


def write_svgs():
    d = _path_d(V_OUTLINE)
    grad = (
        '<linearGradient id="vg" x1="0" y1="0" x2="1" y2="1">'
        f'<stop offset="0" stop-color="#{INDIGO[0]:02X}{INDIGO[1]:02X}{INDIGO[2]:02X}"/>'
        f'<stop offset="1" stop-color="#{CYAN[0]:02X}{CYAN[1]:02X}{CYAN[2]:02X}"/>'
        "</linearGradient>"
    )

    # Standalone mark, cropped tight to the outline. A 0 0 100 100 viewBox
    # would bake ~14% dead margin into every place the file is embedded.
    xs = [p[0] for p in V_OUTLINE]
    ys = [p[1] for p in V_OUTLINE]
    vb = f"{min(xs)} {min(ys)} {max(xs) - min(xs)} {max(ys) - min(ys)}"

    logo = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" '
        'role="img" aria-label="VeRJiL">'
        f"<defs>{grad}</defs>"
        f'<path d="{d}" fill="url(#vg)"/>'
        "</svg>\n"
    )

    ink = f"#{INK[0]:02X}{INK[1]:02X}{INK[2]:02X}"
    tile = (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" '
        'role="img" aria-label="VeRJiL">'
        f"<defs>{grad}</defs>"
        '<rect width="100" height="100" rx="22" fill="url(#vg)"/>'
        f'<path d="{_path_d(_scaled(100, 0.22))}" fill="{ink}"/>'
        "</svg>\n"
    )

    with open(os.path.join(PUBLIC, "logo.svg"), "w", encoding="utf-8") as f:
        f.write(logo)
    with open(os.path.join(PUBLIC, "favicon.svg"), "w", encoding="utf-8") as f:
        f.write(tile)
    return ["logo.svg", "favicon.svg"]


# ------------------------------------------------------------------- OG ----
def _font(name, size):
    for candidate in (name, "segoeuib.ttf", "arialbd.ttf"):
        try:
            return ImageFont.truetype(os.path.join("C:/Windows/Fonts", candidate), size)
        except OSError:
            continue
    return ImageFont.load_default()


def write_og():
    """1200x630 social card. Without this, shared links render a blank box."""
    W, H = 1200, 630
    card = Image.new("RGB", (W, H), INK)
    draw = ImageDraw.Draw(card)

    # A soft indigo wash in the top-left, echoing the site's aurora.
    glow = Image.new("RGB", (W, H), INK)
    gd = ImageDraw.Draw(glow)
    for i in range(28):
        r = 620 - i * 20
        v = i / 27.0
        gd.ellipse([-260 - r // 6, -300, 320 + r, 300 + r // 2],
                   fill=(round(INK[0] + (INDIGO[0] - INK[0]) * v * 0.30),
                         round(INK[1] + (INDIGO[1] - INK[1]) * v * 0.30),
                         round(INK[2] + (INDIGO[2] - INK[2]) * v * 0.30)))
    card = Image.blend(glow, card, 0.55)
    draw = ImageDraw.Draw(card)

    mark = tile_icon(132, pad_ratio=0.24)
    card.paste(mark, (86, 86), mark)

    draw.text((86, 250), "Arash Nikbakht", font=_font("segoeuib.ttf", 82), fill=PAPER)
    draw.text((86, 356), "Senior Backend Engineer", font=_font("segoeui.ttf", 44),
              fill=(158, 168, 192))

    x = 86
    for i, (label, col) in enumerate(
        [("PHP", INDIGO), ("Laravel", INDIGO), ("Go", CYAN), ("Redis", (120, 132, 158)),
         ("RabbitMQ", (120, 132, 158))]
    ):
        f = _font("segoeuib.ttf", 30)
        w = draw.textlength(label, font=f)
        draw.rounded_rectangle([x, 452, x + w + 40, 512], radius=16,
                               outline=col, width=2)
        draw.text((x + 20, 468), label, font=f, fill=col)
        x += w + 40 + 14

    draw.text((86, 556), "anikbakht.com", font=_font("segoeui.ttf", 30),
              fill=(108, 119, 145))

    card.save(os.path.join(PUBLIC, "og-image.jpg"), "JPEG", quality=92, optimize=True)
    return ["og-image.jpg"]


def main():
    written = write_svgs()

    for name, img in [
        ("icon-192.png", tile_icon(192)),
        ("icon-512.png", tile_icon(512)),
        # Maskable icons get cropped to a circle by the launcher, so the tile
        # runs full bleed and the mark sits well inside the 80% safe zone.
        ("icon-maskable-512.png", tile_icon(512, pad_ratio=0.30, full_bleed=True)),
        # iOS applies its own rounding, so ship a square.
        ("apple-touch-icon.png", tile_icon(180, pad_ratio=0.24, full_bleed=True)),
        ("logo-mark-512.png", flat_mark(512, INDIGO)),
    ]:
        img.save(os.path.join(PUBLIC, name), "PNG", optimize=True)
        written.append(name)

    # Slightly less padding at favicon sizes: at 16px the default padding
    # leaves the V too small to read.
    ico = tile_icon(256, pad_ratio=0.18)
    ico.save(os.path.join(PUBLIC, "favicon.ico"), sizes=[(16, 16), (32, 32), (48, 48)])
    written.append("favicon.ico")

    written += write_og()

    print("wrote into public/:")
    for name in written:
        path = os.path.join(PUBLIC, name)
        print(f"  {name:26s} {os.path.getsize(path):>8,d} B")


if __name__ == "__main__":
    main()
