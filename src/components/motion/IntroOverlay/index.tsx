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
    compactWidth: number;
    compactHeight: number;
    zoomWidth: number;
    zoomHeight: number;
    compactRadius: number;
    zoomRadius: number;
}

function collectTargets(selectors: string[]) {
    return selectors
        .map((selector) => document.querySelector<HTMLElement>(selector))
        .filter((target): target is HTMLElement => target instanceof HTMLElement);
}

function getIntroWindowMetrics(viewportWidth: number, viewportHeight: number): IntroWindowMetrics {
    const initialWidth = Math.min(Math.max(viewportWidth * 0.055, 52), 72);
    const compactWidth = Math.min(Math.max(viewportWidth * 0.18, 148), 220);
    const compactHeight = Math.min(Math.max(viewportHeight * 0.11, 94), 132);
    const gutter = viewportWidth < 768 ? 8 : 14;

    return {
        initialWidth,
        compactWidth,
        compactHeight,
        zoomWidth: viewportWidth - gutter * 2,
        zoomHeight: viewportHeight - gutter * 2,
        compactRadius: viewportWidth < 768 ? 18 : 24,
        zoomRadius: viewportWidth < 768 ? 12 : 16,
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
                '--intro-frame-radius': '999px',
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
                    y: (index: number) => (index === 0 ? -18 : 26),
                    filter: (index: number) => (index === 0 ? 'blur(10px)' : 'blur(14px)'),
                    visibility: 'hidden',
                });
            }

            // Hand off control from the bootstrap CSS to GSAP before the content reveal starts.
            clearHomeIntroDocumentState();

            const tl = gsap.timeline({
                defaults: {
                    ease: 'power2.out',
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
                duration: 0.62,
                ease: 'power2.inOut',
            })
                .to(
                    overlayRef.current,
                    {
                        '--intro-window-w': `${metrics.compactWidth}px`,
                        '--intro-window-h': `${metrics.compactHeight}px`,
                        '--intro-frame-radius': `${metrics.compactRadius}px`,
                        duration: 0.82,
                        ease: 'power3.out',
                    },
                    '-=0.12'
                )
                .to(
                    frameRef.current,
                    {
                        borderColor: 'rgba(28, 42, 42, 0.18)',
                        boxShadow: '0 24px 56px rgba(28, 42, 42, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.18) inset',
                        duration: 0.52,
                        ease: 'power2.out',
                    },
                    '<'
                )
                .to(
                    lineRef.current,
                    {
                        autoAlpha: 0,
                        duration: 0.18,
                        ease: 'power1.out',
                    },
                    '-=0.42'
                )
                .to(
                    overlayRef.current,
                    {
                        '--intro-window-w': `${metrics.zoomWidth}px`,
                        '--intro-window-h': `${metrics.zoomHeight}px`,
                        '--intro-frame-radius': `${metrics.zoomRadius}px`,
                        duration: 1.56,
                        ease: 'power3.inOut',
                        onStart: () => setPhase('settled'),
                    },
                    '>-0.02'
                )
                .to(
                    frameRef.current,
                    {
                        borderColor: 'rgba(28, 42, 42, 0.06)',
                        boxShadow: '0 16px 38px rgba(28, 42, 42, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.12) inset',
                        duration: 1.56,
                        ease: 'power3.inOut',
                    },
                    '<'
                )
                .to(
                    overlayRef.current,
                    {
                        autoAlpha: 0,
                        duration: 0.24,
                        ease: 'power2.out',
                    },
                    '-=0.08'
                )
                .add(() => {
                    setPhase('content');

                    if (introTargets.length > 0) {
                        gsap.set(introTargets, { visibility: 'visible' });
                    }
                })
                .to({}, { duration: 1 });

            if (headerTarget) {
                tl.to(
                    headerTarget,
                    {
                        autoAlpha: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        duration: 0.82,
                        ease: 'power3.out',
                        clearProps: 'opacity,visibility,transform,filter',
                    },
                    '>'
                );
            }

            if (heroTargets.length > 0) {
                tl.to(
                    heroTargets,
                    {
                        autoAlpha: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        duration: 0.94,
                        stagger: 0.14,
                        ease: 'power3.out',
                        clearProps: 'opacity,visibility,transform,filter',
                    },
                    '-=0.28'
                );
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
