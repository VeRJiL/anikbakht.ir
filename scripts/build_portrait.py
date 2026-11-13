# -*- coding: utf-8 -*-
"""
Prepare the hero portrait.

    python scripts/build_portrait.py [source.jpg]

The hero crops to 4:5 with object-cover, so anything not already 4:5 gets
silently trimmed by the browser at whatever ratio the viewport happens to be.
Cropping here instead makes the framing a decision rather than an accident.

Emits a 1x and a 2x file so the browser downloads the smaller one on
non-retina screens.
"""

import os
import sys

from PIL import Image, ImageEnhance, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# src/, not public/: Vite content-hashes imported assets, so a re-export
# gets a new filename and cannot be pinned by an immutable CDN cache.
IMAGES = os.path.join(ROOT, "src", "assets")
# Unprocessed originals live outside public/ so they are never published.
SOURCES = os.path.join(ROOT, "assets-src")

TARGET_RATIO = 4 / 5          # width / height, matching the hero's aspect-[4/5]
DISPLAY_WIDTH = 330           # CSS px the portrait occupies at its largest
HEAD_BIAS = 0.35              # when trimming height, take more off the bottom


def crop_to_ratio(im, ratio=TARGET_RATIO, head_bias=HEAD_BIAS):
    """Centre-crop to `ratio`, biased to keep headroom rather than chin."""
    w, h = im.size
    if w / h > ratio:
        new_w = round(h * ratio)
        left = (w - new_w) // 2
        return im.crop((left, 0, left + new_w, h))
    new_h = round(w / ratio)
    excess = h - new_h
    top = round(excess * head_bias)
    return im.crop((0, top, w, top + new_h))


def finish(im, width):
    """Resample to `width`, then restore the micro-contrast resampling eats."""
    height = round(width / TARGET_RATIO)
    scale = width / im.size[0]
    out = im.resize((width, height), Image.LANCZOS)

    if scale > 1.05:
        # Upscaling invents no detail, but an unsharp pass stops the result
        # reading as mush. Kept conservative: heavier settings halo the
        # shoulder-against-window edge badly.
        out = out.filter(ImageFilter.UnsharpMask(radius=1.3, percent=78, threshold=3))
    else:
        out = out.filter(ImageFilter.UnsharpMask(radius=0.8, percent=45, threshold=3))

    # A touch of contrast and saturation so the portrait holds its own
    # against the site's saturated indigo/cyan surroundings.
    out = ImageEnhance.Contrast(out).enhance(1.045)
    out = ImageEnhance.Color(out).enhance(1.05)
    return out


def main():
    src = sys.argv[1] if len(sys.argv) > 1 else os.path.join(SOURCES, "portrait-suit-original.jpg")
    im = Image.open(src).convert("RGB")
    print(f"source      {os.path.basename(src)}  {im.size[0]}x{im.size[1]}")

    cropped = crop_to_ratio(im)
    print(f"cropped     {cropped.size[0]}x{cropped.size[1]}  ratio {cropped.size[0]/cropped.size[1]:.3f}")

    for suffix, width in [("", DISPLAY_WIDTH), ("@2x", DISPLAY_WIDTH * 2)]:
        out = finish(cropped, width)
        path = os.path.join(IMAGES, f"portrait{suffix}.jpg")
        out.save(path, "JPEG", quality=88, optimize=True, progressive=True)
        upscale = width / cropped.size[0]
        print(f"  wrote {os.path.basename(path):26s} {out.size[0]}x{out.size[1]} "
              f"{os.path.getsize(path):>7,d} B  ({upscale:.2f}x source)")


if __name__ == "__main__":
    main()
