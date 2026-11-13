import React from 'react';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import Aurora from '../common/Aurora';
import Marquee from '../common/Marquee';
import Reveal from '../common/Reveal';
import TypingAnimation from '../common/TypingAnimation';
import { marqueeTech, profile } from '../../data/profile';

const ROLES = [
    'PHP & Laravel systems',
    'Go microservices',
    'monolith → microservices',
    'APIs that stay fast',
];

// A small, honest code sample — Go handler in front of a PHP-era database.
const CODE = [
    { t: '// after the migration: 200ms → 80ms', c: 'text-faint' },
    { t: 'func (h *Handler) Orders(w http.ResponseWriter, r *http.Request) {', c: '' },
    { t: '    if hit, ok := h.cache.Get(r.Context(), key); ok {', c: '' },
    { t: '        writeJSON(w, hit)   // ~80% of traffic stops here', c: '' },
    { t: '        return', c: '' },
    { t: '    }', c: '' },
    { t: '    orders, err := h.repo.ListForCustomer(r.Context(), id)', c: '' },
    { t: '    ...', c: 'text-faint' },
    { t: '}', c: '' },
];

const Hero = () => (
    <section id="top" className="relative isolate overflow-hidden pt-32 sm:pt-40">
        <Aurora />

        <div className="container-page relative">
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr,0.95fr] lg:gap-10">
                {/* ---- Copy ---- */}
                <div>
                    <Reveal immediate>
                        <span className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-surface/60 py-1.5 pl-1.5 pr-4 backdrop-blur">
                            <span className="relative flex h-5 w-5 items-center justify-center">
                                <span className="absolute h-2 w-2 animate-ping rounded-full bg-emerald-400/70" />
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            </span>
                            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                                {profile.availability}
                            </span>
                        </span>
                    </Reveal>

                    <Reveal immediate delay={80}>
                        <h1 className="mt-7 font-display text-[clamp(3rem,9vw,5.75rem)] font-bold leading-[0.92] tracking-[-0.04em]">
                            <span className="block">{profile.firstName}</span>
                            <span className="block gradient-text">{profile.lastName}</span>
                        </h1>
                    </Reveal>

                    <Reveal immediate delay={140}>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                            Senior Backend Engineer,{' '}
                            <span className="font-semibold text-fg">{profile.yearsExperience}+ years</span>{' '}
                            deep in{' '}
                            <TypingAnimation
                                words={ROLES}
                                className="font-medium text-fg"
                            />
                        </p>
                    </Reveal>

                    <Reveal immediate delay={200}>
                        <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted">
                            I turn <span className="font-semibold text-php">PHP</span> monoliths into systems that
                            scale — and write the <span className="font-semibold text-go">Go</span> services that sit
                            beside them. Laravel, Gin, Redis, RabbitMQ, and the migration path between them.
                        </p>
                    </Reveal>

                    <Reveal immediate delay={260}>
                        <div className="mt-9 flex flex-wrap items-center gap-3">
                            <a
                                href="#contact"
                                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl
                                           bg-gradient-to-r from-php to-go px-6 py-3.5 text-sm font-semibold text-white
                                           shadow-glow transition-transform hover:-translate-y-0.5"
                            >
                                <span className="relative z-10">Start a conversation</span>
                                <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                <span className="absolute inset-0 -translate-x-full bg-white/20 blur-md transition-transform duration-500 group-hover:translate-x-full" />
                            </a>

                            <a
                                href={profile.cv}
                                download
                                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface/60 px-6 py-3.5
                                           text-sm font-medium text-fg backdrop-blur transition-colors hover:border-php/40"
                            >
                                <Download className="h-4 w-4" />
                                Download CV
                            </a>
                        </div>
                    </Reveal>

                    <Reveal immediate delay={320}>
                        <div className="mt-8 flex items-center gap-2">
                            {[
                                { href: `mailto:${profile.email}`, Icon: Mail, label: 'Email' },
                                { href: profile.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                                { href: profile.github, Icon: Github, label: 'GitHub' },
                            ].map(({ href, Icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                                    className="grid h-10 w-10 place-items-center rounded-xl border border-line/70 text-muted
                                               transition-all hover:-translate-y-0.5 hover:border-php/40 hover:text-fg"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                            <span className="ml-2 font-mono text-xs text-faint">{profile.location}</span>
                        </div>
                    </Reveal>
                </div>

                {/* ---- Portrait + code card ---- */}
                <Reveal immediate delay={180} className="relative mx-auto w-full max-w-[20.5rem] lg:ml-auto lg:mr-0">
                    <div className="relative">
                        <div
                            aria-hidden
                            className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-php/25 via-transparent to-go/25 blur-2xl"
                        />

                        <div className="relative overflow-hidden rounded-[1.75rem] border border-line/80 bg-surface/60 p-2 backdrop-blur-xl">
                            <img
                                src={profile.photo}
                                srcSet={`${profile.photo} 1x, ${profile.photo2x} 2x`}
                                alt={`${profile.name}, Senior Backend Engineer`}
                                width="330"
                                height="412"
                                fetchPriority="high"
                                className="aspect-[4/5] w-full rounded-[1.35rem] object-cover"
                            />

                            {/* Floating language badges */}
                            <div className="absolute left-6 top-6 flex flex-col gap-2">
                                <span className="animate-float-y rounded-xl border border-php/30 bg-bg/85 px-3 py-1.5 font-mono text-xs font-semibold text-php backdrop-blur">
                                    PHP · Laravel
                                </span>
                                <span
                                    className="animate-float-y rounded-xl border border-go/30 bg-bg/85 px-3 py-1.5 font-mono text-xs font-semibold text-go backdrop-blur"
                                    style={{ animationDelay: '-2.4s' }}
                                >
                                    Go · Gin
                                </span>
                            </div>
                        </div>

                        {/* Code card, overlapping the portrait */}
                        <div className="relative -mt-10 ml-auto w-[min(112%,22rem)] overflow-hidden rounded-2xl border border-line/80 bg-[rgb(var(--bg))]/92 shadow-lift backdrop-blur-xl">
                            <div className="flex items-center gap-2 border-b border-line/70 px-4 py-2.5">
                                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                                <span className="ml-2 font-mono text-[11px] text-faint">orders_handler.go</span>
                            </div>
                            <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[11px] leading-[1.7] text-muted sm:text-xs">
                                <code>
                                    {CODE.map((line, i) => (
                                        <div key={i} className={line.c}>
                                            {line.t || ' '}
                                        </div>
                                    ))}
                                </code>
                            </pre>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* ---- Tech ticker ---- */}
            <Reveal immediate delay={120} className="mt-20">
                <Marquee items={marqueeTech} />
            </Reveal>

            <div className="flex justify-center pb-16 pt-12">
                <a
                    href="#about"
                    className="group flex flex-col items-center gap-2 text-faint transition-colors hover:text-fg"
                    aria-label="Scroll to about"
                >
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em]">Scroll</span>
                    <ArrowDown className="h-4 w-4 animate-float-y" />
                </a>
            </div>
        </div>
    </section>
);

export default Hero;
