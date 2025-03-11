import React from 'react';
import { motion } from 'framer-motion';

const AnimatedNaruto = () => {
  // Define a running animation that moves the character horizontally
  // while adding a slight vertical bounce for a running effect.
  const runningAnimation = {
    x: [0, 150, 300, 150, 0],
    y: [0, -10, 0, 10, 0],
    transition: {
      duration: 3, // total duration of one run cycle
      ease: 'easeInOut',
      repeat: Infinity,
    },
  };

  return (
    <motion.div
      className="relative w-16 h-16"
      animate={runningAnimation}
      initial={{ x: 0, y: 0 }}
    >
      {/* Simplified Naruto representation */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center">
        {/* Head */}
        <div className="relative w-12 h-12 bg-yellow-300 rounded-full border-2 border-black flex items-center justify-center">
          {/* Headband */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-10 h-2 bg-blue-600"></div>
        </div>
        {/* Body */}
        <div className="w-8 h-8 bg-orange-500 mt-1 border border-black rounded"></div>
      </div>
    </motion.div>
  );
};

export default AnimatedNaruto;