import { Container } from '@/components/common/Container';
import styles from './LegalContent.module.scss';
import { cn } from '@/lib/utils/cn';

interface LegalContentProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
}

export function LegalContent({ title, lastUpdated, children }: LegalContentProps) {
    return (
        <article className={styles.article}>
            <header className={styles.header}>
                <Container size="narrow">
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.meta}>Última actualización: {lastUpdated}</p>
                </Container>
            </header>

            <Container size="narrow">
                <div className={cn(styles.content, 'legal-prose')}>
                    {children}
                </div>
            </Container>
        </article>
    );
}
