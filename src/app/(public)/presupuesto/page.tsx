import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { BudgetForm } from '@/components/forms/BudgetForm';
import { buildMetadata } from '@/lib/seo/metadata';
import styles from './Presupuesto.module.scss';
import { cn } from '@/lib/utils/cn';

export const metadata = buildMetadata({
    title: 'Solicitar Presupuesto',
    description: 'Solicita presupuesto técnico para reformas y multiservicios en Lucena, Córdoba y resto de España con evaluación profesional y alcance claro.',
    path: '/presupuesto',
});

const nextSteps = [
    'Revisión inicial del formulario y viabilidad',
    'Contacto para aclarar alcance y condicionantes',
    'Visita técnica si procede',
    'Propuesta con alcance, plazos y estimación económica',
];

export default function PresupuestoPage() {
    return (
        <div className={cn(styles.page, 'section--dark')}>
            <div className={styles.bg} aria-hidden="true" />

            <Container size="narrow" className={styles.container}>
                <div className={styles.header} data-page-reveal data-page-y="24">
                    <SectionHeading
                        eyebrow="Presupuesto"
                        title="Solicita una valoración profesional de tu proyecto"
                        subtitle="Rellena el formulario con datos reales de tu necesidad. Cuanto mayor sea el contexto, más precisa será nuestra primera estimación."
                        align="center"
                        light
                    />

                    <ol className={styles.steps} data-page-stagger="0.07" data-page-y="12">
                        {nextSteps.map((step, index) => (
                            <li key={step} className={styles.step}>
                                <span className={styles.stepIndex}>{(index + 1).toString().padStart(2, '0')}</span>
                                <span>{step}</span>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className={styles.formCard} data-page-reveal data-page-delay="0.08">
                    <BudgetForm />
                </div>
            </Container>
        </div>
    );
}
