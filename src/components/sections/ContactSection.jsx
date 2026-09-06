import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import Aurora from '../common/Aurora';
import Reveal from '../common/Reveal';
import SpotlightCard from '../common/SpotlightCard';
import { profile } from '../../data/profile';

const CopyButton = ({ value, label }) => {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            // Clipboard can be blocked (insecure context, denied permission).
            // The value is a visible link either way, so just do nothing.
        }
    };

    return (
        <button
            type="button"
            onClick={copy}
            aria-label={copied ? `${label} copied` : `Copy ${label}`}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-line/70 text-faint
                       transition-colors hover:border-php/40 hover:text-fg"
        >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
    );
};

const CHANNELS = [
    {
        Icon: Mail,
        label: 'Email',
        value: profile.email,
        href: `mailto:${profile.email}`,
        copyable: true,
        note: 'Best for roles and project enquiries',
    },
    {
        Icon: Linkedin,
        label: 'LinkedIn',
        value: profile.linkedinLabel,
        href: profile.linkedin,
        note: 'Full history and recommendations',
    },
    {
        Icon: Phone,
        label: 'Phone',
        value: profile.phone,
        href: profile.phoneHref,
        copyable: true,
        note: 'Türkiye · UTC+3',
    },
    {
        Icon: Github,
        label: 'GitHub',
        value: profile.githubLabel,
        href: profile.github,
        note: 'Code and side projects',
    },
];

const ContactSection = () => (
    <section id="contact" className="relative isolate scroll-mt-24 overflow-hidden py-24 sm:py-32">
        <Aurora />

        <div className="container-page relative">
            <div className="mx-auto max-w-2xl text-center">
                <Reveal>
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                        04 · Contact
                    </span>
                </Reveal>

                <Reveal delay={70}>
                    <h2 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight sm:text-6xl">
                        Got a <span className="gradient-text">PHP</span> codebase that needs to move faster?
                    </h2>
                </Reveal>

                <Reveal delay={130}>
                    <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted sm:text-lg">
                        I am open to senior backend roles — PHP/Laravel first, Go a close second — and to
                        consulting on migrations, performance work and service architecture.
                    </p>
                </Reveal>

                <Reveal delay={190}>
                    <div className="mt-9 flex flex-wrap justify-center gap-3">
                        <a
                            href={`mailto:${profile.email}`}
                            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-php to-go
                                       px-6 py-3.5 text-sm font-semibold text-white shadow-glow
                                       transition-transform hover:-translate-y-0.5"
                        >
                            <Mail className="h-4 w-4" />
                            Email me
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
            </div>

            <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-2">
                {CHANNELS.map(({ Icon, label, value, href, note, copyable }, i) => {
                    const external = href.startsWith('http');
                    return (
                        <Reveal key={label} delay={i * 70}>
                            <SpotlightCard className="p-5">
                                <div className="flex items-center gap-4">
                                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-php/10 text-php">
                                        <Icon className="h-5 w-5" />
                                    </span>

                                    <div className="min-w-0 flex-1">
                                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                                            {label}
                                        </p>
                                        <a
                                            href={href}
                                            target={external ? '_blank' : undefined}
                                            rel={external ? 'noreferrer' : undefined}
                                            className="mt-0.5 block truncate text-sm font-medium text-fg transition-colors hover:text-php"
                                        >
                                            {value}
                                        </a>
                                        <p className="mt-0.5 truncate text-xs text-muted">{note}</p>
                                    </div>

                                    {copyable && <CopyButton value={value} label={label} />}
                                </div>
                            </SpotlightCard>
                        </Reveal>
                    );
                })}
            </div>
        </div>
    </section>
);

export default ContactSection;
