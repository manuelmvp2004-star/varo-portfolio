'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useHeaderScroll } from '@/hooks/useHeaderScroll';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { navigation, ctaButton } from '@/data/navigation';
import { MobileMenu } from '../MobileMenu';
import { Button } from '@/components/common/Button';
import { useHomeIntro } from '@/components/motion/HomeIntroContext';
import styles from './Header.module.scss';
import { cn } from '@/lib/utils/cn';

export function Header() {
    const isScrolled = useHeaderScroll(60);
    const prefersReducedMotion = usePrefersReducedMotion();
    const { isHomeRoute } = useHomeIntro();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const headerRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLAnchorElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const actionsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isHomeRoute) return;
        if (prefersReducedMotion || !headerRef.current) return;

        let isCancelled = false;
        let cleanupTimeline: (() => void) | null = null;

        const initAnimation = async () => {
            const { gsap } = await import('gsap');
            if (isCancelled || !headerRef.current) return;

            const tl = gsap.timeline({
                defaults: {
                    ease: 'power2.out',
                },
            });

            cleanupTimeline = () => tl.kill();

            tl.fromTo(
                headerRef.current,
                { autoAlpha: 0, y: -16 },
                { autoAlpha: 1, y: 0, duration: 0.48, clearProps: 'opacity,visibility,transform' }
            ).from(
                [logoRef.current, navRef.current, actionsRef.current],
                {
                    autoAlpha: 0,
                    y: -10,
                    duration: 0.34,
                    stagger: 0.06,
                    clearProps: 'opacity,visibility,transform',
                },
                '-=0.24'
            );
        };

        void initAnimation();

        return () => {
            isCancelled = true;
            cleanupTimeline?.();
        };
    }, [isHomeRoute, prefersReducedMotion]);

    return (
        <>
            <header
                ref={headerRef}
                className={cn(styles.header, isScrolled && styles.scrolled)}
                data-home-intro-target="header"
            >
                <div className={styles.inner}>
                    <Link ref={logoRef} href="/" className={styles.logo} aria-label="Multiservicios Varo – Inicio">
                        <span className={styles.logoMark}>MV</span>
                        <span className={styles.logoText}>
                            <span className={styles.logoMain}>Multiservicios</span>
                            <span className={styles.logoSub}>Varo</span>
                        </span>
                    </Link>

                    <nav ref={navRef} className={styles.nav} aria-label="Navegación principal">
                        <ul className={styles.navList}>
                            {navigation.map((item) => (
                                <li
                                    key={item.href}
                                    className={cn(styles.navItem, item.children && styles.hasDropdown)}
                                    onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                    onFocus={() => item.children && setActiveDropdown(item.href)}
                                    onBlur={(event) => {
                                        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                                            setActiveDropdown(null);
                                        }
                                    }}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Escape') {
                                            setActiveDropdown(null);
                                        }
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        className={styles.navLink}
                                        aria-haspopup={item.children ? 'menu' : undefined}
                                        aria-expanded={item.children ? activeDropdown === item.href : undefined}
                                    >
                                        {item.label}
                                        {item.children && (
                                            <svg className={styles.chevron} width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </Link>

                                    {item.children && activeDropdown === item.href && (
                                        <div className={styles.dropdown} role="menu" aria-label={`Submenú de ${item.label}`}>
                                            <ul className={styles.dropdownList}>
                                                {item.children.map((child) => (
                                                    <li key={child.href}>
                                                        <Link href={child.href} className={styles.dropdownLink} role="menuitem">
                                                            {child.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div ref={actionsRef} className={styles.actions}>
                        <Button href={ctaButton.href} variant="secondary" size="sm" className={styles.ctaDesktop}>
                            {ctaButton.label}
                        </Button>
                        <button
                            type="button"
                            className={styles.hamburger}
                            onClick={() => setMobileOpen(true)}
                            aria-label="Abrir menú"
                            aria-expanded={mobileOpen}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </header>

            <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
        </>
    );
}
