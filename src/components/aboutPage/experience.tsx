'use client';
import React from 'react';
import Text from '@/components/text';
import { experiencesData } from '@/utils/data';

interface ExperienceData {
    date: string;
    icon: React.ReactNode;
    title: string;
    location: string;
    description: string;
}

const Experience = () => {
    return (
        <section>
            <Text>Experience</Text>
            <section className='flex flex-col gap-5 md:gap-10'>
                {experiencesData.map((item: ExperienceData, index: number) => (
                    <React.Fragment key={index}>
                        <div className={`card ${index % 2 === 1 ? 'ml-auto text-right' : 'mr-auto text-left'} tracking-tighter font-light leading-none p-3 md:w-1/2 flex flex-col gap-2 bg-depth-light dark:bg-depth-dark rounded-xl`}>
                            <h3 className='font-semibold'>{item.title}</h3>
                            <p className='font-normal'>{item.location}</p>
                            <p>{item.description}</p>
                        </div>
                    </React.Fragment>
                ))}
            </section>
        </section>
    );
};

export default Experience;
