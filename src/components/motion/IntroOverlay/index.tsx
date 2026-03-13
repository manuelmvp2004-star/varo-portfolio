'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import styles from './IntroOverlay.module.scss';

const INTRO_KEY = 'mv-window-intro-played';

const PAGE_ITEM_SELECTORS = [
    '[data-intro-item="header"]',
    '[data-intro-item="hero-eyebrow"]',
    '[data-intro-item="hero-heading"]',
    '[data-intro-item="hero-sub"]',
    '[data-intro-item="hero-ctas"]',
    '[data-intro-item="hero-note"]',
    '[data-intro-item="hero-badges"]',
];

export function IntroOverlay() {
    const prefersReducedMotion = usePrefersReducedMotion();
    const [shouldRender, setShouldRender] = useState(false);

    const overlayRef = useRef<HTMLDivElement>(null);
    const windowRef = useRef<HTMLDivElement>(null);
    const previewChromeRef = useRef<HTMLDivElement>(null);
    const previewHeroRef = useRef<HTMLDivElement>(null);
    const previewBodyRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (prefersReducedMotion) return;
        if (typeof window === 'undefined') return;

        const hasPlayed = window.sessionStorage.getItem(INTRO_KEY) === '1';
        if (hasPlayed) return;

        setShouldRender(true);
    }, [prefersReducedMotion]);

    useLayoutEffect(() => {
        if (!shouldRender || prefersReducedMotion || !overlayRef.current || !windowRef.current) return;

        let isCancelled = false;
        let cleanupTimeline: (() => void) | null = null;

        const html = document.documentElement;
        const body = document.body;

        const previousBodyOverflow = body.style.overflow;
        const previousHtmlOverflow = html.style.overflow;

        html.dataset.introState = 'active';
        body.style.overflow = 'hidden';
        html.style.overflow = 'hidden';

        const initAnimation = async () => {
            const { gsap } = await import('gsap');
            if (isCancelled || !overlayRef.current || !windowRef.current) return;

            window.sessionStorage.setItem(INTRO_KEY, '1');

            const pageTargets = PAGE_ITEM_SELECTORS.flatMap((selector) =>
                Array.from(document.querySelectorAll<HTMLElement>(selector))
            );

            const uniquePageTargets = Array.from(new Set(pageTargets));

            gsap.set(overlayRef.current, { autoAlpha: 1 });
            gsap.set(windowRef.current, {
                width: '7rem',
                height: 2,
                borderRadius: 999,
                autoAlpha: 1,
            });

            gsap.set([previewChromeRef.current, previewHeroRef.current, previewBodyRef.current], {
                autoAlpha: 0,
                y: 18,
            });

            gsap.set(uniquePageTargets, {
                autoAlpha: 0,
                y: 26,
                visibility: 'hidden',
            });

            const tl = gsap.timeline({
                defaults: {
                    ease: 'power3.out',
                },
                onComplete: () => {
                    body.style.overflow = previousBodyOverflow;
                    html.style.overflow = previousHtmlOverflow;
                    html.removeAttribute('data-intro-state');
                    setShouldRender(false);
                },
            });

            cleanupTimeline = () => tl.kill();

            tl.to(windowRef.current, {
                width: 'min(52vw, 760px)',
                duration: 0.55,
                ease: 'power2.out',
            })
                .to(
                    windowRef.current,
                    {
                        height: 'min(56vh, 620px)',
                        borderRadius: 28,
                        duration: 0.82,
                    },
                    '-=0.04'
                )
                .to(
                    [previewChromeRef.current, previewHeroRef.current, previewBodyRef.current],
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.42,
                        stagger: 0.08,
                    },
                    '-=0.42'
                )
                .to(
                    windowRef.current,
                    {
                        width: 'calc(100vw - 1.5rem)',
                        height: 'calc(100vh - 1.5rem)',
                        borderRadius: 24,
                        duration: 0.9,
                        ease: 'power3.inOut',
                    },
                    '-=0.05'
                )
                .add(() => {
                    html.dataset.introState = 'revealing';
                    gsap.set(uniquePageTargets, { visibility: 'visible' });
                })
                .to(
                    overlayRef.current,
                    {
                        autoAlpha: 0,
                        duration: 0.52,
                        ease: 'power2.inOut',
                    },
                    '-=0.18'
                )
                .to(
                    uniquePageTargets,
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.58,
                        stagger: 0.08,
                        ease: 'power3.out',
                        clearProps: 'opacity,visibility,transform',
                    },
                    '-=0.32'
                );
        };

        void initAnimation();

        return () => {
            isCancelled = true;
            cleanupTimeline?.();
            body.style.overflow = previousBodyOverflow;
            html.style.overflow = previousHtmlOverflow;
            html.removeAttribute('data-intro-state');
        };
    }, [prefersReducedMotion, shouldRender]);

    if (!shouldRender) return null;

    return (
        <div ref={overlayRef} className={styles.overlay} aria-hidden="true">
            <div className={styles.marble} />

            <div ref={windowRef} className={styles.window}>
                <div className={styles.preview}>
                    <div ref={previewChromeRef} className={styles.previewChrome}>
                        <div className={styles.previewBrand} />
                        <div className={styles.previewNav}>
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>

                    <div ref={previewHeroRef} className={styles.previewHero}>
                        <div className={styles.previewEyebrow} />
                        <div className={styles.previewTitleBlock}>
                            <span />
                            <span />
                        </div>
                        <div className={styles.previewActions}>
                            <span />
                            <span />
                        </div>
                    </div>

                    <div ref={previewBodyRef} className={styles.previewBody}>
                        <div className={styles.previewCards}>
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className={styles.previewFooter} />
                    </div>
                </div>
            </div>
        </div>
    );
}