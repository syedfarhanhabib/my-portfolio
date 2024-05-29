'use client';
import React from 'react'
import { motion } from 'framer-motion';
import { neueMachina } from '../fonts';
import Text from '@/components/Text';
import Skills from '@/components/aboutPage/Skills';

function page() {
    return (
        <section className='min-h-dvh bg-light text-dark dark:bg-dark dark:text-light px-5 md:px-10 pt-20 md:pt-40 '>
            <Text className=''>About</Text>
            <p className='font-light tracking-tighter md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus totam alias repudiandae corrupti dolor molestias similique repellat suscipit? Dolor sequi, dolorum alias nulla iusto animi laudantium ipsam optio. Maiores, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facilis, officia ipsam iste rem magnam?</p>
            <Skills />
        </section>
    )
}

export default page