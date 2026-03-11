/**
 * Lightweight className utility — merges class strings, ignores falsy values.
 * Usage: cn('base-class', condition && 'conditional', styles.module)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}
