'use client';
import React from 'react'
import Text from '@/components/ui/text';
import Title from '@/components/ui/title';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { sendMail } from '@/utils/sendMail';

function page() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: .4,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      viewport={{ once: true }}
      className='h-dvh bg-light text-dark dark:bg-dark dark:text-light px-5 md:px-10 pt-20'>
      <Title>Contact</Title>
      <Text className=''>Get in touch</Text>
      <form className='mt-10 flex flex-col gap-5' action={sendMail}>
        <div className='flex flex-col md:flex-row gap-5' >
          <input
            name='senderName'
            required
            maxLength={500}
            placeholder='Your name'
            className='p-3 w-full md:w-1/2 rounded-lg border border-depth-light dark:border-depth-dark bg-transparent'
            type="text" />
          <input
            name='senderEmail'
            required
            maxLength={500}
            placeholder='Your email'
            className='p-3 w-full md:w-1/2 rounded-lg border border-depth-light dark:border-depth-dark bg-transparent'
            type="email" />
        </div>

        <textarea
          name='message'
          required
          maxLength={500}
          placeholder='Your message'
          className='p-3 min-h-44 rounded-lg border border-depth-light dark:border-depth-dark bg-transparent' />
        <button
          type='submit'
          className='group w-fit active:scale-75 hover:scale-110 overflow-hidden relative after:scale-0 after:opacity-0 hover:after:opacity-100 after:overflow-hidden after:left-0 after:bottom-0 after:absolute after:w-full after:h-full after:dark:bg-depth-dark after:bg-depth-light hover:after:scale-100  p-3 duration-300 after:duration-300 hover:after:rounded-full after:-z-10 z-20 border dark:border-depth-dark border-depth-light tracking-tighter leading-none rounded-full flex items-center gap-2' >
          Submit <FaPaperPlane className='group-hover:-translate-y-1' />
        </button>
      </form>
    </motion.section>
  )
}

export default page