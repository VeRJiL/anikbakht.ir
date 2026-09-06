import React, { useEffect, useState } from 'react';
import { useInView } from '../../hooks/useScrollAnimation';

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

/** Counts up to `end` once the number scrolls into view. */
const AnimatedCounter = ({ end, duration = 1600, prefix = '', suffix = '', className = '' }) => {
    const [ref, inView] = useInView({ threshold: 0.4 });
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!inView) return undefined;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setValue(end);
            return undefined;
        }

        let frame;
        let start;
        const step = (ts) => {
            if (start === undefined) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            setValue(Math.round(easeOut(progress) * end));
            if (progress < 1) frame = window.requestAnimationFrame(step);
        };
        frame = window.requestAnimationFrame(step);
        return () => window.cancelAnimationFrame(frame);
    }, [inView, end, duration]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {value}
            {suffix}
        </span>
    );
};

export default AnimatedCounter;
