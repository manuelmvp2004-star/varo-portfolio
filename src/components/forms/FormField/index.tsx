import { forwardRef } from 'react';
import type { FormField as FormFieldType } from '@/types';
import { cn } from '@/lib/utils/cn';
import styles from './FormField.module.scss';

interface FormFieldProps extends Omit<FormFieldType, 'type'> {
    type?: FormFieldType['type'];
    error?: string;
    className?: string;
}

export const FormField = forwardRef<HTMLElement, FormFieldProps>(
    ({ label, name, type = 'text', required, placeholder, options, error, className, ...rest }, ref) => {
        const id = `field-${name}`;
        const RootProps = {
            id,
            name,
            required,
            className: cn(styles.input, error && styles.inputError),
            ...rest,
        };

        const renderInput = () => {
            switch (type) {
                case 'textarea':
                    return (
                        <textarea
                            {...RootProps}
                            ref={ref as React.Ref<HTMLTextAreaElement>}
                            placeholder={placeholder}
                            rows={4}
                        />
                    );
                case 'select':
                    return (
                        <div className={styles.selectWrapper}>
                            <select {...RootProps} ref={ref as React.Ref<HTMLSelectElement>}>
                                <option value="" disabled selected>
                                    {placeholder || 'Selecciona una opción...'}
                                </option>
                                {options?.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                            <svg className={styles.selectIcon} width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    );
                case 'checkbox':
                    return (
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                name={name}
                                id={id}
                                required={required}
                                ref={ref as React.Ref<HTMLInputElement>}
                                className={styles.checkboxInput}
                                {...rest}
                            />
                            <span className={styles.checkboxCustom} />
                            <span className={styles.checkboxText}>{label}</span>
                        </label>
                    );
                default:
                    return (
                        <input
                            {...RootProps}
                            ref={ref as React.Ref<HTMLInputElement>}
                            type={type}
                            placeholder={placeholder}
                        />
                    );
            }
        };

        if (type === 'checkbox') {
            return (
                <div className={cn(styles.field, className)}>
                    {renderInput()}
                    {error && <span className={styles.errorText}>{error}</span>}
                </div>
            );
        }

        return (
            <div className={cn(styles.field, className)}>
                <label htmlFor={id} className={styles.label}>
                    {label} {required && <span className={styles.required}>*</span>}
                </label>
                {renderInput()}
                {error && <span className={styles.errorText}>{error}</span>}
            </div>
        );
    }
);

FormField.displayName = 'FormField';
