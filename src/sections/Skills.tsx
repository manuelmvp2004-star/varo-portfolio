
import Section from '../components/layout/Section';
import { skills } from '../data/skills';

const Skills = () => {
    return (
        <Section id="skills" title="Skills">
            <div className="skills-list">
                {skills.map(skill => (
                    <div key={skill.name} className="skill-item">
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
