'use client';
import React from 'react'
import { neueMachina } from '../fonts'
import Card from '@/components/WorkPage/Card'
import { motion } from 'framer-motion'
import Text from '@/components/Text';

function page() {
  return (
    <section className='min-h-dvh bg-light text-dark dark:bg-dark dark:text-light px-5 md:px-10 pt-20 md:pt-40 pb-10 '>
      <h3 className='tracking-tighter flex items-center text-sm md:text-lg py-1 px-2 leading-none w-fit rounded-full mb-3 dark:text-dark dark:bg-light bg-dark text-light'>Case studies</h3>
      <Text className=''>Crafting intuitive interfaces that bring dreams to digital reality.</Text>
      <div className="cards flex flex-col md:flex-row gap-5 md:gap-10 mt-10 ">
        <Card img='/euroauto.jpg' text='project 01' customClass='' link='/' />
        <Card img='/puntopago.jpg' text='project 02' customClass='md:mt-40' link='/' />
      </div>
      <div className="cards flex flex-col md:flex-row gap-5 md:gap-10 mt-10 ">
        <Card img='/riyadh.jpg' text='project 03' customClass='' link='/' />
        <Card img='/kelvin.jpg' text='project 04' customClass='md:mt-40' link='/' />
      </div>
    </section>
  )
}
export default page