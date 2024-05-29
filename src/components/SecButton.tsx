// This is a TypeScript (tsx) version of the React component that defines a SecButton.
// It uses the 'Link' component from the 'next/link' library to create a link with custom styling.
'use client';
import { neueMachina } from '@/app/fonts';
import { motion } from 'framer-motion';
import React from 'react';
import styles from '@/app/css/styles.module.css'

interface SecButtonProps {
    children: React.ReactNode;
    className?: string;
}

const SecButton: React.FC<SecButtonProps> = ({ children, className }) => {
    return (
        <div className="SecButton overflow-hidden">
            <motion.h1
                initial={{ y: "100%", }}
                whileInView={{ y: "0%", }}
                transition={{
                    duration: .4,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                className={`${neueMachina.className} ${className} ${styles.SecButton}`}>
                {children} 
            </motion.h1>
        </div>
    );
};

export default SecButton;
