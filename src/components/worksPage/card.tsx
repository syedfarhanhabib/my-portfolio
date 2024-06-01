// This is a TypeScript (tsx) version of the React component that defines a Card.
// It uses the 'Link' component from the 'next/link' library to create a link with custom styling.

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { neueMachina } from '@/app/fonts';
import { motion } from 'framer-motion';

interface CardProps {
  className?: string;
  text: React.ReactNode;
  img: string;
  link: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, text, img, link, icon }) => {
  return (
    <>
      <motion.div
        initial={{ y: "20%", opacity: 0, scaleY:'50%' }}
        whileInView={{ y: "0%", opacity: 1, scaleY:'100%' }}
        transition={{
          duration: .4,
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className={`${className} relative w-full md:w-[40vw] md:h-[80dvh]`}>
        {/* <SecButton className=''>{text}{icon}</SecButton> */}
        <Image className='w-full h-full object-cover hover:scale-[1.009] shadow-lg rounded-lg' height={500} width={500} src={img} alt='Project cover' />
      </motion.div>
    </>
  );
};

export default Card;
