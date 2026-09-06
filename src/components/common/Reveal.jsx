import React from 'react';
import { useInView } from '../../hooks/useScrollAnimation';

/**
 * Fades + lifts children into place the first time they enter the viewport.
 * `delay` staggers siblings (ms).
 *
 * Pass `immediate` for above-the-fold content: it animates straight away with
 * plain CSS instead of waiting on an IntersectionObserver, so the hero is never
 * blank on first paint.
 */
const Reveal = ({ children, delay = 0, as: Tag = 'div', className = '', y = 20, immediate = false, ...rest }) => {
    const [ref, inView] = useInView();

    if (immediate) {
        return (
            <Tag
                className={`animate-fade-up ${className}`}
                style={{ animationDelay: `${delay}ms` }}
                {...rest}
            >
                {children}
            </Tag>
        );
    }

    return (
        <Tag
            ref={ref}
            className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${className}`}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : `translateY(${y}px)`,
                transitionDelay: inView ? `${delay}ms` : '0ms',
            }}
            {...rest}
        >
            {children}
        </Tag>
    );
};

export default Reveal;
