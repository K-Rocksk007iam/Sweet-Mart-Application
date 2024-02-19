import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import img1 from "./image1.svg"
import img2 from "./image2.svg"

const CTASection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section className="bg-white dark:bg-gray-900" ref={ref}>
      <div className="text-center mt-4"
        >
        <motion.h2 
        className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" 
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
        }}>
          Why US
        </motion.h2>
      </div>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <motion.div 
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }} 
            className="mt-4 md:mt-0">
          <h4 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          "Crafting Sweet Memories"
          </h4>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          "At Prem Sweet Shop , we go beyond creating desserts; we craft sweet memories for you to savor. Our passion for quality ingredients, artisanal craftsmanship, and personalized service ensures that every visit is a delightful experience. Join us in making moments sweeter and memories last a lifetime."
          </p>
          <a
            href="#"
            className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </motion.div>
        <motion.img
          className=" w-72  animate-bounce dark:hidden"
          src={img1}
          alt="Reach World Image"
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }} 
        />
      </div>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <motion.div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }} 
        className="mt-4 md:mt-0 order-last">
          <h4 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          "The Sweetest Commitment"
          </h4>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          "At Prem Sweet Shop, our commitment to sweetness goes beyond our delectable treats. We pride ourselves on using only the finest ingredients, embracing innovation, and upholding the highest standards of quality. Discover a sweet journey with us, where every bite is a testament to our dedication to bringing you the very best."</p>
          <a
            href="#"
            className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </motion.div>
        <motion.img
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }} 
          className="w-72 order-first animate-bounce dark:hidden"
          src={img2}
          alt="dashboard image"
        />
        
      </div>
    </section>
  );
};

export default CTASection;
