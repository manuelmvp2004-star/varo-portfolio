'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormField } from '../FormField';
import { Button } from '@/components/common/Button';
import { services } from '@/data/services';
import styles from '../Form.module.scss';
import { cn } from '@/lib/utils/cn';

export function BudgetForm() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const serviceOptions = services.map(s => ({ value: s.slug, label: s.title }));

    const timingOptions = [
        { value: 'urgente', label: 'Urgente (lo antes posible)' },
        { value: '1mes', label: 'En el próximo mes' },
        { value: '3meses', label: 'En los próximos 3 meses' },
        { value: 'indefinido', label: 'Sin prisa, pidiendo precios' },
    ];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 800));
        setIsSubmitting(false);
        router.push('/gracias');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>1. Datos de contacto</h3>
                <div className={styles.grid}>
                    <FormField
                        name="nombre"
                        label="Nombre y apellidos"
                        required
                        className={styles.fullWidth}
                    />
                    <FormField
                        name="telefono"
                        label="Teléfono"
                        type="tel"
                        required
                    />
                    <FormField
                        name="email"
                        label="Email"
                        type="email"
                        required
                    />
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>2. Detalles del proyecto</h3>
                <div className={styles.grid}>
                    <FormField
                        name="servicio"
                        label="Tipo de trabajo principal"
                        type="select"
                        options={serviceOptions}
                        required
                    />
                    <FormField
                        name="timing"
                        label="¿Para cuándo lo necesitas?"
                        type="select"
                        options={timingOptions}
                        required
                    />
                    <FormField
                        name="localidad"
                        label="Localidad / Código Postal"
                        required
                    />
                    <FormField
                        name="tipoInmueble"
                        label="Tipo de inmueble"
                        type="select"
                        options={[
                            { value: 'vivienda', label: 'Vivienda habitual' },
                            { value: 'local', label: 'Local comercial' },
                            { value: 'oficina', label: 'Oficina' },
                            { value: 'comunidad', label: 'Comunidad de vecinos' },
                        ]}
                    />
                    <FormField
                        name="descripcion"
                        label="Descripción del trabajo a realizar"
                        type="textarea"
                        placeholder="Cuéntanos con el mayor detalle posible qué necesitas hacer: metros cuadrados aproximados, estado actual, calidades deseadas..."
                        required
                        className={styles.fullWidth}
                    />
                </div>
            </div>

            <div className={cn(styles.legal, styles.fullWidth)}>
                <FormField
                    name="privacidad"
                    // @ts-expect-error label defined as string in types but supports ReactNode in FormField implementation
                    label={
                        <>
                            He leído y acepto la{' '}
                            <a href="/politica-de-privacidad" target="_blank">Política de Privacidad</a>
                        </>
                    }
                    type="checkbox"
                    required
                />
            </div>

            <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isSubmitting}
                className={styles.submitBtn}
            >
                {isSubmitting ? 'Procesando solicitud...' : 'Solicitar presupuesto sin compromiso'}
            </Button>
        </form>
    );
}
