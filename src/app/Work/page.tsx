import React from 'react'
import { neueMachina } from '../fonts'
import Card from '@/components/heroPage/Card'

function page() {
  return (
    <div className='min-h-dvh bg-light text-dark dark:bg-dark dark:text-light px-5 md:px-10 pt-20 md:pt-40 pb-10 '>
      <h3 className='tracking-tighter text-sm md:text-lg py-1 px-2 leading-none w-fit rounded-full mb-3 dark:text-dark dark:bg-light bg-dark text-light'>Case studies</h3>
      <h1 className={`${neueMachina.className} tracking-tightest leading-none text-transparent bg-clip-text bg-gradient-to-br from-dark dark:from-light dark:to-depth-dark to-depth-light pb-5 text-4xl md:text-7xl`}>
        Crafting intuitive interfaces that bring dreams to digital reality.
      </h1>
      <div className="cards flex flex-col md:flex-row gap-10 mt-10 ">
        <Card img='/euroauto.jpg' text='project' customClass='' link='/' />
        <Card img='/puntopago.jpg' text='project' customClass='md:mt-40' link='/' />
      </div>
    </div>
  )
}
export default page