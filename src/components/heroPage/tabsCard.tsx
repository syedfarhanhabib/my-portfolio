// This is a TypeScript (tsx) version of the React component that defines a TabCard.
// It uses the 'Link' component from the 'next/link' library to create a link with custom styling.

import React from 'react';
import { neueMachina } from '@/app/fonts';
import Image from 'next/image';

interface TabCardProps {
  customClass: string;
  content: string;
  text: string;
}

export const TabCard: React.FC<TabCardProps> = ({ customClass, content, text }) => {
  return (
   <>
    <div className={`${customClass} w-full overflow-hidden text-dark tracking-tightest relative  rounded-2xl h-full p10 text-xl md:text-4xl font-light text-white bg-gradient-to-br from-depth-light to-depth-dark`}>
      <p className={`${neueMachina.className} text-transparent bg-clip-text bg-gradient-to-br from-light to-depth-dark   pb-5 z-50 absolute left-5 tracking-tightest bottom-5 text-4xl md:text-7xl`}>
        {text}
      </p>
      <Image
        src={content}
        alt="dummy image"
        width={1000}
        height={1000}
        className="object-cover object-left-top h-full absolute bottom-0 inset-x-0 w-full"
      />
    </div>
   </>
  );
};

export default TabCard;
