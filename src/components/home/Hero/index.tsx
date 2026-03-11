'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import styles from './Hero.module.scss';

export function Hero() {
    const prefersReducedMotion = usePrefersReducedMotion();
    const eyebrowRef = useRef<HTMLSpanElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const badgesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (prefersReducedMotion) return;

        let isCancelled = false;
        let timeline: { kill: () => void } | null = null;

        const initAnim = async () => {
            const { gsap } = await import('gsap');
            if (isCancelled) return;

            const tl = gsap.timeline({
                defaults: {
                    ease: 'power2.out',
                },
            });

            tl.from(eyebrowRef.current, {
                y: 18,
                opacity: 0,
                duration: 0.45,
            })
                .from(headingRef.current, {
                    y: 34,
                    opacity: 0,
                    duration: 0.75,
                }, '-=0.2')
                .from(subRef.current, { y: 24, opacity: 0, duration: 0.6 }, '-=0.45')
                .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.48 }, '-=0.35')
                .from(badgesRef.current, { y: 12, opacity: 0, duration: 0.44 }, '-=0.28');

            timeline = tl;
        };

        initAnim();

        return () => {
            isCancelled = true;
            timeline?.kill();
        };
    }, [prefersReducedMotion]);

    return (
        <section className={styles.hero} aria-label="Sección principal">
            <div className={styles.bg} aria-hidden="true">
                <div className={styles.bgGrad1} />
                <div className={styles.bgGrad2} />
                <div className={styles.bgGrid} />
            </div>

            <Container className={styles.content}>
                <div className={styles.textBlock}>
                    <span ref={eyebrowRef} className={styles.eyebrow}>
                        Zaragoza · Aragón
                    </span>

                    <h1 ref={headingRef} className={styles.heading}>
                        Reformas interiores y servicios técnicos{' '}
                        <span className={styles.accent}>ejecutados con precisión</span>
                    </h1>

                    <p ref={subRef} className={styles.sub}>
                        Pintura, pladur, electricidad, mantenimiento y aislamiento para viviendas, locales y
                        oficinas. Planificación clara, coordinación rigurosa y acabados limpios desde el primer día.
                    </p>

                    <div ref={ctaRef} className={styles.ctas}>
                        <Button href="/presupuesto" variant="primary" size="lg">
                            Solicitar presupuesto
                        </Button>
                        <Button href="/servicios" variant="secondary" size="lg">
                            Ver servicios
                        </Button>
                    </div>

                    <div ref={badgesRef} className={styles.badges}>
                        {[
                            { value: '10+ años', label: 'Experiencia técnica en obra y mantenimiento' },
                            { value: '500+ trabajos', label: 'Intervenciones finalizadas en Zaragoza y entorno' },
                            { value: 'Proceso claro', label: 'Presupuesto detallado y seguimiento en cada fase' },
                        ].map(({ value, label }) => (
                            <div key={label} className={styles.badge}>
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
