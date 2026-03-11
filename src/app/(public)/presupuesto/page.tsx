import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { BudgetForm } from '@/components/forms/BudgetForm';
import { buildMetadata } from '@/lib/seo/metadata';
import styles from './Presupuesto.module.scss';
import { cn } from '@/lib/utils/cn';

export const metadata = buildMetadata({
    title: 'Solicitar Presupuesto',
    description: 'Pide tu presupuesto para reformas, pintura, electricidad o mantenimiento en Zaragoza sin compromiso.',
    path: '/presupuesto',
});

export default function PresupuestoPage() {
    return (
        <div className={cn(styles.page, 'section--dark')}>
            {/* Background illustration */}
            <div className={styles.bg} aria-hidden="true" />

            <Container size="narrow" className={styles.container}>
                <div className={styles.header}>
                    <SectionHeading
                        eyebrow="Presupuesto sin compromiso"
                        title="Cuéntanos tu proyecto"
                        subtitle="Rellena el siguiente formulario con el mayor nivel de detalle posible. Analizaremos tu solicitud y contactaremos contigo en menos de 48 horas laborables para agendar una visita y darte un presupuesto cerrado."
                        align="center"
                        light
                    />
                </div>

                <div className={styles.formCard}>
                    <BudgetForm />
                </div>
            </Container>
        </div>
    );
}
