'use client';
import React from 'react'
import { motion } from 'framer-motion';
import { neueMachina } from '../fonts';
import Text from '@/components/Text';

function page() {
    return (
        <section className='min-h-dvh bg-light text-dark dark:bg-dark dark:text-light px-5 md:px-10 pt-20 md:pt-40 '>
            <Text className=''>About</Text>
        </section>
    )
}

export default page