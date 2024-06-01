'use client';
import { neueMachina } from '@/app/fonts';
import { motion } from 'framer-motion';
import React from 'react';

interface TitleProps {
    children: React.ReactNode;
    className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
    return (
        <div className="text  overflow-hidden">
            <motion.h1
                initial={{ y: "100%", scaleY: '50%' }}
                whileInView={{ y: "0%", scaleY: '100%' }}
                transition={{
                    duration: .4,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }} className={`${neueMachina.className} tracking-tighter  leading-none flex items-center text-xs md:text-lg py-2 px-3 w-fit h-fit rounded-full mb-3 dark:text-dark dark:bg-light bg-dark text-light ${className}`}>
                {children}
            </motion.h1>
        </div>
    );
};

export default Title;