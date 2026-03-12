import { Container } from '@/components/common/Container';
import { FinalCTA } from '@/components/home/FinalCTA';
import { buildMetadata } from '@/lib/seo/metadata';
import styles from './Empresa.module.scss';
import { cn } from '@/lib/utils/cn';

export const metadata = buildMetadata({
    title: 'Nuestra Empresa',
    description: 'Conoce Multiservicios Varo: empresa especializada en reforma técnica, mantenimiento y acabados de alto nivel en Zaragoza y Aragón.',
    path: '/empresa',
});

const principles = [
    {
        title: 'Criterio Técnico',
        description:
            'Planificamos cada intervención antes de empezar. Definimos alcance, secuencia de gremios y controles para evitar improvisación en obra.',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 5h16M4 12h10M4 19h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M17.5 13.5 20 16l-2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Ejecución Coordinada',
        description:
            'Nuestro equipo alinea oficios y tiempos para que el trabajo avance con orden y trazabilidad. Un único interlocutor para todo el proceso.',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3.5" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                <rect x="14.5" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                <rect x="9" y="14" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M9.5 7h4.5M12 10v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'Acabado Verificable',
        description:
            'Cada entrega incluye revisión de detalle y validación final. No cerramos una obra hasta que el resultado cumple el estándar acordado.',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3.5 5.5 6v5.8c0 4 2.4 7.7 6.5 8.7 4.1-1 6.5-4.7 6.5-8.7V6L12 3.5Z" stroke="currentColor" strokeWidth="1.6" />
                <path d="m9.3 12.3 1.9 1.9 3.8-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

const phases = [
    {
        title: 'Diagnóstico inicial',
        description:
            'Analizamos el estado real del espacio, condicionantes técnicos y objetivos de uso para proponer una solución viable desde el primer día.',
    },
    {
        title: 'Propuesta cerrada',
        description:
            'Entregamos alcance, materiales y planificación con criterios claros de coste, plazo y calidad, evitando ambigüedades en la ejecución.',
    },
    {
        title: 'Obra controlada',
        description:
            'Coordinamos los gremios en secuencia eficiente, con seguimiento continuo y comunicación estructurada durante todo el proyecto.',
    },
    {
        title: 'Entrega documentada',
        description:
            'Finalizamos con revisión técnica, validación de acabados y traspaso ordenado de la intervención para cerrar con garantías.',
    },
];

export default function EmpresaPage() {
    return (
        <>
            <section className={cn(styles.hero, 'section--dark')}>
                <Container>
                    <div className={styles.heroContent} data-page-reveal data-page-y="24">
                        <span className={styles.eyebrow}>Empresa</span>
                        <h1 className={styles.title}>Multiservicios Varo: ejecución técnica con estándar premium</h1>
                        <p className={styles.subtitle}>
                            Somos una firma especializada en reforma y mantenimiento con base en Zaragoza.
                            Trabajamos con método, control y oficio para entregar resultados sólidos en vivienda,
                            local comercial y activos corporativos.
                        </p>
                    </div>

                    <dl className={styles.metrics} data-page-stagger="0.08" data-page-y="14">
                        <div className={styles.metric}>
                            <dt>+10 años</dt>
                            <dd>de experiencia acumulada en obra y mantenimiento</dd>
                        </div>
                        <div className={styles.metric}>
                            <dt>48 h</dt>
                            <dd>para respuesta inicial y estudio de viabilidad</dd>
                        </div>
                        <div className={styles.metric}>
                            <dt>1 interlocutor</dt>
                            <dd>coordinando gremios, plazos y control de calidad</dd>
                        </div>
                    </dl>
                </Container>
            </section>

            <section className={styles.principles}>
                <Container>
                    <header className={styles.sectionHead} data-page-reveal>
                        <p className={styles.sectionEyebrow}>Principios de trabajo</p>
                        <h2>Cómo protegemos la calidad en cada proyecto</h2>
                        <p>
                            Nuestro diferencial no es prometer más: es ejecutar con una metodología
                            constante que reduce incidencias y mejora el resultado final.
                        </p>
                    </header>

                    <div className={styles.grid} data-page-stagger="0.1">
                        {principles.map((item) => (
                            <article key={item.title} className={styles.valueCard}>
                                <span className={styles.icon}>{item.icon}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>

            <section className={styles.process}>
                <Container>
                    <header className={styles.sectionHead} data-page-reveal>
                        <p className={styles.sectionEyebrow}>Método operativo</p>
                        <h2>Un proceso pensado para evitar improvisaciones</h2>
                    </header>

                    <ol className={styles.timeline} data-page-stagger="0.09">
                        {phases.map((phase, index) => (
                            <li key={phase.title} className={styles.timelineItem}>
                                <span className={styles.step}>Fase {(index + 1).toString().padStart(2, '0')}</span>
                                <div className={styles.timelineBody}>
                                    <h3>{phase.title}</h3>
                                    <p>{phase.description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </Container>
            </section>

            <FinalCTA />
        </>
    );
}
