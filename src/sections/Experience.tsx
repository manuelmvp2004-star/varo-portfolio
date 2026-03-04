import { experience } from '../data/experience';

const Experience = () => {
    return (
        <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Experiencia</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {experience.map(exp => (
                    <div key={exp.id} className="card-base" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', alignItems: 'baseline' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>{exp.period}</span>
                        </div>
                        <h4 style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 500 }}>{exp.company}</h4>
                        <p style={{ lineHeight: '1.6' }}>{exp.description}</p>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                            {exp.tech.map(t => (
                                <span key={t} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: '16px', fontSize: '0.8rem' }}>{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
