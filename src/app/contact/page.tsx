import React from 'react'
import { neueMachina } from '../fonts'

function page() {
  return (
    <section className='min-h-dvh bg-light text-dark dark:bg-dark dark:text-light px-5 md:px-10 pt-20 md:pt-40 '>
      <h1 className={`${neueMachina.className} tracking-tightest leading-none text-transparent bg-clip-text bg-gradient-to-br from-dark dark:from-light dark:to-depth-dark to-depth-light text-4xl md:text-7xl `}>Get in touch</h1>
    </section>
  )
}

export default page