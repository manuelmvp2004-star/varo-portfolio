
const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--border-color)', marginTop: '4rem', color: 'var(--text-secondary)' }}>
            <p>&copy; {new Date().getFullYear()} Manuel Varo. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
