import React from 'react';
import { GraduationCap, Languages, MapPin, Sparkles } from 'lucide-react';
import Reveal from '../common/Reveal';
import RichText from '../common/RichText';
import SectionHeading from '../common/SectionHeading';
import SpotlightCard from '../common/SpotlightCard';
import AnimatedCounter from '../common/AnimatedCounter';
import { education, intro, languages, metrics, profile } from '../../data/profile';

const AboutSection = () => (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
        <div className="container-page">
            <SectionHeading
                index="01"
                eyebrow="About"
                title={
                    <>
                        Nine years of making backends{' '}
                        <span className="gradient-text">behave under load</span>.
                    </>
                }
            />

            <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr,0.65fr]">
                {/* Narrative */}
                <div className="space-y-5">
                    {intro.map((paragraph, i) => (
                        <Reveal key={i} delay={i * 90}>
                            <p className="text-pretty text-base leading-[1.85] text-muted sm:text-lg">
                                <RichText text={paragraph.replace(/\s+/g, ' ').trim()} />
                            </p>
                        </Reveal>
                    ))}

                    <Reveal delay={280}>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {profile.stack.map((item, i) => (
                                <span key={item} className={`chip ${i === 0 ? 'chip-accent' : ''}`}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </Reveal>
                </div>

                {/* Facts */}
                <div className="space-y-3">
                    {[
                        { Icon: MapPin, label: 'Based in', value: profile.location, sub: 'Working remote-first' },
                        {
                            Icon: GraduationCap,
                            label: 'Education',
                            value: education.degree,
                            sub: `${education.school} · ${education.period}`,
                        },
                        {
                            Icon: Languages,
                            label: 'Languages',
                            value: languages.map((l) => l.name).join(' · '),
                            sub: languages.map((l) => `${l.name} (${l.level})`).join(', '),
                        },
                        {
                            Icon: Sparkles,
                            label: 'Currently',
                            value: profile.availability,
                            sub: 'PHP-first roles, Go a close second',
                        },
                    ].map(({ Icon, label, value, sub }, i) => (
                        <Reveal key={label} delay={i * 80}>
                            <SpotlightCard className="p-5">
                                <div className="flex items-start gap-3.5">
                                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-php/10 text-php">
                                        <Icon className="h-4 w-4" />
                                    </span>
                                    <div className="min-w-0">
                                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                                            {label}
                                        </p>
                                        <p className="mt-1 text-sm font-medium text-fg">{value}</p>
                                        <p className="mt-0.5 text-xs leading-relaxed text-muted">{sub}</p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Metrics strip */}
            <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line/80 bg-line/60 sm:grid-cols-3 lg:grid-cols-6">
                {metrics.map((m, i) => (
                    <Reveal key={m.label} delay={i * 70} className="bg-bg">
                        <div className="group h-full bg-surface/40 p-5 transition-colors hover:bg-elevated/70">
                            <AnimatedCounter
                                end={m.value}
                                prefix={m.prefix || ''}
                                suffix={m.suffix || ''}
                                className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl"
                            />
                            <p className="mt-2 text-xs font-medium leading-snug text-fg/85">{m.label}</p>
                            <p className="mt-1 text-[11px] leading-snug text-faint">{m.hint}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default AboutSection;
