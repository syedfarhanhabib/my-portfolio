'use client';
import React from 'react';
// import Title from '@/components/ui/title';
import { experiencesData } from '@/utils/data';
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { GlowingStarsBackgroundCard } from '../ui/glowingStars';
import { motion } from 'framer-motion';

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
                    <div className="icon-date z-10 translate-y-[5vw] md:translate-y-[3vw]">
                        <p className='absolute left-1/2 -translate-x-1/2 p-2 rounded-full z-10 dark:bg-light dark:text-dark bg-dark text-light'>{item.icon}</p>
                        <p style={index % 2 === 1 ? { textAlign: "right" } : { textAlign: "left" }} className={`date ${index % 2 === 1 ? 'md:left-[40%] left-[15%]' : 'right-[15%] md:right-[40%]'} absolute translate-y-2 flex flex-col`} >{item.date}</p>
                    </div>
                    <motion.div
                        initial={index % 2 === 1 ? { x: "5%", scaleX: '50%', opacity: 0 } : { x: "-5%", scaleX: '50%', opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1, scaleX: '100%' }}
                        className={`!static card text-sm md:text-base ${index % 2 === 1 ? 'ml-auto text-right' : 'mr-auto text-left'} tracking-tighter font-light leading-none w-1/3 flex gap-1 flex-col rounded-xl shadow-lg`}
                    >
                        <GlowingStarsBackgroundCard>
                            <div className={`arrow absolute text-xl ${index % 2 === 1 ? '-left-4' : '-right-4'} top-3`}>
                                {index % 2 === 1 ? <IoMdArrowDropleft /> : <IoMdArrowDropright />}
                            </div>
                            <h3 className='font-semibold'>{item.title}</h3>
                            <p className='font-normal'>{item.location}</p>
                            <p>{item.description}</p>
                        </GlowingStarsBackgroundCard>
                    </motion.div>
                </React.Fragment>

            ))
            }
        </section >
    );
};

export default Experience;
