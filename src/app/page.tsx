'use client';
import { TabsSection } from '@/components/heroPage/tabSection';
import { neueMachina } from './fonts';
import { LampSection } from '@/components/heroPage/LampSection';
import { AnimatedPinDemo } from '@/components/heroPage/3d-pinSection';
import Image from 'next/image';
import Button from '@/components/button';
import { motion, easeOut } from 'framer-motion';
import Text from '@/components/text';

export default function Home() {
  return (
    <>
      <section className="hero w-full overflow-hidden min-h-dvh bg-light text-dark dark:bg-dark dark:text-light px-10 relative pt-40 flex flex-col justify-between">
        <Image src={"/hero.png"} width={600} height={100} alt='' className='md:hdden absolute right-0 bottom-0 rotate-90 mix-blend-hard-light' />
        <Text className=''>Multidisciplinary <span className='text-yellow'>developer</span> focusing on digital experiences.</Text>
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%", }}
            whileInView={{ y: "0%", }}
            transition={{
              duration: .4,
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className="btm font-light flex flex-col md:flex-row gap-3 items-center justify-between tracking-tightest w-full py-5 border-t dark:border-depth-dark border-depth-light">
            <h3>For public and private companies</h3>
            <h3>From the first pitch to IPO</h3>
            <Button link='/' text='Start the project' customClass='' />
          </motion.div>
        </div>

      </section>
      <section className="projects z-10 w-full min-h-dvh p-10 bg-light text-dark dark:bg-dark dark:text-light">
        <TabsSection />
      </section>
      <section className="lampsection w-full min-h-dvh">
        <LampSection />
      </section>
      {/* <section className="pin-card w-full min-h-dvh">
        <AnimatedPinDemo />
      </section> */}
    </>
  );
}
