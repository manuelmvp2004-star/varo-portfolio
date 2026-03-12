import Link from 'next/link';
import { footerLinks } from '@/data/footer-links';
import styles from './Footer.module.scss';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                {/* Top: Brand + links */}
                <div className={styles.top}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <span className={styles.logoMark}>MV</span>
                            <span className={styles.logoText}>
                                <span className={styles.logoMain}>Multiservicios</span>
                                <span className={styles.logoSub}>Varo</span>
                            </span>
                        </Link>
                        <p className={styles.locality}>Zaragoza · Aragón</p>
                        <p className={styles.tagline}>
                            Reformas, mantenimiento e instalaciones con enfoque técnico,
                            planificación clara y acabados de nivel profesional.
                        </p>
                        <div className={styles.contactInfo}>
                            <a href="tel:+34616424271" className={styles.contactItem}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                </svg>
                                +34 616 424 271
                            </a>
                            <a href="mailto:info@multiserviciosvaro.com" className={styles.contactItem}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="M2 7l10 7 10-7" />
                                </svg>
                                info@multiserviciosvaro.com
                            </a>
                        </div>
                    </div>

                    {/* Link groups */}
                    <div className={styles.linkGroups}>
                        {footerLinks.map((group) => (
                            <div key={group.title} className={styles.linkGroup}>
                                <h3 className={styles.groupTitle}>{group.title}</h3>
                                <ul className={styles.linkList}>
                                    {group.links.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href} className={styles.link}>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.divider} />

                {/* Bottom */}
                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} Multiservicios Varo. Todos los derechos reservados.
                    </p>
                    <div className={styles.legalLinks}>
                        <Link href="/aviso-legal" className={styles.legalLink}>Aviso Legal</Link>
                        <Link href="/politica-de-privacidad" className={styles.legalLink}>Privacidad</Link>
                        <Link href="/politica-de-cookies" className={styles.legalLink}>Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
