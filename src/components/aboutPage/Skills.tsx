'use client';
import React, { useState } from 'react';
import SkillCard from './SkillCard'; // Make sure the path to SkillCard is correct
import { SkillData } from '@/utils/data'; // Check the path to SkillData
import SkillsInfoCard from './SkillsInfoCard';
import Text from '../Text';

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(SkillData[0])
    const handleSelectSkill = (data: React.SetStateAction<{ title: string; icon: string; skills: { skill: string; percentage: string; }[]; }>) => {
        setSelectedSkill(data);
    }
    return (
        <section className='mt-20'>
            <Text className='md:text-2xl text-xl mb-5'>Technical proficiency</Text>
            <div className="skills-content flex flex-col md:flex-row items-start gap-5 md:gap-10">
                <div className="skill-card flex gap-5 flex-col">
                    {SkillData.map((item) => (
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
                    {/* icon={selectedSkill.icon} */}
                    <SkillsInfoCard heading={selectedSkill.title} skills={selectedSkill.skills} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
