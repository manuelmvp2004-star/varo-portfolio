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
    childSelector?: string;
    markers?: boolean;
    start?: string;
    once?: boolean;
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
        stagger = 0,
        childSelector,
        markers = false,
        start = 'top 85%',
        once = true,
    } = options;

    const ref = useRef<T | null>(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const revealImmediately = () => {
            element.style.opacity = '1';
            element.style.visibility = 'visible';
            element.style.transform = 'none';

            const targets = childSelector
                ? element.querySelectorAll<HTMLElement>(childSelector)
                : element.classList.contains('gsap-stagger-parent')
                    ? Array.from(element.children).filter(
                        (node): node is HTMLElement => node instanceof HTMLElement
                    )
                    : [];

            targets.forEach((target) => {
                target.style.opacity = '1';
                target.style.visibility = 'visible';
                target.style.transform = 'none';
            });
        };

        if (prefersReducedMotion) {
            revealImmediately();
            return;
        }

        let isCancelled = false;
        let ctx: { revert: () => void } | undefined;

        const initAnimation = async () => {
            const gsapModule = await import('gsap');
            const ScrollTriggerModule = await import('gsap/ScrollTrigger');
            const gsap = gsapModule.gsap;
            const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;

            if (isCancelled || !ref.current) return;
            gsap.registerPlugin(ScrollTrigger);

            const node = ref.current;
            if (!node) return;

            const targets = childSelector
                ? Array.from(node.querySelectorAll<HTMLElement>(childSelector))
                : node.classList.contains('gsap-stagger-parent')
                    ? Array.from(node.children).filter(
                        (child): child is HTMLElement => child instanceof HTMLElement
                    )
                    : [];

            ctx = gsap.context(() => {
                if (targets.length > 0) {
                    gsap.from(targets, {
                        y,
                        x,
                        autoAlpha: opacity,
                        duration,
                        delay,
                        stagger,
                        ease,
                        onStart: () => {
                            gsap.set(targets, { visibility: 'visible' });
                        },
                        scrollTrigger: {
                            trigger: node,
                            start,
                            once,
                            markers,
                        },
                    });
                    return;
                }

                gsap.from(node, {
                    y,
                    x,
                    autoAlpha: opacity,
                    duration,
                    delay,
                    ease,
                    onStart: () => {
                        gsap.set(node, { visibility: 'visible' });
                    },
                    scrollTrigger: {
                        trigger: node,
                        start,
                        once,
                        markers,
                    },
                });
            }, node);
        };

        void initAnimation();

        return () => {
            isCancelled = true;
            ctx?.revert();
        };
    }, [childSelector, delay, duration, ease, markers, once, opacity, prefersReducedMotion, stagger, start, x, y]);

    return ref;
}
