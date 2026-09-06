import React from 'react';

/**
 * The site's ambient backdrop: a faint grid, two slow-drifting colour fields
 * and a grain layer. Purely decorative and pointer-transparent.
 */
const Aurora = ({ className = '' }) => (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />

        <div className="absolute -left-[15%] -top-[25%] h-[42rem] w-[42rem] animate-drift rounded-full bg-php/25 blur-[120px] dark:bg-php/30" />
        <div
            className="absolute -right-[12%] top-[8%] h-[34rem] w-[34rem] animate-drift rounded-full bg-go/20 blur-[110px] dark:bg-go/25"
            style={{ animationDelay: '-8s', animationDuration: '30s' }}
        />
        <div
            className="absolute bottom-[-20%] left-[25%] h-[30rem] w-[30rem] animate-drift rounded-full bg-php/15 blur-[130px]"
            style={{ animationDelay: '-16s', animationDuration: '36s' }}
        />

        {/* The blobs are clipped by the section's overflow-hidden, which would
            otherwise leave a hard horizontal edge where the section ends.
            Fade the bottom into the page background instead. */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />

        {/* Grain — an inline SVG turbulence, so no network request. */}
        <div
            className="absolute inset-0 opacity-[0.035] mix-blend-overlay dark:opacity-[0.06]"
            style={{
                backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
        />
    </div>
);

export default Aurora;
