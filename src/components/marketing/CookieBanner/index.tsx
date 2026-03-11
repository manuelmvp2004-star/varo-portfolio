'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/common/Button';
import styles from './CookieBanner.module.scss';
import { cn } from '@/lib/utils/cn';

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted/rejected cookies
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            // Small delay so it animates in smoothly after hydrate
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptAll = () => {
        localStorage.setItem('cookieConsent', 'all');
        setIsVisible(false);
    };

    const rejectAll = () => {
        localStorage.setItem('cookieConsent', 'necessary');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={styles.wrapper} role="dialog" aria-label="Aviso de cookies">
            <div className={styles.banner}>
                <div className={styles.content}>
                    <p className={styles.text}>
                        Utilizamos cookies propias y de terceros para analizar nuestros servicios y mostrarte publicidad relacionada con tus preferencias en base a un perfil elaborado a partir de tus hábitos de navegación.
                        Puedes obtener más información y configurar tus preferencias en nuestra{' '}
                        <Link href="/politica-de-cookies" className={styles.link}>
                            Política de Cookies
                        </Link>.
                    </p>
                </div>
                <div className={styles.actions}>
                    <button onClick={rejectAll} className={cn(styles.btn, styles.btnReject)}>
                        Rechazar opcionales
                    </button>
                    <Button onClick={acceptAll} variant="primary" size="sm" className={styles.btnAccept}>
                        Aceptar todas
                    </Button>
                </div>
            </div>
        </div>
    );
}
