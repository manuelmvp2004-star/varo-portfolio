import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    className?: string;
    children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
    href?: undefined;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    disabled?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
    href: string;
    type?: undefined;
    onClick?: () => void;
    disabled?: undefined;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className,
    children,
    href,
    onClick,
    ...rest
}: ButtonProps) {
    const classes = cn(
        styles.btn,
        styles[`btn--${variant}`],
        styles[`btn--${size}`],
        fullWidth && styles['btn--full'],
        className
    );

    if (href) {
        return (
            <Link href={href} className={classes} onClick={onClick}>
                {children}
            </Link>
        );
    }

    return (
        <button
            className={classes}
            onClick={onClick}
            {...(rest as ButtonAsButton)}
        >
            {children}
        </button>
    );
}
