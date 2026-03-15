'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import styles from './Hero.module.scss';

export function Hero() {
    const prefersReducedMotion = usePrefersReducedMotion();
    const heroRef = useRef<HTMLElement>(null);
    const bgGrad1Ref = useRef<HTMLDivElement>(null);
    const bgGrad2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (prefersReducedMotion) return;

        let isCancelled = false;
        let ctx: { revert: () => void } | null = null;

        const initAnim = async () => {
            const gsapModule = await import('gsap');
            const ScrollTriggerModule = await import('gsap/ScrollTrigger');
            if (isCancelled || !heroRef.current) return;

            const gsap = gsapModule.gsap;
            const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                gsap.to(bgGrad1Ref.current, {
                    yPercent: 8,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 0.55,
                    },
                });

                gsap.to(bgGrad2Ref.current, {
                    yPercent: -6,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 0.5,
                    },
                });
            }, heroRef);
        };

        void initAnim();

        return () => {
            isCancelled = true;
            ctx?.revert();
        };
    }, [prefersReducedMotion]);

    return (
        <section ref={heroRef} className={styles.hero} aria-label="Sección principal">
            <div className={styles.bg} aria-hidden="true">
                <div ref={bgGrad1Ref} className={styles.bgGrad1} />
                <div ref={bgGrad2Ref} className={styles.bgGrad2} />
                <div className={styles.bgGrid} />
            </div>

            <Container className={styles.content}>
                <div className={styles.textBlock}>
                    <span
                        className={styles.eyebrow}
                        data-home-intro-target="hero-eyebrow"
                    >
                        Lucena · Córdoba · España
                    </span>

                    <h1
                        className={styles.heading}
                        data-home-intro-target="hero-heading"
                    >
                        Reformas técnicas y mantenimiento integral{' '}
                        <span className={styles.accent}>con estándar profesional</span>
                    </h1>

                    <p
                        className={styles.sub}
                        data-home-intro-target="hero-sub"
                    >
                        Pintura, pladur, electricidad, reformas interiores y aislamiento para vivienda, local y
                        oficina. Cada intervención se planifica con detalle, tiempos realistas y cierre limpio.
                    </p>

                    <div
                        className={styles.ctas}
                        data-home-intro-target="hero-ctas"
                    >
                        <Button href="/presupuesto" variant="primary" size="lg">
                            Solicitar presupuesto
                        </Button>
                        <Button href="/servicios" variant="secondary" size="lg">
                            Conocer servicios
                        </Button>
                    </div>

                    <p
                        className={styles.note}
                        data-home-intro-target="hero-note"
                    >
                        Un único interlocutor técnico durante todo el proyecto.
                    </p>

                    <div
                        className={styles.badges}
                        data-home-intro-target="hero-badges"
                    >
                        {[
                            { value: '10+ años', label: 'Oficio técnico en reformas y mantenimiento' },
                            { value: '500+ intervenciones', label: 'Trabajos finalizados en Lucena, Córdoba y otros puntos de España' },
                            { value: 'Presupuesto trazable', label: 'Detalle por partidas y seguimiento por fases' },
                        ].map(({ value, label }) => (
                            <div key={label} className={styles.badge} data-hero-badge>
                                <strong className={styles.badgeValue}>{value}</strong>
                                <span className={styles.badgeLabel}>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
