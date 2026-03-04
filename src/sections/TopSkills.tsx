
const TopSkills = ({ className = "" }: { className?: string }) => {
    const categories = {
        Frontend: ['React', 'TypeScript', 'HTML', 'CSS'],
        Design: ['Responsive UI', 'Layout Systems'],
        Tools: ['Git', 'Vite', 'Modern Web Tooling']
    };

    return (
        <div className={`card-base ${className}`}>
            <h2>Skills</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1.5rem' }}>
                {Object.entries(categories).map(([cat, skills]) => (
                    <div key={cat}>
                        <h3 style={{ fontSize: '0.9rem', color: 'white', marginBottom: '0.5rem' }}>{cat}</h3>
                        <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                            {skills.map(s => <li key={s}>{s}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopSkills;
