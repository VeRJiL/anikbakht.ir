import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text, speed = 100 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else {
            const resetTimeout = setTimeout(() => {
                setDisplayText('');
                setCurrentIndex(0);
            }, 3000);
            return () => clearTimeout(resetTimeout);
        }
    }, [currentIndex, text, speed]);

    return (
        <span className="font-mono text-green-400">
      {displayText}
            <span className="animate-pulse">|</span>
    </span>
    );
};

export default TypingAnimation;