// This is a TypeScript (tsx) version of the React component that defines a Text.
// It uses the 'Link' component from the 'next/link' library to create a link with custom styling.
'use client';
import { neueMachina } from '@/app/fonts';
import { motion } from 'framer-motion';
import React from 'react';

interface TextProps {
    children: React.ReactNode;
    className?: string;
}

const Text: React.FC<TextProps> = ({ children, className }) => {
    return (
        <div className="text overflow-hidden">
            <motion.h1
                initial={{ y: "100%", }}
                whileInView={{ y: "0%", }}
                transition={{
                    duration: .4,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }} className={`${neueMachina.className} tracking-tightest leading-none text-transparent bg-clip-text bg-gradient-to-br from-dark dark:from-light dark:to-depth-dark to-depth-light text-4xl md:text-7xl ${className} `}>
                {children}
            </motion.h1>
        </div>
    );
};

export default Text;
