
const Now = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`card-base ${className}`}>
            <h2>Now</h2>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>• Studying Web Development (DAW)</li>
                <li style={{ marginBottom: '0.5rem' }}>• Building real-world React apps</li>
                <li>• Improving UI & Accessibility</li>
            </ul>
        </div>
    );
};

export default Now;
