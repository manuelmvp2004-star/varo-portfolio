import { cn } from '@/lib/utils/cn';
import styles from './SectionHeading.module.scss';

interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
    light?: boolean;
    className?: string;
}

export function SectionHeading({
    eyebrow,
    title,
    subtitle,
    align = 'left',
    light = false,
    className,
}: SectionHeadingProps) {
    return (
        <div className={cn(styles.heading, styles[`heading--${align}`], light && styles['heading--light'], className)}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            <span className={styles.accent} aria-hidden="true" />
        </div>
    );
}
