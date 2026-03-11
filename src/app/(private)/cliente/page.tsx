export const metadata = {
    title: 'Portal del Cliente | Multiservicios Varo',
    noindex: true,
};

export default function ClienteDashboardPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            <div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', color: 'var(--color-text-dark)', marginBottom: 'var(--space-2)' }}>
                    Bienvenido, Manuel Varo
                </h1>
                <p style={{ color: 'var(--color-text-medium)' }}>
                    Este es el resumen del estado actual de tus proyectos.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
                {/* Card 1 */}
                <div style={{ backgroundColor: 'var(--color-bg-white)', padding: 'var(--space-6)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)' }}>
                    <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--fw-medium)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>Proyectos Activos</h3>
                    <div style={{ fontSize: 'var(--text-4xl)', fontFamily: 'var(--font-display)', color: 'var(--color-text-dark)' }}>1</div>
                </div>

                {/* Card 2 */}
                <div style={{ backgroundColor: 'var(--color-bg-white)', padding: 'var(--space-6)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)' }}>
                    <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--fw-medium)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>Presupuestos Pendientes</h3>
                    <div style={{ fontSize: 'var(--text-4xl)', fontFamily: 'var(--font-display)', color: 'var(--color-text-dark)' }}>0</div>
                </div>

                {/* Card 3 */}
                <div style={{ backgroundColor: 'var(--color-bg-white)', padding: 'var(--space-6)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)' }}>
                    <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--fw-medium)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>Mensajes Sin Leer</h3>
                    <div style={{ fontSize: 'var(--text-4xl)', fontFamily: 'var(--font-display)', color: 'var(--color-text-dark)' }}>2</div>
                </div>
            </div>

            <div style={{ backgroundColor: 'var(--color-bg-white)', padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)' }}>
                <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--fw-semibold)', color: 'var(--color-text-dark)', marginBottom: 'var(--space-6)' }}>Proyecto Actual: Reforma Piso Centro</h2>
                <div style={{ height: '8px', backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--radius-full)', overflow: 'hidden', marginBottom: 'var(--space-4)' }}>
                    <div style={{ width: '65%', height: '100%', backgroundColor: 'var(--color-accent)' }}></div>
                </div>
                <p style={{ color: 'var(--color-text-medium)', fontSize: 'var(--text-sm)' }}>Fase actual: Instalación eléctrica y fontanería (65% completado)</p>
            </div>
        </div>
    );
}
