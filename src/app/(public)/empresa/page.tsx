import { Container } from '@/components/common/Container';
import { FinalCTA } from '@/components/home/FinalCTA';
import { buildMetadata } from '@/lib/seo/metadata';
import styles from './Empresa.module.scss';
import { cn } from '@/lib/utils/cn';

export const metadata = buildMetadata({
    title: 'Nuestra Empresa',
    description: 'Conoce Multiservicios Varo. Más de 10 años ofreciendo soluciones de reformas, pintura y mantenimiento en Zaragoza y Aragón.',
    path: '/empresa',
});

export default function EmpresaPage() {
    return (
        <>
            <section className={cn(styles.hero, 'section--dark')}>
                <Container>
                    <div className={styles.heroContent}>
                        <span className={styles.eyebrow}>Sobre nosotros</span>
                        <h1 className={styles.title}>
                            No somos una empresa de reformas más. <br />
                            <span className={styles.accent}>Somos tu tranquilidad.</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Nacimos con una misión clara: dignificar el sector de las reformas
                            aportando profesionalidad, cumplimiento estricto de plazos y acabados
                            que resisten el paso del tiempo.
                        </p>
                    </div>
                </Container>
            </section>

            <section className={styles.values}>
                <Container>
                    <div className={styles.grid}>
                        <div className={styles.valueCard}>
                            <span className={styles.icon}>🎯</span>
                            <h3>Nuestra Filosofía</h3>
                            <p>Creemos que el trabajo bien hecho ahorra dinero y dolores de cabeza. Nos obsesiona hacer las cosas bien a la primera.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <span className={styles.icon}>👥</span>
                            <h3>El Equipo</h3>
                            <p>Contamos con especialistas propios para cada gremio. Nada de subcontratas aleatorias sin control de calidad.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <span className={styles.icon}>🌱</span>
                            <h3>Sostenibilidad</h3>
                            <p>Minimizamos residuos, usamos materiales respetuosos y aplicamos sistemas de alta eficiencia energética.</p>
                        </div>
                    </div>
                </Container>
            </section>

            <FinalCTA />
        </>
    );
}
