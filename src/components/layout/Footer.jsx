import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/profile';
import { NAV_LINKS } from './Navigation';

const Footer = () => (
    <footer className="relative border-t border-line/70">
        <div className="container-page py-12">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="font-display text-lg font-semibold tracking-tight">{profile.name}</p>
                    <p className="mt-1 font-mono text-xs text-faint">
                        Senior Backend Engineer · PHP / Laravel · Go
                    </p>
                </div>

                <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className="text-sm text-muted transition-colors hover:text-fg"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
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
                            className="grid h-9 w-9 place-items-center rounded-lg border border-line/70 text-muted
                                       transition-colors hover:border-php/40 hover:text-fg"
                        >
                            <Icon className="h-4 w-4" />
                        </a>
                    ))}
                    <a
                        href="#top"
                        aria-label="Back to top"
                        className="grid h-9 w-9 place-items-center rounded-lg border border-line/70 text-muted
                                   transition-colors hover:border-php/40 hover:text-fg"
                    >
                        <ArrowUp className="h-4 w-4" />
                    </a>
                </div>
            </div>

            <div className="mt-10 flex flex-col gap-2 border-t border-line/70 pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
                <p className="font-mono">Built with React, Vite &amp; Tailwind CSS.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
