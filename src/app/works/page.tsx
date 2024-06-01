'use client';
import React from 'react'
import { neueMachina } from '../fonts'
import Card from '@/components/worksPage/card'
import { motion } from 'framer-motion'
import Text from '@/components/ui/text';
import { RiLoopRightLine } from 'react-icons/ri';
import Title from '@/components/ui/title';

function page() {
  return (
    <section className='min-h-dvh bg-light text-dark dark:bg-dark dark:text-light px-5 md:px-10 pt-20 md:pt-40 pb-10 '>
      <Title>Case studies</Title>
      <Text className='mb-10'>Crafting intuitive interfaces that bring dreams to digital reality.</Text>
      <div className="cards flex flex-col md:flex-row gap-5 md:gap-10 ">
        <Card img='/euroauto.jpg' text={`project 01`} icon={<RiLoopRightLine />} className='' link='/' />
        <Card img='/puntopago.jpg' text={`project 02`} icon={<RiLoopRightLine />} className='md:mt-20' link='/' />
      </div>
      <div className="cards flex flex-col md:flex-row gap-5 md:gap-10 ">
        <Card img='/riyadh.jpg' text={`project 03`} icon={<RiLoopRightLine />} className='' link='/' />
        <Card img='/kelvin.jpg' text={`project 04`} icon={<RiLoopRightLine />} className='md:mt-20' link='/' />
      </div>
    </section>
  )
}
export default page