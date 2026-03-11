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
    const ref = useRef<T | null>(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (!ref.current || prefersReducedMotion) return;

        let gsap: typeof import('gsap')['gsap'] | undefined;
        let ScrollTrigger: typeof import('gsap/ScrollTrigger')['ScrollTrigger'] | undefined;
        let ctx: any;

        const {
            y = 40,
            x = 0,
            opacity = 0,
            duration = 0.8,
            delay = 0,
            ease = 'power3.out',
            start = 'top 85%',
        } = options;

        const initAnimation = async () => {
            const gsapModule = await import('gsap');
            const ScrollTriggerModule = await import('gsap/ScrollTrigger');

            gsap = gsapModule.gsap;
            ScrollTrigger = ScrollTriggerModule.ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            if (!ref.current) return;

            ctx = gsap.context(() => {
                gsap!.from(ref.current!, {
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

        initAnimation();

        return () => {
            ctx?.revert();
        };
    }, [prefersReducedMotion]);

    return ref;
}
