import React from 'react'
import Experience from '@/components/aboutPage/experience'
import Title from '@/components/ui/title'

const ExpSection = () => {
    return (
        <section className='relative h-full w-full'>
            <Title className=''>Experience</Title>
            <Experience />
            <div className="line absolute w-[.5px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full bg-depth-light dark:bg-depth-dark">

            </div>
        </section>
    )
}

export default ExpSection