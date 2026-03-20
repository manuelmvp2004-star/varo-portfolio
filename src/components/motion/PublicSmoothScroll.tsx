'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { useHomeIntro } from './HomeIntroContext';

const DESKTOP_POINTER_QUERY = '(hover: hover) and (pointer: fine)';
const SMOOTH_WRAPPER_SELECTOR = '#smooth-wrapper';
const SMOOTH_CONTENT_SELECTOR = '#smooth-content';

interface SmoothScroller {
    kill: () => void;
    scrollTo: (target: number | string | Element, smooth?: boolean, position?: string) => void;
}

function scrollDocumentToTop() {
    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;

    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);

    requestAnimationFrame(() => {
        html.style.scrollBehavior = previousScrollBehavior;
    });
}

export function PublicSmoothScroll() {
    const pathname = usePathname();
    const prefersReducedMotion = usePrefersReducedMotion();
    const { isHomeRoute, phase } = useHomeIntro();
    const smootherRef = useRef<SmoothScroller | null>(null);
    const isSmoothReady = !prefersReducedMotion && (!isHomeRoute || phase === 'complete');

    useLayoutEffect(() => {
        if (typeof window === 'undefined') return;

        if (smootherRef.current) {
            smootherRef.current.scrollTo(0, false);
            return;
        }

        scrollDocumentToTop();
    }, [pathname]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const mediaQuery = window.matchMedia(DESKTOP_POINTER_QUERY);
        if (!isSmoothReady || !mediaQuery.matches) {
            smootherRef.current?.kill();
            smootherRef.current = null;
            return;
        }

        let isCancelled = false;
        let currentSmoother: SmoothScroller | null = null;

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
                smooth: 1.45,
                effects: true,
                normalizeScroll: true,
                smoothTouch: 0,
                ignoreMobileResize: true,
            }) as SmoothScroller;

            if (isCancelled) {
                smoother.kill();
                return;
            }

            currentSmoother = smoother;
            smootherRef.current = smoother;

            requestAnimationFrame(() => {
                smoother.scrollTo(0, false);
                ScrollTrigger.refresh();
            });
        };

        void initSmoother();

        return () => {
            isCancelled = true;
            currentSmoother?.kill();

            if (smootherRef.current === currentSmoother) {
                smootherRef.current = null;
            }
        };
    }, [pathname, isSmoothReady]);

    return null;
}
