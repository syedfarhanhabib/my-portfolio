import React from 'react';

interface Skill {
    skill: string;
    percentage: string; // Ensure this is a string that includes the percentage symbol, e.g., "75%"
}

interface SkillsInfoCardProps {
    heading: string;
    skills: Array<Skill>; // Use the Skill interface defined above
    // customClass?: string; // If customClass is optional, use the ? symbol
}

const SkillsInfoCard: React.FC<SkillsInfoCardProps> = ({ heading, skills }) => {
    return (
        <>
            <section className='skillsInfoCard overflow-hidden w-full p-3 rounded-xl bg-re border border-depth-light dark:border-depth-dark'>
                <h1 className='tracking-tighter font-semibold pb-3 leading-none border-b border-depth-light dark:border-depth-dark'>{heading}</h1>
                {skills.map((item, index) => (
                    <React.Fragment key={`skill_${index}`}>
                        <div className="skillinfo font-light py-3 tracking-tighter leading-none flex items-center justify-between">
                            <p>{item.skill}</p>
                            <p className="percentage text-yellow">{item.percentage}</p>
                        </div>
                        <div className="skill-progress-bg w-full h-1 rounded-full bg-depth-light dark:bg-depth-dark">
                            <div className="skill-progress rounded-full h-1 dark:bg-light bg-dark" style={{ width: item.percentage }} />
                        </div>
                    </React.Fragment>
                ))}
            </section>
        </>
    );
};

export default SkillsInfoCard;
