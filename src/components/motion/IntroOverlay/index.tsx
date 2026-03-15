'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { useHomeIntro } from '../HomeIntroContext';
import {
    HOME_INTRO_STORAGE_KEY,
    armHomeIntroDocument,
    clearHomeIntroDocumentState,
} from '../homeIntro.shared';
import styles from './IntroOverlay.module.scss';

const HEADER_SELECTOR = '[data-home-intro-target="header"]';
const HERO_TARGET_SELECTORS = [
    '[data-home-intro-target="hero-eyebrow"]',
    '[data-home-intro-target="hero-heading"]',
    '[data-home-intro-target="hero-sub"]',
    '[data-home-intro-target="hero-ctas"]',
    '[data-home-intro-target="hero-note"]',
    '[data-home-intro-target="hero-badges"]',
];

interface IntroWindowMetrics {
    initialWidth: number;
    lineWidth: number;
    windowHeight: number;
    zoomWidth: number;
    zoomHeight: number;
}

function collectTargets(selectors: string[]) {
    return selectors
        .map((selector) => document.querySelector<HTMLElement>(selector))
        .filter((target): target is HTMLElement => target instanceof HTMLElement);
}

function getIntroWindowMetrics(viewportWidth: number, viewportHeight: number): IntroWindowMetrics {
    const initialWidth = Math.min(Math.max(viewportWidth * 0.04, 40), 56);
    const lineWidth = Math.min(Math.max(viewportWidth * 0.44, 240), 560);
    const windowHeight = Math.min(Math.max(viewportHeight * 0.32, 176), 320);

    return {
        initialWidth,
        lineWidth,
        windowHeight,
        zoomWidth: viewportWidth,
        zoomHeight: viewportHeight,
    };
}

export function IntroOverlay() {
    const prefersReducedMotion = usePrefersReducedMotion();
    const { isHomeRoute, setPhase } = useHomeIntro();
    const [shouldRender, setShouldRender] = useState(isHomeRoute);

    const overlayRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLSpanElement>(null);

    useLayoutEffect(() => {
        setShouldRender(isHomeRoute);
    }, [isHomeRoute]);

    useLayoutEffect(() => {
        if (!isHomeRoute) {
            setPhase('complete');
            setShouldRender(false);
            clearHomeIntroDocumentState();
            return;
        }

        if (
            typeof window === 'undefined' ||
            !overlayRef.current ||
            !frameRef.current ||
            !lineRef.current
        ) {
            return;
        }

        let isCancelled = false;
        let cleanupTimeline: (() => void) | null = null;

        const html = document.documentElement;
        const body = document.body;
        const previousHtmlOverflow = html.style.overflow;
        const previousBodyOverflow = body.style.overflow;

        const initAnimation = async () => {
            let hasPlayed = false;

            try {
                hasPlayed = window.sessionStorage.getItem(HOME_INTRO_STORAGE_KEY) === '1';
            } catch {
                hasPlayed = false;
            }

            armHomeIntroDocument(hasPlayed);

            if (prefersReducedMotion || hasPlayed) {
                if (prefersReducedMotion) {
                    try {
                        window.sessionStorage.setItem(HOME_INTRO_STORAGE_KEY, '1');
                    } catch {
                        // Session storage is optional for the intro flow.
                    }
                }

                if (isCancelled) return;

                setPhase('complete');
                setShouldRender(false);
                clearHomeIntroDocumentState();
                return;
            }

            const { gsap } = await import('gsap');
            if (
                isCancelled ||
                !overlayRef.current ||
                !frameRef.current ||
                !lineRef.current
            ) {
                return;
            }

            try {
                window.sessionStorage.setItem(HOME_INTRO_STORAGE_KEY, '1');
            } catch {
                // Session storage is optional for the intro flow.
            }

            const headerTarget = document.querySelector<HTMLElement>(HEADER_SELECTOR);
            const heroTargets = collectTargets(HERO_TARGET_SELECTORS);
            const introTargets = headerTarget ? [headerTarget, ...heroTargets] : heroTargets;
            const metrics = getIntroWindowMetrics(window.innerWidth, window.innerHeight);

            html.style.overflow = 'hidden';
            body.style.overflow = 'hidden';

            setPhase('overlay');
            setShouldRender(true);

            gsap.set(overlayRef.current, {
                autoAlpha: 1,
                '--intro-window-w': `${metrics.initialWidth}px`,
                '--intro-window-h': '1px',
                '--intro-frame-radius': '0px',
                '--intro-window-baseline': '62%',
            });
            gsap.set(frameRef.current, {
                autoAlpha: 1,
                scale: 1,
                borderColor: 'rgba(28, 42, 42, 0.14)',
                boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.22) inset',
            });
            gsap.set(lineRef.current, {
                autoAlpha: 1,
                scaleX: 0.02,
                transformOrigin: '50% 50%',
            });

            if (introTargets.length > 0) {
                gsap.set(introTargets, {
                    autoAlpha: 0,
                    x: (index: number) => (index === 0 ? -40 : index % 2 === 0 ? 36 : -36),
                    y: (index: number) => (index === 0 ? -10 : 0),
                    filter: (index: number) => (index === 0 ? 'blur(10px)' : 'blur(14px)'),
                    visibility: 'hidden',
                });
            }

            // Hand off control from the bootstrap CSS to GSAP before the content reveal starts.
            clearHomeIntroDocumentState();

            const tl = gsap.timeline({
                defaults: {
                    ease: 'sine.out',
                },
                onComplete: () => {
                    html.style.overflow = previousHtmlOverflow;
                    body.style.overflow = previousBodyOverflow;
                    setPhase('complete');
                    setShouldRender(false);
                },
            });

            cleanupTimeline = () => tl.kill();

            tl.to(lineRef.current, {
                scaleX: 1,
                duration: 1.22,
                ease: 'sine.inOut',
            }, 0)
                .to(
                    overlayRef.current,
                    {
                        '--intro-window-w': `${metrics.lineWidth}px`,
                        duration: 1.22,
                        ease: 'sine.inOut',
                    },
                    0
                )
                .to(
                    overlayRef.current,
                    {
                        '--intro-window-h': `${metrics.windowHeight}px`,
                        duration: 1.08,
                        ease: 'power2.out',
                    },
                    '>'
                )
                .to(
                    frameRef.current,
                    {
                        borderColor: 'rgba(28, 42, 42, 0.18)',
                        boxShadow: '0 24px 56px rgba(28, 42, 42, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.18) inset',
                        duration: 0.9,
                        ease: 'sine.out',
                    },
                    '<'
                )
                .to(
                    overlayRef.current,
                    {
                        '--intro-window-w': `${metrics.zoomWidth}px`,
                        '--intro-window-h': `${metrics.zoomHeight}px`,
                        '--intro-window-baseline': '100%',
                        duration: 2.36,
                        ease: 'power2.inOut',
                        onStart: () => setPhase('settled'),
                    },
                    '>'
                )
                .to(
                    frameRef.current,
                    {
                        borderColor: 'rgba(28, 42, 42, 0.02)',
                        boxShadow: '0 10px 24px rgba(28, 42, 42, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.08) inset',
                        duration: 2.36,
                        ease: 'power2.inOut',
                    },
                    '<'
                )
                .to(
                    lineRef.current,
                    {
                        autoAlpha: 0,
                        duration: 0.28,
                        ease: 'sine.out',
                    },
                    '<+=0.18'
                )
                .to(
                    overlayRef.current,
                    {
                        autoAlpha: 0,
                        duration: 0.38,
                        ease: 'sine.out',
                    },
                    '-=0.16'
                )
                .add(() => {
                    setPhase('content');

                    if (introTargets.length > 0) {
                        gsap.set(introTargets, { visibility: 'visible' });
                    }
                })
                .to({}, { duration: 1.18 });

            if (headerTarget) {
                tl.to(
                    headerTarget,
                    {
                        autoAlpha: 1,
                        x: 0,
                        y: 0,
                        filter: 'blur(0px)',
                        duration: 1.02,
                        ease: 'power2.out',
                        clearProps: 'opacity,visibility,transform,filter',
                    },
                    '>'
                );
            }

            if (heroTargets.length > 0) {
                heroTargets.forEach((target, index) => {
                    tl.to(
                        target,
                        {
                            autoAlpha: 1,
                            x: 0,
                            y: 0,
                            filter: 'blur(0px)',
                            duration: index === 1 ? 1.12 : 0.94,
                            ease: 'power2.out',
                            clearProps: 'opacity,visibility,transform,filter',
                        },
                        index === 0 ? '-=0.22' : '-=0.62'
                    );
                });
            }
        };

        void initAnimation();

        return () => {
            isCancelled = true;
            cleanupTimeline?.();
            html.style.overflow = previousHtmlOverflow;
            body.style.overflow = previousBodyOverflow;
            clearHomeIntroDocumentState();
        };
    }, [isHomeRoute, prefersReducedMotion, setPhase]);

    if (!shouldRender) return null;

    return (
        <div ref={overlayRef} className={styles.overlay} aria-hidden="true">
            <div ref={frameRef} className={styles.frame}>
                <span ref={lineRef} className={styles.line} />
            </div>
        </div>
    );
}
