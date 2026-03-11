import { cn } from '@/lib/utils/cn';
import styles from './Container.module.scss';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    size?: 'default' | 'narrow' | 'wide';
    as?: React.ElementType;
}

export function Container({
    children,
    className,
    size = 'default',
    as: Component = 'div',
}: ContainerProps) {
    return (
        <Component className={cn(styles.container, styles[`container--${size}`], className)}>
            {children}
        </Component>
    );
}
