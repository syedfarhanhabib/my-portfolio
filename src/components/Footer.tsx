import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Button from './Button';
import { neueMachina } from '@/app/fonts';
import Link from 'next/link';

function Footer() {
  return (

    <>
      <div className="w-full tracking-tighter font-light flex flex-col justify-between dark:bg-dark dark:text-light text-dark bg-light h-screen px-5 md:px-10 py-5">
        <div className="top w-full flex justify-between">
          <p className="w-72 mt-20 leading-none tracking-tighter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit explicabo, sint tempora obcaecati maxime quasi
            quisquam optio repellat.
          </p>
          <div className="social p-2 gap-2 rounded-full mt-40 dark:bg-depth-dark bg-depth-light flex flex-col items-end">
            <Link href={"/"} className='hover:scale-125' >
              <FaBehance />
            </Link>
            <Link href={"/"} className='hover:scale-125' >
              <FaInstagram />
            </Link>
            <Link href={"/"} className='hover:scale-125' >
              <FaGithub />
            </Link>
            <Link href={"/"} className='hover:scale-125' >
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div className="mid -mt-20 flex relative flex-col justify-center">
          <div className="bg blur-[25vw] md:blur-[14vw] w-[70vw] h-[30vh] rounded-full bg-yellow -rotate-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <h1 className={`${neueMachina.className}  md:text-[9vw] text-[12.3vw]  tracking-tightest mix-blend-overlay leading-none`}>
            syedFarhanHabib
          </h1>
        </div>
        <div className="btm flex justify-between items-end">
          <div className="flex flex-col gap-3">
            <Button link='/' text="Case Studies" customClass=""></Button>
            <Button text="Get a free analysis" link='/' customClass="md:text-5xl text-lg" >
              {/* dark:bg-depth-dark bg-depth-light */}
            </Button>
          </div>
          <h3 className="text-right md:text-base text-sm">Copyright © 2024 Syed Farhan</h3>
        </div>
      </div>
    </>
  )
}

export default Footer