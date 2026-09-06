import React, { useEffect, useRef, useState } from 'react';

/**
 * A soft glow that follows the pointer. Skipped entirely on touch devices and
 * when the visitor has asked for reduced motion.
 */
const Spotlight = () => {
    const ref = useRef(null);
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const fine = window.matchMedia('(pointer: fine)').matches;
        const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!fine || calm) return undefined;

        setEnabled(true);
        let frame = null;
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;

        const paint = () => {
            frame = null;
            if (ref.current) ref.current.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
        };
        const onMove = (e) => {
            x = e.clientX;
            y = e.clientY;
            if (frame === null) frame = window.requestAnimationFrame(paint);
        };

        window.addEventListener('pointermove', onMove, { passive: true });
        return () => {
            window.removeEventListener('pointermove', onMove);
            if (frame !== null) window.cancelAnimationFrame(frame);
        };
    }, []);

    if (!enabled) return null;

    return (
        <div
            ref={ref}
            aria-hidden
            className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[600px] w-[600px] rounded-full
                       bg-[radial-gradient(circle,rgb(var(--php)/0.10),transparent_62%)] blur-2xl md:block"
        />
    );
};

export default Spotlight;
