'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/common/Button';
import styles from './CookiePreferencesModal.module.scss';
import { cn } from '@/lib/utils/cn';

interface CookiePreferencesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CookiePreferencesModal({ isOpen, onClose }: CookiePreferencesModalProps) {
    const [preferences, setPreferences] = useState({
        necessary: true, // Always true
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            const consent = localStorage.getItem('cookieConsent');
            if (consent === 'all') {
                setPreferences({ necessary: true, analytics: true, marketing: true });
            }
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    const handleSave = () => {
        if (preferences.analytics && preferences.marketing) {
            localStorage.setItem('cookieConsent', 'all');
        } else if (!preferences.analytics && !preferences.marketing) {
            localStorage.setItem('cookieConsent', 'necessary');
        } else {
            localStorage.setItem('cookieConsent', 'custom');
            localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <>
            <div className={styles.backdrop} onClick={onClose} aria-hidden />
            <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="modal-title">
                <div className={styles.header}>
                    <h2 id="modal-title" className={styles.title}>Preferencias de Cookies</h2>
                    <button onClick={onClose} className={styles.closeBtn} aria-label="Cerrar panel">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <div className={styles.content}>
                    <p className={styles.description}>
                        Panel de configuración de cookies. Puedes aceptar o rechazar el uso de cookies según tus preferencias.
                        Las cookies estrictamente necesarias no pueden desactivarse.
                    </p>

                    <div className={styles.options}>
                        {/* Necessary */}
                        <div className={styles.option}>
                            <div className={styles.optionText}>
                                <h3 className={styles.optionTitle}>Cookies Técnicas (Necesarias)</h3>
                                <p className={styles.optionDesc}>
                                    Imprescindibles para que la web funcione correctamente (navegación, seguridad, carrito).
                                </p>
                            </div>
                            <div className={cn(styles.toggle, styles.toggleDisabled)}>
                                <div className={cn(styles.knob, styles.knobOn)} />
                            </div>
                        </div>

                        {/* Analytics */}
                        <div className={styles.option}>
                            <div className={styles.optionText}>
                                <h3 className={styles.optionTitle}>Cookies Analíticas</h3>
                                <p className={styles.optionDesc}>
                                    Nos permiten medir el tráfico y analizar cómo usas la web para mejorar la experiencia.
                                </p>
                            </div>
                            <button
                                className={cn(styles.toggle, preferences.analytics && styles.toggleActive)}
                                onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                                aria-pressed={preferences.analytics}
                            >
                                <div className={cn(styles.knob, preferences.analytics && styles.knobOn)} />
                            </button>
                        </div>

                        {/* Marketing */}
                        <div className={styles.option}>
                            <div className={styles.optionText}>
                                <h3 className={styles.optionTitle}>Cookies Publicitarias</h3>
                                <p className={styles.optionDesc}>
                                    Se usan para mostrarte publicidad relevante basada en tu perfil de navegación.
                                </p>
                            </div>
                            <button
                                className={cn(styles.toggle, preferences.marketing && styles.toggleActive)}
                                onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                                aria-pressed={preferences.marketing}
                            >
                                <div className={cn(styles.knob, preferences.marketing && styles.knobOn)} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.footer}>
                    <Button onClick={handleSave} variant="primary" fullWidth>
                        Guardar preferencias
                    </Button>
                </div>
            </div>
        </>
    );
}
