import React, { useCallback, useRef } from 'react';

/**
 * Card whose border picks up a light where the cursor is. The position is
 * written straight to CSS custom properties, so hovering never re-renders.
 */
const SpotlightCard = ({ children, className = '', as: Tag = 'div', ...rest }) => {
    const ref = useRef(null);

    const onMove = useCallback((e) => {
        const node = ref.current;
        if (!node) return;
        const r = node.getBoundingClientRect();
        node.style.setProperty('--mx', `${e.clientX - r.left}px`);
        node.style.setProperty('--my', `${e.clientY - r.top}px`);
    }, []);

    return (
        <Tag
            ref={ref}
            onPointerMove={onMove}
            className={`group/card relative isolate overflow-hidden rounded-2xl border border-line/80
                        bg-surface/60 backdrop-blur-xl transition-[border-color,transform,box-shadow] duration-300
                        hover:-translate-y-1 hover:border-php/40 hover:shadow-lift ${className}`}
            {...rest}
        >
            <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
                style={{
                    background:
                        'radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), rgb(var(--php) / 0.14), transparent 68%)',
                }}
            />
            {children}
        </Tag>
    );
};

export default SpotlightCard;
