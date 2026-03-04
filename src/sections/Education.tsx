import { education } from '../data/education';

const Education = () => {
    return (
        <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Formación</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {education.map(edu => (
                    <div key={edu.id} className="card-base" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', alignItems: 'baseline' }}>
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>{edu.title}</h3>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>{edu.period}</span>
                        </div>
                        <h4 style={{ color: 'var(--accent)', fontSize: '1.05rem', fontWeight: 500 }}>{edu.institution}</h4>
                        <p style={{ lineHeight: '1.6' }}>{edu.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
