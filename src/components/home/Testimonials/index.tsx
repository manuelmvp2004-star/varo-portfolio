'use client';

import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { testimonials } from '@/data/testimonials';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import styles from './Testimonials.module.scss';
import { cn } from '@/lib/utils/cn';

export function Testimonials() {
    const headerRef = useGsapReveal<HTMLDivElement>();
    const gridRef = useGsapReveal<HTMLDivElement>({ stagger: 0.1 });

    return (
        <section className={cn(styles.section, 'section--dark')} id="testimonios">
            <Container>
                <div ref={headerRef}>
                    <SectionHeading
                        eyebrow="Reseñas reales"
                        title="Lo que dicen nuestros clientes"
                        subtitle="La mejor garantía de nuestro trabajo son las personas y empresas que han confiado en nosotros a lo largo de los años."
                        align="center"
                        light
                        className="gsap-hidden"
                    />
                </div>

                <div ref={gridRef} className={cn(styles.grid, 'gsap-stagger-parent')}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className={styles.card}>
                            <div className={styles.quoteIcon}>&ldquo;</div>
                            <div className={styles.stars}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>
                            <p className={styles.content}>{testimonial.content}</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div className={styles.authorInfo}>
                                    <strong className={styles.name}>{testimonial.name}</strong>
                                    <span className={styles.role}>
                                        {testimonial.role} · {testimonial.location}
                                    </span>
                                    {testimonial.service && (
                                        <span className={styles.serviceTag}>{testimonial.service}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
