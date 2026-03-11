'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { navigation, ctaButton } from '@/data/navigation';
import { Button } from '@/components/common/Button';
import styles from './MobileMenu.module.scss';
import { cn } from '@/lib/utils/cn';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <>
            {/* Backdrop */}
            <div
                className={cn(styles.backdrop, isOpen && styles.backdropVisible)}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Drawer */}
            <div
                className={cn(styles.drawer, isOpen && styles.drawerOpen)}
                role="dialog"
                aria-modal="true"
                aria-label="Menú de navegación"
            >
                {/* Header */}
                <div className={styles.drawerHeader}>
                    <span className={styles.drawerTitle}>Menú</span>
                    <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar menú">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                {/* Nav items */}
                <nav className={styles.drawerNav}>
                    {navigation.map((item) => (
                        <div key={item.href} className={styles.navGroup}>
                            <Link href={item.href} className={styles.navLink} onClick={onClose}>
                                {item.label}
                            </Link>
                            {item.children && (
                                <div className={styles.subLinks}>
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.href}
                                            href={child.href}
                                            className={styles.subLink}
                                            onClick={onClose}
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Footer */}
                <div className={styles.drawerFooter}>
                    <Button href={ctaButton.href} variant="primary" fullWidth onClick={onClose}>
                        {ctaButton.label}
                    </Button>
                    <div className={styles.contact}>
                        <a href="tel:+34616424271" className={styles.contactLink}>+34 616 424 271</a>
                        <a href="mailto:info@multiserviciosvaro.com" className={styles.contactLink}>
                            info@multiserviciosvaro.com
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
