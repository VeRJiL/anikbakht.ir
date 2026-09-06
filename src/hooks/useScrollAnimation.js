import { useEffect, useRef, useState } from 'react';

/**
 * Fires once when the element scrolls into view. Returns [ref, inView].
 */
export const useInView = ({ threshold = 0.15, rootMargin = '0px 0px -8% 0px', once = true } = {}) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;

        // Without IntersectionObserver, show everything rather than hiding it.
        if (typeof IntersectionObserver === 'undefined') {
            setInView(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (once) observer.disconnect();
                } else if (!once) {
                    setInView(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return [ref, inView];
};

/** Scroll offset in px plus a 0–1 progress value for the whole document. */
export const useScrollProgress = () => {
    const [state, setState] = useState({ y: 0, progress: 0 });

    useEffect(() => {
        let frame = null;
        const update = () => {
            frame = null;
            const y = window.scrollY;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            setState({ y, progress: max > 0 ? Math.min(y / max, 1) : 0 });
        };
        const onScroll = () => {
            if (frame === null) frame = window.requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (frame !== null) window.cancelAnimationFrame(frame);
        };
    }, []);

    return state;
};

/** Which section id is currently under the top of the viewport. */
export const useActiveSection = (ids) => {
    const [active, setActive] = useState(ids[0]);
    const key = ids.join('|');

    useEffect(() => {
        const sections = key.split('|')
            .map((id) => document.getElementById(id))
            .filter(Boolean);
        if (!sections.length || typeof IntersectionObserver === 'undefined') return undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible) setActive(visible.target.id);
            },
            { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, [key]);

    return active;
};
