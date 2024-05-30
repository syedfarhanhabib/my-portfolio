"use client";
import React from "react";
import { PinContainer } from "./pinCard";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center bg-dark justify-center ">
      <PinContainer
        title="syedfarhanhabib"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-depth-light sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-light">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-depth-dark ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-depth-light to-depth-dark" />
        </div>
      </PinContainer>
    </div>
  );
}
