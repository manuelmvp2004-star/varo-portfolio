'use client';

import { useEffect, useRef, RefObject } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface GsapRevealOptions {
    y?: number;
    x?: number;
    opacity?: number;
    duration?: number;
    delay?: number;
    ease?: string;
    stagger?: number;
    markers?: boolean;
    start?: string;
}

export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(
    options: GsapRevealOptions = {}
): RefObject<T | null> {
    const {
        y = 40,
        x = 0,
        opacity = 0,
        duration = 0.8,
        delay = 0,
        ease = 'power3.out',
        start = 'top 85%',
    } = options;

    const ref = useRef<T | null>(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (!ref.current || prefersReducedMotion) return;

        let isCancelled = false;
        let ctx: { revert: () => void } | undefined;

        const initAnimation = async () => {
            const gsapModule = await import('gsap');
            const ScrollTriggerModule = await import('gsap/ScrollTrigger');
            const gsap = gsapModule.gsap;
            const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;

            if (isCancelled || !ref.current) return;
            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                gsap.from(ref.current!, {
                    y,
                    x,
                    opacity,
                    duration,
                    delay,
                    ease,
                    scrollTrigger: {
                        trigger: ref.current!,
                        start,
                        once: true,
                    },
                });
            });
        };

        void initAnimation();

        return () => {
            isCancelled = true;
            ctx?.revert();
        };
    }, [delay, duration, ease, opacity, prefersReducedMotion, start, x, y]);

    return ref;
}
