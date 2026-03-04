
const QuickContact = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`card-base ${className}`}>
            <h2>Contact</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                <a href="mailto:example@email.com" style={{ color: 'white' }}>Email</a>
                <a href="https://github.com" style={{ color: 'white' }}>GitHub</a>
                <a href="https://linkedin.com" style={{ color: 'white' }}>LinkedIn</a>
            </div>
        </div>
    );
};

export default QuickContact;
