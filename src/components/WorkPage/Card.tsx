// This is a TypeScript (tsx) version of the React component that defines a Card.
// It uses the 'Link' component from the 'next/link' library to create a link with custom styling.

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { neueMachina } from '@/app/fonts';

interface CardProps {
  customClass: string;
  text: string;
  img: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ customClass, text, img, link }) => {
  return (
    <>
      <div className={`${customClass} relative w-full h-full`}>
        <Image className='w-full h-full object-cover hover:scale-[1.009] shadow-2xl rounded-3xl transition-all duration-300' height={500} width={500} src={img} alt='Project cover' />
        <Link href={link}>
        </Link>
        <h1 className={`${neueMachina.className} tracking-tightest text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-dark dark:from-light dark:to-depth-dark to-depth-light leading-none mt-2`}>
          {text}
        </h1>
      </div>
    </>
  );
};

export default Card;
