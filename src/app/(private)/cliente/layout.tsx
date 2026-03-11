export default function PrivateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-bg-light)' }}>
            {/* Sidebar Placeholder */}
            <aside style={{
                width: '260px',
                backgroundColor: 'var(--color-bg-primary)',
                color: 'var(--color-bg-white)',
                padding: 'var(--space-6)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-8)'
            }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)' }}>
                    VARO<span style={{ color: 'var(--color-accent)' }}>.</span>
                </div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', fontSize: 'var(--text-sm)' }}>
                    <div style={{ opacity: 0.5, textTransform: 'uppercase', fontSize: 'var(--text-xs)', letterSpacing: '0.05em' }}>Portal</div>
                    <a href="#" style={{ color: 'var(--color-accent)' }}>Dashboard</a>
                    <a href="#">Proyectos activos</a>
                    <a href="#">Presupuestos</a>
                    <a href="#">Facturas</a>
                    <a href="#">Mensajes</a>
                    <a href="#">Ajustes</a>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Header Placeholder */}
                <header style={{
                    height: '70px',
                    backgroundColor: 'var(--color-bg-white)',
                    borderBottom: '1px solid var(--color-border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '0 var(--space-8)'
                }}>
                    <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-bg-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-text-dark)',
                        fontWeight: 'var(--fw-medium)',
                        fontSize: 'var(--text-sm)'
                    }}>
                        MC
                    </div>
                </header>

                {/* Page Content */}
                <div style={{ padding: 'var(--space-10)', flex: 1 }}>
                    {children}
                </div>
            </main>
        </div>
    );
}
