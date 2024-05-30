'use client';
import React, { useState } from 'react';
import SkillCard from '@/components/aboutPage/skillsCard'; // Make sure the path to SkillCard is correct
import { skillData } from '@/utils/data'; // Check the path to SkillData
import SkillsInfoCard from '@/components/aboutPage/skillsInfo';
import Title from '@/components/ui/title';

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(skillData[0])
    const handleSelectSkill = (data: React.SetStateAction<{ title: string; icon: JSX.Element; skills: { skill: string; percentage: string; }[]; }>) => {
        setSelectedSkill(data);
    }
    return (
        <section className='mt-20'>
            <Title className=''>Technical proficiency</Title>
            <div className="skills-content flex flex-col md:flex-row items-start gap-5 md:gap-10">
                <div className="skill-card flex gap-5 flex-col">
                    {skillData.map((item) => (
                        <SkillCard
                            key={item.title}
                            icon={item.icon}
                            title={item.title}
                            onClick={() => {
                                handleSelectSkill(item);
                            }}
                            isActive={selectedSkill.title === item.title} />
                    ))}
                </div>
                <div className="skills-info w-full">
                    <SkillsInfoCard heading={selectedSkill.title} skills={selectedSkill.skills} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
