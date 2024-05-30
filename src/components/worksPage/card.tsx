// This is a TypeScript (tsx) version of the React component that defines a Card.
// It uses the 'Link' component from the 'next/link' library to create a link with custom styling.

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { neueMachina } from '@/app/fonts';
import { motion } from 'framer-motion';


interface CardProps {
  customClass: string;
  text: React.ReactNode;
  img: string;
  link: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ customClass, text, img, link, icon }) => {
  return (
    <>
      <div className={`${customClass} overflow-hidden`}>
        <motion.div
          initial={{ x: "-50%", }}
          whileInView={{ x: "0%", }}
          transition={{
            duration: .4,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className={`relative w-full md:w-[40vw] md:h-[80dvh]`}>
          {/* <SecButton className=''>{text}{icon}</SecButton> */}
          <Image className='w-full h-full object-cover hover:scale-[1.009] rounded-3xl' height={500} width={500} src={img} alt='Project cover' />
        </motion.div>
      </div>
    </>
  );
};

export default Card;
