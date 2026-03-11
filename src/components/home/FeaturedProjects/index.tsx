'use client';

import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import type { Project } from '@/types';
import styles from './FeaturedProjects.module.scss';
import { cn } from '@/lib/utils/cn';

// Dummy data temporaria para los proyectos destacados
const projects: Project[] = [
    {
        id: 'p1',
        title: 'Reforma integral piso céntrico',
        description: 'Renovación completa de vivienda de 120m2 con acabados de lujo, iluminación inteligente y aislamiento acústico.',
        category: 'Reformas Interiores',
        location: 'Zaragoza',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
        tags: ['Pladur', 'Electricidad', 'Pintura', 'Aislamiento'],
        year: 2023,
        featured: true,
    },
    {
        id: 'p2',
        title: 'Climatización local comercial',
        description: 'Instalación de sistema de climatización eficiente por conductos para un local comercial de 300m2.',
        category: 'Pintura e Iluminación',
        location: 'Huesca',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
        tags: ['Iluminación', 'Techos continuos', 'Pintura decorativa'],
        year: 2023,
        featured: true,
    },
    {
        id: 'p3',
        title: 'Restauración de fachada',
        description: 'Rehabilitación integral de fachada con aislamiento SATE para mejorar la eficiencia energética del edificio.',
        category: 'Aislamiento y Pintura',
        location: 'Zaragoza',
        image: 'https://images.unsplash.com/photo-1541888069507-6bb9fdf06e89?q=80&w=800&auto=format&fit=crop',
        tags: ['SATE', 'Impermeabilización', 'Revestimientos'],
        year: 2024,
        featured: true,
    },
];

export function FeaturedProjects() {
    const headerRef = useGsapReveal<HTMLDivElement>();
    const gridRef = useGsapReveal<HTMLDivElement>({ stagger: 0.1 });

    return (
        <section className={styles.section} id="proyectos">
            <Container>
                <div ref={headerRef} className={styles.top}>
                    <SectionHeading
                        eyebrow="Casos de éxito"
                        title="Nuestros proyectos destacados"
                        subtitle="Nos gusta que nuestro trabajo hable por nosotros. Descubre algunos de los últimos proyectos que hemos ejecutado."
                        className="gsap-hidden"
                    />
                    <Button href="/proyectos" variant="outline" className={cn(styles.viewAllBtn, 'gsap-hidden')}>
                        Ver galería completa
                    </Button>
                </div>

                <div ref={gridRef} className={cn(styles.grid, 'gsap-stagger-parent')}>
                    {projects.map((project) => (
                        <Link key={project.id} href={`/proyectos/${project.id}`} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={project.image} alt={project.title} className={styles.image} loading="lazy" />
                                <div className={styles.overlay} />
                                <span className={styles.categoryBadge}>{project.category}</span>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span className={styles.year}>{project.year}</span>
                                    <span className={styles.dot}>·</span>
                                    <span className={styles.location}>{project.location}</span>
                                </div>
                                <h3 className={styles.title}>{project.title}</h3>
                                <ul className={styles.tags}>
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <li key={tag} className={styles.tag}>{tag}</li>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <li className={styles.tag}>+{project.tags.length - 3}</li>
                                    )}
                                </ul>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
