// This is a TypeScript (tsx) version of the React component that defines a Card.
// It uses the 'Link' component from the 'next/link' library to create a link with custom styling.

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { neueMachina } from '@/app/fonts';
import { motion } from 'framer-motion';

interface CardProps {
  customClass: string;
  text: string;
  img: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ customClass, text, img, link }) => {
  return (
    <>
      <div className={`${customClass} overflow-hidden`}>
        <motion.div
          initial={{ x: "-100%", }}
          whileInView={{ x: "0%", }}
          transition={{
            duration: .4,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className={`relative w-full md:w-[40vw] md:h-[80dvh]`}>
          <Image className=' relative w-full h-full object-cover hover:scale-[1.009] shadow-xl rounded-3xl transition-all duration-300' height={500} width={500} src={img} alt='Project cover' />
          <Link style={{ backgroundColor: "#eab308" }} className={`${neueMachina.className} tracking-tightest text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-dark dark:from-light dark:to-depth-dark to-depth-light leading-none absolute left-5 bottom-5`} href={link}>
            {text}
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Card;
