'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import styles from './Hero.module.scss';

export function Hero() {
    const prefersReducedMotion = usePrefersReducedMotion();
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const badgesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (prefersReducedMotion) return;

        const initAnim = async () => {
            const { gsap } = await import('gsap');
            const tl = gsap.timeline({ delay: 0.1 });

            tl.from(headingRef.current, {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
            })
                .from(subRef.current, { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
                .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
                .from(badgesRef.current, { y: 16, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3');
        };

        initAnim();
    }, [prefersReducedMotion]);

    return (
        <section className={styles.hero} aria-label="Sección principal">
            {/* Background */}
            <div className={styles.bg} aria-hidden="true">
                <div className={styles.bgGrad1} />
                <div className={styles.bgGrad2} />
                <div className={styles.bgGrid} />
            </div>

            <Container className={styles.content}>
                <div className={styles.textBlock}>
                    {/* Eyebrow */}
                    <span className={styles.eyebrow}>Zaragoza · Aragón</span>

                    {/* Heading */}
                    <h1 ref={headingRef} className={styles.heading}>
                        Reformas y servicios{' '}
                        <span className={styles.accent}>con nivel profesional</span>
                    </h1>

                    {/* Subheading */}
                    <p ref={subRef} className={styles.sub}>
                        Pintura, pladur, electricidad, reformas interiores, mantenimiento y aislamiento.
                        Más de 10 años ejecutando proyectos con exigencia, puntualidad y acabados que lo dicen todo.
                    </p>

                    {/* CTAs */}
                    <div ref={ctaRef} className={styles.ctas}>
                        <Button href="/presupuesto" variant="primary" size="lg">
                            Solicitar presupuesto
                        </Button>
                        <Button href="/proyectos" variant="secondary" size="lg">
                            Ver proyectos
                        </Button>
                    </div>

                    {/* Trust badges */}
                    <div ref={badgesRef} className={styles.badges}>
                        {[
                            { value: '+500', label: 'Proyectos completados' },
                            { value: '+10', label: 'Años de experiencia' },
                            { value: '100%', label: 'Clientes satisfechos' },
                        ].map(({ value, label }) => (
                            <div key={label} className={styles.badge}>
                                <strong className={styles.badgeValue}>{value}</strong>
                                <span className={styles.badgeLabel}>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            {/* Scroll indicator */}
            <div className={styles.scrollIndicator} aria-hidden="true">
                <span className={styles.scrollLine} />
            </div>
        </section>
    );
}
