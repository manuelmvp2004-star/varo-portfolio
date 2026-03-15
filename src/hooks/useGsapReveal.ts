'use client';

import { useEffect, useRef, RefObject } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface GsapRevealOptions {
    enabled?: boolean;
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
        enabled = true,
        y = 40,
        x = 0,
        opacity = 0,
        duration = 0.8,
        delay = 0,
        ease = 'power3.out',
        stagger = 0,
        childSelector,
        markers = false,
        start = 'top 90%',
        once = true,
    } = options;

    const ref = useRef<T | null>(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        if (!enabled) return;

        const getTargets = (node: HTMLElement): HTMLElement[] => {
            if (childSelector) {
                return Array.from(node.querySelectorAll<HTMLElement>(childSelector));
            }

            if (node.classList.contains('gsap-stagger-parent')) {
                return Array.from(node.children).filter(
                    (child): child is HTMLElement => child instanceof HTMLElement
                );
            }

            const hiddenDescendants = Array.from(
                node.querySelectorAll<HTMLElement>('.gsap-hidden')
            );

            if (hiddenDescendants.length > 0) {
                return hiddenDescendants;
            }

            return [];
        };

        const revealElement = (target: HTMLElement) => {
            target.style.opacity = '1';
            target.style.visibility = 'visible';
            target.style.transform = 'none';
        };

        const revealImmediately = () => {
            revealElement(element);
            const targets = getTargets(element);
            targets.forEach(revealElement);
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

            const targets = getTargets(node);
            const animatedTargets: HTMLElement[] = targets.length > 0 ? targets : [node];

            ctx = gsap.context(() => {
                gsap.set(animatedTargets, {
                    x,
                    y,
                    autoAlpha: opacity,
                });

                gsap.to(animatedTargets, {
                    x: 0,
                    y: 0,
                    autoAlpha: 1,
                    duration,
                    delay,
                    stagger: animatedTargets.length > 1 ? stagger : 0,
                    ease,
                    immediateRender: false,
                    clearProps: 'transform',
                    scrollTrigger: {
                        trigger: node,
                        start,
                        once,
                        markers,
                        invalidateOnRefresh: true,
                    },
                });
            }, node);
        };

        void initAnimation();

        return () => {
            isCancelled = true;
            ctx?.revert();
        };
    }, [
        childSelector,
        delay,
        duration,
        enabled,
        ease,
        markers,
        once,
        opacity,
        prefersReducedMotion,
        stagger,
        start,
        x,
        y,
    ]);

    return ref;
}
