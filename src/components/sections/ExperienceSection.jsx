import React, { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import Reveal from '../common/Reveal';
import RichText from '../common/RichText';
import SectionHeading from '../common/SectionHeading';
import SpotlightCard from '../common/SpotlightCard';
import { experiences } from '../../data/experiences';

const PREVIEW = 3;

const ExperienceCard = ({ job }) => {
    const [expanded, setExpanded] = useState(false);
    const hidden = job.achievements.length - PREVIEW;
    const shown = expanded ? job.achievements : job.achievements.slice(0, PREVIEW);
    const panelId = `role-${job.id}`;

    return (
        <SpotlightCard className="p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                            {job.role}
                        </h3>
                        {job.current && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                Now
                            </span>
                        )}
                    </div>
                    <p className="mt-1.5 text-base font-medium text-php">{job.company}</p>
                </div>

                <div className="text-left sm:text-right">
                    <p className="font-mono text-xs text-muted">{job.period}</p>
                    <p className="mt-1 flex items-center gap-1 font-mono text-[11px] text-faint sm:justify-end">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                    </p>
                </div>
            </div>

            <p className="mt-4 text-pretty leading-relaxed text-muted">
                <RichText text={job.summary} />
            </p>

            {job.highlight && (
                <div className="mt-5 inline-flex items-baseline gap-2.5 rounded-xl border border-line/80 bg-elevated/50 px-4 py-2.5">
                    <span className="font-display text-xl font-bold tracking-tight text-fg">
                        {job.highlight.value}
                    </span>
                    <span className="text-xs text-muted">{job.highlight.label}</span>
                </div>
            )}

            <ul id={panelId} className="mt-6 space-y-3">
                {shown.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span
                            aria-hidden
                            className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-php/70"
                        />
                        <RichText text={point} className="text-pretty" />
                    </li>
                ))}
            </ul>

            {hidden > 0 && (
                <button
                    type="button"
                    onClick={() => setExpanded((v) => !v)}
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    className="mt-5 inline-flex items-center gap-1.5 rounded-lg text-sm font-medium text-php
                               transition-colors hover:text-fg"
                >
                    {expanded ? 'Show less' : `${hidden} more ${hidden === 1 ? 'highlight' : 'highlights'}`}
                    <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                    />
                </button>
            )}

            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-line/70 pt-5">
                {job.tech.map((t) => (
                    <span key={t} className={`chip ${t === 'PHP' || t === 'Go' ? 'chip-accent' : ''}`}>
                        {t}
                    </span>
                ))}
            </div>
        </SpotlightCard>
    );
};

const ExperienceSection = () => (
    <section id="experience" className="relative scroll-mt-24 py-24 sm:py-32">
        <div aria-hidden className="hairline absolute inset-x-0 top-0" />

        <div className="container-page">
            <SectionHeading
                index="03"
                eyebrow="Experience"
                title={
                    <>
                        Six teams, one recurring{' '}
                        <span className="gradient-text">problem to solve</span>.
                    </>
                }
                lead="An application that outgrew its architecture, and a deadline that will not move. Here is how that went, most recent first."
            />

            <div className="relative mt-14">
                {/* Timeline spine (desktop) */}
                <div
                    aria-hidden
                    className="absolute left-[7px] top-2 hidden h-full w-px bg-gradient-to-b from-php/60 via-line to-transparent lg:block"
                />

                <div className="space-y-4 lg:space-y-6 lg:pl-12">
                    {experiences.map((job, i) => (
                        <Reveal key={job.id} delay={Math.min(i, 3) * 70} className="relative">
                            {/* Timeline node */}
                            <span
                                aria-hidden
                                className={`absolute -left-12 top-9 hidden h-4 w-4 place-items-center rounded-full
                                            border-2 border-bg lg:grid ${
                                                job.current
                                                    ? 'bg-gradient-to-br from-php to-go'
                                                    : 'bg-line'
                                            }`}
                            />
                            <ExperienceCard job={job} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default ExperienceSection;
