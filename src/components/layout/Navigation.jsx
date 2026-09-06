import React, { useEffect, useState } from 'react';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { profile } from '../../data/profile';
import { useActiveSection, useScrollProgress } from '../../hooks/useScrollAnimation';

export const NAV_LINKS = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
];

const NAV_IDS = NAV_LINKS.map((l) => l.id);

const Navigation = ({ isDark, toggleTheme }) => {
    const { y, progress } = useScrollProgress();
    const active = useActiveSection(NAV_IDS);
    const [open, setOpen] = useState(false);
    const condensed = y > 24;

    // Don't let the page scroll behind the open mobile sheet.
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <>
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]
                           focus:rounded-lg focus:bg-php focus:px-4 focus:py-2 focus:text-white"
            >
                Skip to content
            </a>

            <header
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                    condensed
                        ? 'border-b border-line/70 bg-bg/75 backdrop-blur-xl'
                        : 'border-b border-transparent bg-transparent'
                }`}
            >
                <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-20">
                    <a href="#top" className="group flex items-center gap-3" aria-label="Back to top">
                        <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-php to-go font-display text-sm font-bold text-white">
                            AN
                        </span>
                        <span className="hidden flex-col leading-tight sm:flex">
                            <span className="font-display text-sm font-semibold tracking-tight">{profile.name}</span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                                PHP · Go · Backend
                            </span>
                        </span>
                    </a>

                    <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                aria-current={active === link.id ? 'true' : undefined}
                                className={`relative rounded-lg px-3.5 py-2 text-sm transition-colors ${
                                    active === link.id ? 'text-fg' : 'text-muted hover:text-fg'
                                }`}
                            >
                                {link.label}
                                <span
                                    className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-gradient-to-r from-php to-go
                                                transition-transform duration-300 ${
                                                    active === link.id ? 'scale-x-100' : 'scale-x-0'
                                                }`}
                                />
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                            className="grid h-9 w-9 place-items-center rounded-lg border border-line/70 text-muted
                                       transition-colors hover:border-php/40 hover:text-fg"
                        >
                            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        </button>

                        <a
                            href={profile.cv}
                            download
                            className="hidden items-center gap-2 rounded-lg bg-fg px-4 py-2 text-sm font-medium text-bg
                                       transition-transform hover:-translate-y-0.5 sm:inline-flex"
                        >
                            <Download className="h-4 w-4" />
                            CV
                        </a>

                        <button
                            type="button"
                            onClick={() => setOpen((o) => !o)}
                            aria-label={open ? 'Close menu' : 'Open menu'}
                            aria-expanded={open}
                            className="grid h-9 w-9 place-items-center rounded-lg border border-line/70 text-muted
                                       transition-colors hover:text-fg md:hidden"
                        >
                            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </button>
                    </div>
                </div>

                {/* Reading progress */}
                <div
                    aria-hidden
                    className="h-px origin-left bg-gradient-to-r from-php via-php to-go transition-transform duration-150"
                    style={{ transform: `scaleX(${progress})` }}
                />
            </header>

            {/* Mobile sheet */}
            <div
                className={`fixed inset-0 z-40 md:hidden ${open ? '' : 'pointer-events-none'}`}
                aria-hidden={!open}
            >
                <div
                    onClick={() => setOpen(false)}
                    className={`absolute inset-0 bg-bg/80 backdrop-blur-lg transition-opacity duration-300 ${
                        open ? 'opacity-100' : 'opacity-0'
                    }`}
                />
                <nav
                    className={`absolute inset-x-4 top-24 rounded-2xl border border-line/80 bg-surface/95 p-3
                                shadow-lift transition-all duration-300 ${
                                    open ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
                                }`}
                    aria-label="Sections"
                >
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={() => setOpen(false)}
                            tabIndex={open ? 0 : -1}
                            className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base text-muted
                                       transition-colors hover:bg-elevated hover:text-fg"
                        >
                            {link.label}
                            <span className="font-mono text-xs text-faint">
                                0{NAV_IDS.indexOf(link.id) + 1}
                            </span>
                        </a>
                    ))}
                    <a
                        href={profile.cv}
                        download
                        onClick={() => setOpen(false)}
                        tabIndex={open ? 0 : -1}
                        className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-fg px-4 py-3.5
                                   text-sm font-medium text-bg"
                    >
                        <Download className="h-4 w-4" />
                        Download CV
                    </a>
                </nav>
            </div>
        </>
    );
};

export default Navigation;
