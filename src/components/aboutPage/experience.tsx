'use client';
import React from 'react';
import Title from '@/components/ui/title';
import { experiencesData } from '@/utils/data';
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";

interface ExperienceData {
    date: string;
    icon: React.ReactNode;
    title: string;
    location: string;
    description: string;
}

const Experience: React.FC = () => {
    return (
        <section>
            <Title className='text-xl md:text-xl' >Experience</Title>
            <section className='flex flex-col gap-5 md:gap-10'>
                {experiencesData.map((item: ExperienceData, index: number) => (
                    <div
                        key={index}
                        className={`card relative ${index % 2 === 1 ? 'ml-auto text-right' : 'mr-auto text-left'} tracking-tighter font-light leading-none p-3 md:w-1/3 flex flex-col gap-2 bg-depth-light dark:bg-depth-dark rounded-xl`}
                    >
                        <div className={`arrow absolute ${index % 2 === 1 ? '-left-3' : '-right-3'} top-3`}>
                            {index % 2 === 1 ? <IoMdArrowDropleft /> : <IoMdArrowDropright />}
                        </div>
                        <div className="line w-1 h-full bg-depth-light dark:bg-depth-dark"></div>
                        <h3 className='font-semibold'>{item.title}</h3>
                        <p className='font-normal'>{item.location}</p>
                        <p>{item.description}</p>
                    </div>
                ))}
            </section>
        </section>
    );
};

export default Experience;
