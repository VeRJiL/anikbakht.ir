import React from 'react';
import TechIcon from './TechIcon';

/**
 * Seamless infinite ticker. The list is rendered twice and translated by -50%,
 * so the loop point is invisible.
 */
const Marquee = ({ items, duration = 46 }) => (
    <div className="mask-x group relative overflow-hidden py-2">
        <ul
            className="flex w-max animate-marquee items-center gap-3 group-hover:[animation-play-state:paused]"
            style={{ '--marquee-duration': `${duration}s` }}
        >
            {[...items, ...items].map((tech, i) => (
                <li
                    key={`${tech}-${i}`}
                    aria-hidden={i >= items.length}
                    className="flex shrink-0 items-center gap-2 rounded-xl border border-line/70 bg-surface/50
                               px-3.5 py-2 backdrop-blur-sm transition-colors hover:border-php/40"
                >
                    <TechIcon tech={tech} className="h-5 w-5" />
                    <span className="whitespace-nowrap font-mono text-xs text-muted">{tech}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default Marquee;
