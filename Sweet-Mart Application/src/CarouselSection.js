import { Carousel } from 'flowbite-react';
import { motion } from 'framer-motion';
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CarouselSection() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className='bg-white dark:bg-gray-900 p-4' ref={ref}>
      <div className="text-center mt-4"
        >
        <motion.h2 
        className="mb-1 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" 
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
        }}>
          Our Images
        </motion.h2>
      </div>
        <div className='mx-auto w-full max-w-screen-xl py-2 lg:py-4'>
            <Carousel className='w-full h-56 md:h-80 rounded-lg lg:h-96 p-1'>
                <motion.img className='bg-auto' src="https://images.unsplash.com/photo-1609540969455-ad5ea19be121?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwc3dlZXR8ZW58MHx8MHx8fDA%3D" alt="..."/>
                <motion.img className='bg-auto'  src="https://images.unsplash.com/photo-1590671909091-43ff144014fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwc3dlZXR8ZW58MHx8MHx8fDA%3D" alt="..."/>
                <motion.img className='bg-auto'  src="https://images.unsplash.com/photo-1543773495-2cd9248a5bda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMHN3ZWV0fGVufDB8fDB8fHww" alt="..."/>
                <motion.img className='bg-auto'  src="https://images.unsplash.com/photo-1571741443170-97e080e5b808?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMHN3ZWV0fGVufDB8fDB8fHww" alt="..."/>
                <motion.img className='bg-auto'  src="https://images.unsplash.com/photo-1638537691858-4fd368bb4fd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGluZGlhbiUyMHN3ZWV0fGVufDB8fDB8fHww" alt="..."/>
            </Carousel>
        </div>
    </div>
  )
}


