import React from 'react';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import SpotlightCard from '../common/SpotlightCard';
import TechIcon from '../common/TechIcon';
import { useInView } from '../../hooks/useScrollAnimation';
import { skillGroups } from '../../data/skills';

const SkillRow = ({ item, index, animate }) => (
    <li>
        <div className="flex items-center gap-3">
            <TechIcon tech={item.tech} className="h-6 w-6" />
            <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                    <span className="truncate text-sm font-medium text-fg">
                        {item.name}
                        {item.flagship && (
                            <span className="ml-2 align-middle font-mono text-[9px] uppercase tracking-[0.14em] text-php">
                                core
                            </span>
                        )}
                    </span>
                    <span className="shrink-0 font-mono text-[11px] tabular-nums text-faint">{item.level}</span>
                </div>
                <p className="mt-0.5 truncate text-xs text-muted">{item.detail}</p>
            </div>
        </div>

        <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-line/70">
            <div
                className={`h-full rounded-full ${
                    item.flagship ? 'bg-gradient-to-r from-php to-go' : 'bg-fg/25'
                } transition-[width] duration-1000 ease-out motion-reduce:transition-none`}
                style={{ width: animate ? `${item.level}%` : '0%', transitionDelay: `${index * 90}ms` }}
            />
        </div>
    </li>
);

const GroupCard = ({ group, position, featured }) => {
    const [ref, inView] = useInView({ threshold: 0.2 });

    // The grid span lives on the Reveal wrapper, since that is the grid item.
    return (
        <SpotlightCard className="h-full p-6 sm:p-7">
            <div ref={ref}>
                <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold tracking-tight">{group.label}</h3>
                    <span className="font-mono text-[10px] text-faint">{position}</span>
                </div>
                <p className="mt-1.5 text-xs text-muted">{group.blurb}</p>

                <ul className="mt-6 space-y-5">
                    {group.items.map((item, i) => (
                        <SkillRow key={item.name} item={item} index={i} animate={inView} />
                    ))}
                </ul>

                {featured && (
                    <div className="mt-7 rounded-xl border border-php/25 bg-php/[0.07] p-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-php">
                            What that looks like
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                            Laravel services and legacy <span className="font-semibold text-php">PHP</span> rescues
                            on one side; Gin/GORM services, gRPC and RabbitMQ on the other. Most of my best work has
                            been the bridge between the two.
                        </p>
                    </div>
                )}
            </div>
        </SpotlightCard>
    );
};

const SkillsSection = () => (
    <section id="skills" className="relative scroll-mt-24 py-24 sm:py-32">
        <div aria-hidden className="hairline absolute inset-x-0 top-0" />

        <div className="container-page">
            <SectionHeading
                index="02"
                eyebrow="Skills"
                title={
                    <>
                        The stack, in the order I{' '}
                        <span className="gradient-text">actually reach for it</span>.
                    </>
                }
                lead="PHP and Laravel first — that is where most of nine years went. Go is the other half, and everything below is what keeps both honest in production."
            />

            <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {skillGroups.map((group, i) => (
                    <Reveal
                        key={group.id}
                        delay={Math.min(i, 3) * 80}
                        className={i === 0 ? 'md:col-span-2 xl:col-span-1 xl:row-span-2' : ''}
                    >
                        <GroupCard group={group} position={`0${i + 1}`} featured={i === 0} />
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default SkillsSection;
