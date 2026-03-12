'use client';

import { useState, useEffect } from 'react';

export function useHeaderScroll(threshold: number = 60): boolean {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let frameId: number | null = null;

        const updateScrollState = () => {
            const nextValue = window.scrollY > threshold;
            setIsScrolled((prevValue) => (prevValue === nextValue ? prevValue : nextValue));
            frameId = null;
        };

        const handleScroll = () => {
            if (frameId !== null) return;
            frameId = window.requestAnimationFrame(updateScrollState);
        };

        updateScrollState();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (frameId !== null) {
                window.cancelAnimationFrame(frameId);
            }
        };
    }, [threshold]);

    return isScrolled;
}
