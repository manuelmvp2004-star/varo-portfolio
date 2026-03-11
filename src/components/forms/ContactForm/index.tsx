'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormField } from '../FormField';
import { Button } from '@/components/common/Button';
import { services } from '@/data/services';
import styles from '../Form.module.scss';
import { cn } from '@/lib/utils/cn';

export function ContactForm() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const serviceOptions = services.map(s => ({ value: s.slug, label: s.title }));
    serviceOptions.unshift({ value: 'otro', label: 'Otro / Consulta general' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));

        setIsSubmitting(false);
        router.push('/gracias');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.grid}>
                <FormField
                    name="nombre"
                    label="Nombre y apellidos"
                    placeholder="Ej: Laura García"
                    required
                />
                <FormField
                    name="telefono"
                    label="Teléfono"
                    type="tel"
                    placeholder="Ej: 600 000 000"
                    required
                />
                <FormField
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="tucorreo@ejemplo.com"
                    required
                    className={styles.fullWidth}
                />
                <FormField
                    name="servicio"
                    label="Servicio de interés"
                    type="select"
                    options={serviceOptions}
                    required
                />
                <FormField
                    name="localidad"
                    label="Localidad"
                    placeholder="Ej: Zaragoza"
                    required
                />
                <FormField
                    name="mensaje"
                    label="¿En qué podemos ayudarte?"
                    type="textarea"
                    placeholder="Escribe aquí los detalles de tu consulta..."
                    required
                    className={styles.fullWidth}
                />
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
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </Button>
        </form>
    );
}
