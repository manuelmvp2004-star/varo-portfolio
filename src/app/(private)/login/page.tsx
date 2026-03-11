import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
    title: 'Acceso Privado',
    path: '/login',
});
metadata.robots = { index: false, follow: false };

export default function LoginPage() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--color-bg-primary)',
            padding: 'var(--space-6)'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '400px',
                backgroundColor: 'var(--color-bg-white)',
                padding: 'var(--space-10)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-xl)',
                textAlign: 'center'
            }}>
                {/* Placeholder Logo */}
                <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-3xl)',
                    color: 'var(--color-text-dark)',
                    marginBottom: 'var(--space-8)'
                }}>
                    VARO<span style={{ color: 'var(--color-accent)' }}>.</span>
                </div>

                <h1 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 'var(--fw-semibold)',
                    color: 'var(--color-text-dark)',
                    marginBottom: 'var(--space-2)'
                }}>
                    Acceso Clientes
                </h1>
                <p style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-medium)',
                    marginBottom: 'var(--space-6)'
                }}>
                    Inicia sesión para ver tus presupuestos, documentos e informes diarios de obra.
                </p>

                {/* Fake Form */}
                <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        style={{
                            padding: 'var(--space-3)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--color-border-dark)',
                            width: '100%'
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        style={{
                            padding: 'var(--space-3)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--color-border-dark)',
                            width: '100%'
                        }}
                    />
                    <button
                        type="button"
                        style={{
                            backgroundColor: 'var(--color-text-primary)',
                            color: 'var(--color-bg-white)',
                            padding: 'var(--space-3)',
                            borderRadius: 'var(--radius-md)',
                            fontWeight: 'var(--fw-medium)',
                            marginTop: 'var(--space-2)',
                            cursor: 'pointer'
                        }}
                    >
                        Entrar al portal
                    </button>
                </form>
            </div>
        </div>
    );
}
