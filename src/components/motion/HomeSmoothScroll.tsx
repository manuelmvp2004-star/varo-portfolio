'use client';

import { useEffect } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { useHomeIntro } from './HomeIntroContext';

const DESKTOP_POINTER_QUERY = '(hover: hover) and (pointer: fine)';
const SMOOTH_WRAPPER_SELECTOR = '#smooth-wrapper';
const SMOOTH_CONTENT_SELECTOR = '#smooth-content';

export function HomeSmoothScroll() {
    const prefersReducedMotion = usePrefersReducedMotion();
    const { isHomeRoute, phase } = useHomeIntro();

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (!isHomeRoute || phase !== 'complete' || prefersReducedMotion) return;

        const mediaQuery = window.matchMedia(DESKTOP_POINTER_QUERY);
        if (!mediaQuery.matches) return;

        let isCancelled = false;
        let cleanupSmoother: (() => void) | null = null;

        const initSmoother = async () => {
            const gsapModule = await import('gsap');
            const scrollTriggerModule = await import('gsap/ScrollTrigger');
            const scrollSmootherModule = await import('gsap/ScrollSmoother');

            if (isCancelled) return;

            const wrapper = document.querySelector<HTMLElement>(SMOOTH_WRAPPER_SELECTOR);
            const content = document.querySelector<HTMLElement>(SMOOTH_CONTENT_SELECTOR);
            if (!wrapper || !content) return;

            const gsap = gsapModule.gsap;
            const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
            const ScrollSmoother = scrollSmootherModule.ScrollSmoother;

            gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

            ScrollSmoother.get()?.kill();

            const smoother = ScrollSmoother.create({
                wrapper,
                content,
                smooth: 1.6,
                effects: true,
                normalizeScroll: true,
                smoothTouch: 0,
                ignoreMobileResize: true,
            });

            cleanupSmoother = () => {
                smoother.kill();
            };

            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });
        };

        void initSmoother();

        return () => {
            isCancelled = true;
            cleanupSmoother?.();
        };
    }, [isHomeRoute, phase, prefersReducedMotion]);

    return null;
}
