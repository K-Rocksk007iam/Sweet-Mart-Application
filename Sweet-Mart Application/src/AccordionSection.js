import React from 'react'
import { Accordion } from 'flowbite-react'
import { motion } from 'framer-motion';
import { useInView } from "framer-motion";
import { useRef } from "react";

const AccordionSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="bg-white dark:bg-gray-900" ref={ref}>
      <div className="text-center mt-4"
        >
        <motion.h2 
        className="mb-1 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" 
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
        }}>
          Frequently Asked Question (FAQs)
        </motion.h2>
      </div>
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <Accordion>
      <Accordion.Panel>
        <Accordion.Title className='bg-gray-100'>
        What makes your desserts unique?
        </Accordion.Title>
        <Accordion.Content className='bg-white'>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          At Prem Sweet Shop, we pride ourselves on using premium ingredients, blending traditional recipes with innovative techniques, and dedicating meticulous attention to detail. Each dessert is a testament to our commitment to delivering a truly exceptional and memorable sweet experience.</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='bg-gray-100'>
        Do you accommodate special dietary needs?
        </Accordion.Title>
        <Accordion.Content className='bg-white'>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Absolutely! We offer a variety of desserts catering to different dietary preferences, including gluten-free, vegan, and nut-free options. Our goal is to ensure everyone can enjoy the sweetness of our creations.</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='bg-gray-100'>
        How do I place an order for special occasions?
        </Accordion.Title>
        <Accordion.Content className='bg-white'>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Ordering for special occasions is easy! Simply visit our website and explore our customizable options under the 'Special Occasions' tab. You can also contact our friendly team for personalized assistance in creating the perfect sweet ensemble for your event.</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='bg-gray-100'>
        Are your ingredients locally sourced?
        </Accordion.Title>
        <Accordion.Content className='bg-white'>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Yes, whenever possible, we source our ingredients locally to support our community and ensure freshness. We believe in quality and strive to bring you the best flavors while contributing to the sustainability of our region. </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='bg-gray-100'>
        What is your return policy?
        </Accordion.Title>
        <Accordion.Content className='bg-white'>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          We want you to be completely satisfied with your sweet experience. If, for any reason, you are not happy with your purchase, please contact us within 48 hours, and we'll do our best to make it right. Your delight is our priority. </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='bg-gray-100'>
        Can I order online, and what is the delivery process like?
        </Accordion.Title>
        <Accordion.Content className='bg-white'>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Yes, you can conveniently place your order online through our website. Our efficient delivery process ensures that your sweets are carefully packaged and delivered to your doorstep, maintaining the freshness and quality you expect from Prem Sweet Shop.</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='bg-gray-100'>
        Are your desserts suitable for large events or corporate functions?
        </Accordion.Title>
        <Accordion.Content className='bg-white'>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Absolutely! We specialize in catering to events of all sizes. Explore our 'Catering' options on the website, or contact our events team for personalized assistance in creating a delightful sweet experience for your guests.</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='bg-gray-100'>
        Do you offer gift packaging and personalized messages?
        </Accordion.Title>
        <Accordion.Content className='bg-white'>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Yes, we understand the importance of thoughtful gifting. All our desserts are available with elegant gift packaging, and you can add a personalized message during the checkout process. Make your gift extra special with a sweet touch from Prem Sweet Shop.</p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
      </div>
    </div>
  )
}

export default AccordionSection

