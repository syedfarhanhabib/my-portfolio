"use client";
import React, { useRef, useState } from "react";
import { IoClose, IoReorderTwoOutline } from "react-icons/io5";
import Button from "./Button"; // Make sure Button is correctly imported
import Link from "next/link"; // Make sure Link is correctly imported
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ThemeSwitch from "./ThemeSwitch";

gsap.registerPlugin(useGSAP);

const Navbar: React.FC = () => {
  const headerRef = useRef(null)

  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <header ref={headerRef} className="header bg-light/5 text-dark dark:bg-dark/5 dark:text-light fixed top-0 tracking-tighter backdrop-blur z-[999] w-full p-3 font-light flex md:items-center justify-between text-base d:text-lg leading-none">
        <Link href="/" className="font-medium">
          syedFarhan
        </Link>
        <div className="mid sm:flex hidden -ml-24 gap-2 leading-none">
          <div className="line mt-2 w-6 h-[1px] bg-dark dark:bg-light"></div>
          <h3>
            Developer <br />
            based in Pakistan
          </h3>
        </div>
        <div className="icon md:hidden text-3xl transition-all duration-300" onClick={toggle}>
          {open ? <IoClose /> : <IoReorderTwoOutline />}
        </div>
        <div className="end items-center justify-between md:flex gap-5 hidden">
          <ThemeSwitch />
          <Button text="About" customClass="border-none" link="/About" />
          <Button text="Work" customClass="border-none" link="/Work" />
          <Button text="Let's chat" customClass="" link="/contact" />
        </div>
      </header>
      {open && (
        <div className="fixed right-5 z-[70] top-16 md:hidden duration-300 items-center justify-between flex flex-col w-fit bg-light text-dark dark:bg-dark dark:text-light border border-depth-light shadow-2xl dark:border-depth-dark rounded-3xl p-5 gap-5 ">
          <ThemeSwitch />
          <Button text="About" customClass="border-none" link="/About" />
          <Button text="Work" customClass="border-none" link="/Work" />
          <Button text="Let's chat" customClass="" link="/contact" />
        </div>
      )}
    </>
  );
};

export default Navbar;