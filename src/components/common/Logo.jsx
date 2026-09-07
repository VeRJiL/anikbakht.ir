import React from 'react';

// The split-V mark. Kept identical to V_OUTLINE in scripts/build_brand.py,
// which generates the favicon, PWA icons and OG card from the same geometry.
const V_PATH = 'M14 22 L36 22 L50 58 L72 22 L86 22 L50 80 Z';

/**
 * The bare mark. Inherits colour, so it can sit anywhere in the UI.
 */
export const VMark = ({ className = 'h-5 w-5', title }) => (
    <svg
        viewBox="14 22 72 58"
        className={className}
        fill="currentColor"
        role={title ? 'img' : 'presentation'}
        aria-hidden={title ? undefined : true}
    >
        {title && <title>{title}</title>}
        <path d={V_PATH} />
    </svg>
);

/**
 * The avatar lockup: the same letterform knocked out of a gradient tile.
 * This is what the favicon and app icons show, so the nav matches the tab.
 */
const Logo = ({ className = 'h-9 w-9', title = 'VeRJiL' }) => (
    <span
        className={`relative grid shrink-0 place-items-center overflow-hidden rounded-xl
                    bg-gradient-to-br from-php to-go ${className}`}
    >
        {/* Ink, not text-bg: the tile is the gradient in both themes, so a
            theme-following V would turn near-white in light mode and drop to
            about 2:1 against the cyan end. Ink holds above 5:1 across the
            whole ramp, and keeps the nav identical to the favicon. */}
        <VMark className="h-[45%] w-[45%] text-[#080B14]" title={title} />
    </span>
);

export default Logo;
