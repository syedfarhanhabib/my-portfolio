// This is a TypeScript (tsx) version of the React component that defines a Button.
// It uses the 'Link' component from the 'next/link' library to create a link with custom styling.

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  className?: string;
  link: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ className, link, text }) => {
  return (
    <Link href={link} className={`${className} w-fit active:scale-75 hover:scale-110 overflow-hidden relative after:scale-0 after:opacity-0 hover:after:opacity-100 after:overflow-hidden after:left-0 after:bottom-0 after:absolute after:w-full after:h-full after:dark:bg-depth-dark after:bg-depth-light hover:after:scale-100  p-3 duration-300 after:duration-300 hover:after:rounded-full after:-z-10 z-20 border dark:border-depth-dark border-depth-light tracking-tighter leading-none rounded-full`} >
      {text}
    </Link>
  );
};

export default Button;
