import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (isVisible) {
            let startTime;
            const animateCount = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                setCount(Math.floor(progress * end));
                if (progress < 1) {
                    requestAnimationFrame(animateCount);
                }
            };
            requestAnimationFrame(animateCount);
        }
    }, [isVisible, end, duration]);

    return (
        <span ref={counterRef} className="text-3xl font-bold text-white">
      {count}{suffix}
    </span>
    );
};

export default AnimatedCounter;