"use client"

import Image from "next/image";
import React , {useEffect} from 'react';
import {motion} from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin} from "react-icons/bs";
import { HiDownload} from "react-icons/hi"
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const {
    setActiveSection,
    setTimeOfLastClick
  } = useActiveSectionContext();
  
  return (
    <section ref={ref} id="home" className="mb-28 max-w-{50rem} text-center scroll-mt-[100rem]">
      <div className='flex items-center justify-center'>
        <div className="relative">
            <motion.div
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1}}
                transition={{
                    type: "tween",
                    duration: 0.2
                }}
              >

                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
                alt="Daniel Portrait"
                width="192"
                height="192"
                quality="95"
                priority={true} 
                className="h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl"
                />
            </motion.div>

            <motion.span className="absolute text-4xl bottom-0 right-0" 
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1}}
                transition={{
                    type: "spring",
                    stiffness: 125,
                    delay:0.1,
                    duration: 0.7
                }}>
                👋
            </motion.span>

        </div>
      </div>

      <motion.h1 className="group mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]
      sm:text-4xl max-w-[60rem] "
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      >
        <span className="font-bold">Hello, I'm Daniel. </span> 
        I'm a student University of Calgary{" "}
        <span className="font-bold">currently studying Software Engineering.</span>
      </motion.h1>

      <motion.div className="flex flex-col sm:flex-row justify-center space-x-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
            transition={{
              delay: 0.1
            }}
      >
        <Link href="#contact" 
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2
          rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
          transition" onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now())
          }}>
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
        </Link>

        <a className="group bg-white text-gray-900 px-7 py-3 flex items-center gap-2
          rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white active:scale-105 cursor-pointer
          transition border border-black/10" href="/Daniel Fatokun - Resume.pdf" download={true}>
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition "/>
        </a>

        <a className="bg-white p-4 text-gray-900 flex items-center gap-2
        rounded-full focus:scale-110 hover:scale-110 hover:bg-white active:scale-105 cursor-pointer
        transition border border-black/10" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank">
          <BsLinkedin />
        </a>

        <a className="bg-white p-4 text-gray-900 flex items-center gap-2
        text-{1.35rem} rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:bg-white hover:text-gray-950 active:scale-105 cursor-pointer
        transition border border-black/10" href="https://github.com/danielftn?tab=overview&from=2024-08-01&to=2024-08-29" target="_blank">
          <BsGithub />
        </a>
      </motion.div>
    </section>
  )
}
