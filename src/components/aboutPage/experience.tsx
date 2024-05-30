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
        <section className='relative flex flex-col gap-5 md:gap-10'>
            {experiencesData.map((item: ExperienceData, index: number) => (
                <React.Fragment key={index}>
                    <div
                        className={`card elative ${index % 2 === 1 ? 'ml-auto text-right' : 'mr-auto text-left'} tracking-tighter font-light leading-none p-3 w-1/3 flex gap-1 flex-col bg-depth-light dark:bg-depth-dark rounded-xl shadow-lg`}
                    >
                        <div className="icon-date">
                            <p className='absolute left-1/2 -translate-x-1/2 p-2 rounded-full z-10 dark:bg-light dark:text-dark bg-dark text-light'>{item.icon}</p>
                            <p style={index % 2 === 1 ? { textAlign: "right" } : { textAlign: "left" }} className={`date ${index % 2 === 1 ? 'md:left-[40%] left-[20%]' : 'right-[20%] md:right-[40%]'} absolute translate-y-2 flex flex-col`} >{item.date}</p>
                        </div>
                        {/* <div className={`arrow absolute ${index % 2 === 1 ? '-left-3' : '-right-3'} top-3`}>
                            {index % 2 === 1 ? <IoMdArrowDropleft /> : <IoMdArrowDropright />}
                        </div> */}
                        <h3 className='font-semibold'>{item.title}</h3>
                        <p className='font-normal'>{item.location}</p>
                        <p>{item.description}</p>
                    </div>
                </React.Fragment>

            ))}
        </section>
    );
};

export default Experience;
