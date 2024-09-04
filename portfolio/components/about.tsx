"use client";

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');



  return (
    <motion.section ref={ref} className='mb-28 max-w[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        transition={{ delay: 0.175}}
        id="about"
    >
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3 max-w-[50rem]'>
          Highly-driven Software Engineering student with a growing knowledge in programming languages and frameworks like{" "}
          <span className='font-bold'>C, C++, Java, React, Node.js, Tailwind, JavaScript, Typescript and SQL.</span>{" "}
          Throughout my studies, I've applied these skills to various projects, particularly in <span className='font-bold'>back-end</span>{" "}
          and <span className='font-bold'>front-end development.</span>{" "} 
          Currently, I am focusing on deepning my proficiency in <span className='font-bold'>C and C++</span>{" "} because of my growing interest in <span className='font-bold'>Embedded Systems</span>{" "} 
          and the oppotunity to create efficient software that interacts directly with hardware.
        </p>
        <p>

        </p>
    </motion.section>
  )
}
