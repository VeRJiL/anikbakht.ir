import React from 'react';
import Reveal from './Reveal';

const SectionHeading = ({ index, eyebrow, title, lead, align = 'left' }) => (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'}>
        <Reveal className="mb-4 flex items-center gap-3" delay={0}>
            {index && (
                <span className="font-mono text-xs text-php/70">{index}</span>
            )}
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted">{eyebrow}</span>
            <span className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
        </Reveal>

        <Reveal delay={60}>
            <h2 className="text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {title}
            </h2>
        </Reveal>

        {lead && (
            <Reveal delay={120}>
                <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">{lead}</p>
            </Reveal>
        )}
    </div>
);

export default SectionHeading;
