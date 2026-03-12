'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

function parseNumber(value: string | undefined, fallback: number): number {
    if (!value) return fallback;
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
}

function revealImmediately() {
    const revealElements = document.querySelectorAll<HTMLElement>('[data-page-reveal]');
    const staggerParents = document.querySelectorAll<HTMLElement>('[data-page-stagger]');

    revealElements.forEach((element) => {
        element.style.opacity = '1';
        element.style.visibility = 'visible';
        element.style.transform = 'none';
    });

    staggerParents.forEach((parent) => {
        const markedItems = parent.querySelectorAll<HTMLElement>(':scope > [data-page-item]');
        const items =
            markedItems.length > 0
                ? Array.from(markedItems)
                : Array.from(parent.children).filter(
                    (child): child is HTMLElement => child instanceof HTMLElement
                );

        items.forEach((item) => {
            item.style.opacity = '1';
            item.style.visibility = 'visible';
            item.style.transform = 'none';
        });
    });
}

export function PageRevealController() {
    const pathname = usePathname();
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            revealImmediately();
            return;
        }

        let isCancelled = false;
        let ctx: { revert: () => void } | null = null;

        const init = async () => {
            const gsapModule = await import('gsap');
            const scrollTriggerModule = await import('gsap/ScrollTrigger');
            if (isCancelled) return;

            const gsap = gsapModule.gsap;
            const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                const revealElements = Array.from(
                    document.querySelectorAll<HTMLElement>('[data-page-reveal]')
                );
                const staggerParents = Array.from(
                    document.querySelectorAll<HTMLElement>('[data-page-stagger]')
                );

                revealElements.forEach((element) => {
                    const duration = parseNumber(element.dataset.pageDuration, 0.66);
                    const delay = parseNumber(element.dataset.pageDelay, 0);
                    const y = parseNumber(element.dataset.pageY, 28);
                    const start = element.dataset.pageStart || 'top 88%';

                    gsap.from(element, {
                        y,
                        autoAlpha: 0,
                        duration,
                        delay,
                        ease: 'power3.out',
                        onStart: () => {
                            gsap.set(element, { visibility: 'visible' });
                        },
                        scrollTrigger: {
                            trigger: element,
                            start,
                            once: true,
                        },
                    });
                });

                staggerParents.forEach((parent) => {
                    const markedItems = parent.querySelectorAll<HTMLElement>(':scope > [data-page-item]');
                    const items =
                        markedItems.length > 0
                            ? Array.from(markedItems)
                            : Array.from(parent.children).filter(
                                (child): child is HTMLElement => child instanceof HTMLElement
                            );
                    if (items.length === 0) return;

                    const duration = parseNumber(parent.dataset.pageDuration, 0.54);
                    const stagger = parseNumber(parent.dataset.pageStagger, 0.1);
                    const y = parseNumber(parent.dataset.pageY, 22);
                    const start = parent.dataset.pageStart || 'top 88%';

                    gsap.from(items, {
                        y,
                        autoAlpha: 0,
                        duration,
                        stagger,
                        ease: 'power3.out',
                        onStart: () => {
                            gsap.set(items, { visibility: 'visible' });
                        },
                        scrollTrigger: {
                            trigger: parent,
                            start,
                            once: true,
                        },
                    });
                });
            }, document.body);
        };

        void init();

        return () => {
            isCancelled = true;
            ctx?.revert();
        };
    }, [pathname, prefersReducedMotion]);

    return null;
}
