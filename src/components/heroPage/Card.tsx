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
      <div className={`${customClass} overflow-hidden relative w-full h-full shadow-2xl rounded-3xl`}>
        <Image className='w-full h-full object-cover hover:scale-[1.009] transition-all duration-300' height={500} width={500} src={img} alt='Project cover' />
        <Link href={link}>
          <h1 className={`${neueMachina.className} tracking-tightest text-8xl text-transparent bg-clip-text bg-gradient-to-br from-light to-depth-dark leading-none absolute left-5 bottom-5`}>
            {text}
          </h1>
        </Link>
      </div>
    </>
  );
};

export default Card;
