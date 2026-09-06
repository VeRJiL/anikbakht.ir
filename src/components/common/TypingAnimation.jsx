import React, { useEffect, useState } from 'react';

/**
 * Types each phrase, holds, deletes, moves on. `words[0]` is rendered
 * immediately so the line never starts empty (and reduced-motion users just
 * see the first phrase).
 */
const TypingAnimation = ({ words, typeSpeed = 70, deleteSpeed = 34, hold = 1900, className = '' }) => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState(words[0] || '');
    const [phase, setPhase] = useState('hold');
    const [still, setStill] = useState(false);

    useEffect(() => {
        setStill(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }, []);

    useEffect(() => {
        if (still || words.length < 2) return undefined;
        const word = words[index];

        if (phase === 'hold') {
            const t = setTimeout(() => setPhase('deleting'), hold);
            return () => clearTimeout(t);
        }
        if (phase === 'deleting') {
            if (text === '') {
                setIndex((i) => (i + 1) % words.length);
                setPhase('typing');
                return undefined;
            }
            const t = setTimeout(() => setText(text.slice(0, -1)), deleteSpeed);
            return () => clearTimeout(t);
        }
        // typing
        if (text === word) {
            setPhase('hold');
            return undefined;
        }
        const t = setTimeout(() => setText(word.slice(0, text.length + 1)), typeSpeed);
        return () => clearTimeout(t);
    }, [text, phase, index, words, typeSpeed, deleteSpeed, hold, still]);

    return (
        <span className={className}>
            {text}
            <span className="ml-0.5 inline-block w-[2px] animate-caret self-stretch bg-php align-middle" style={{ height: '1em' }} />
        </span>
    );
};

export default TypingAnimation;
