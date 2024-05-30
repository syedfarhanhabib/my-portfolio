"use client";
import React from "react";
import { motion } from "framer-motion";
import { Lamp } from "@/components/heroPage/light";
import { neueMachina } from "@/app/fonts";

export function LampSection() {
  return (
    <Lamp>
      <motion.h1
        initial={{ opacity: 0.5, y: 200 }}
        whileInView={{ opacity: 1, y: 100 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={`${neueMachina.className} tracking-tightest mt-8 bg-gradient-to-br from-dark dark:from-light dark:to-depth-dark to-depth-light py-4 bg-clip-text text-center text-5xl text-transparent md:text-8xl drop-shadow-2xl`}>
        Build lamps <br /> the right way
      </motion.h1>
    </Lamp>
  );
}
