import React from "react";
import { motion } from 'framer-motion';


const VideoSection = () => {

  return (
    <section className="bg-gray-100 dark:bg-gray-900" >
      
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            "Sweet Symphony Unveiled"
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
            "Step into the enchanting world of Prem Sweet Shop with our featured video, 'Sweet Symphony Unveiled.' Immerse yourself in the artistry and passion behind our exquisite desserts as we take you on a journey through the making of our sweet masterpieces. Press play and discover the magic that unfolds in every delicious creation at Prem Sweet Shop."
            </p>
          </motion.div
          >
          <motion.div>
          <iframe style={{borderRadius:"10px"}} className=" w-full h-56 md:h-72 lg:h-80" src="https://www.youtube.com/embed/IP6nHdIHg2M?si=8O6c003adba69oV1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
