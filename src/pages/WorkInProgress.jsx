import React from 'react';
import { motion } from 'framer-motion';

export default function ApologeticBow() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-indigo-900 to-gray-900 p-4">
      <div className="relative mb-8">
        {/* Character Container */}
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ y: 0 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          
          {/* Character */}
          <div className="relative">
            {/* Head */}
            <motion.div
              className="relative w-20 h-20 bg-amber-200 rounded-full border-2 border-gray-800"
              initial={{ rotateX: 0 }}
              animate={{ rotateX: [0, 60, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                repeatType: "loop",
                times: [0, 0.3, 1],
                ease: "easeInOut"
              }}
            >
              {/* Eyes - closed during bow */}
              <motion.div 
                className="absolute top-8 left-4 w-3 h-1 bg-gray-800 rounded-full"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  repeatType: "loop",
                  times: [0, 0.25, 1],
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute top-8 right-4 w-3 h-1 bg-gray-800 rounded-full"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  repeatType: "loop",
                  times: [0, 0.25, 1],
                  ease: "easeInOut"
                }}
              />
              
              {/* Mouth - changes to apologetic expression */}
              <motion.div 
                className="absolute bottom-5 left-1/2 w-6 h-2 bg-red-400 rounded-full -translate-x-1/2"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ 
                  scale: [1, 0.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  repeatType: "loop",
                  times: [0, 0.25, 1],
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Body with traditional Japanese clothing */}
            <motion.div
              className="w-32 h-40 bg-indigo-700 rounded-t-3xl border-2 border-gray-800 mt-2 relative overflow-hidden"
              initial={{ rotateX: 0 }}
              animate={{ rotateX: [0, 30, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                repeatType: "loop",
                times: [0, 0.3, 1],
                ease: "easeInOut"
              }}
            >
              {/* Kimono design elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 w-full h-10 bg-indigo-800" />
                <div className="absolute bottom-0 w-full h-8 bg-indigo-900" />
              </div>
              
              {/* Obi (belt) */}
              <div className="absolute top-14 w-full h-8 bg-red-700 border-t border-b border-gray-800" />
            </motion.div>

            {/* Arms that bow */}
            <motion.div
              className="absolute top-24 left-1 w-8 h-24 bg-indigo-700 border-2 border-gray-800 rounded-full origin-top"
              initial={{ rotate: -10 }}
              animate={{ rotate: [-10, 30, -10] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                repeatType: "loop",
                times: [0, 0.3, 1],
                ease: "easeInOut"
              }}
            >
              {/* Hand */}
              <div className="absolute bottom-0 left-1/2 w-6 h-6 bg-amber-200 rounded-full border-2 border-gray-800 -translate-x-1/2" />
            </motion.div>

            <motion.div
              className="absolute top-24 right-1 w-8 h-24 bg-indigo-700 border-2 border-gray-800 rounded-full origin-top"
              initial={{ rotate: 10 }}
              animate={{ rotate: [10, -30, 10] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                repeatType: "loop",
                times: [0, 0.3, 1],
                ease: "easeInOut"
              }}
            >
              {/* Hand */}
              <div className="absolute bottom-0 left-1/2 w-6 h-6 bg-amber-200 rounded-full border-2 border-gray-800 -translate-x-1/2" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Shadow that moves with the bow */}
      <motion.div
        className="w-28 h-3 bg-black bg-opacity-30 rounded-full"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: [1, 1.2, 1] }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          repeatType: "loop",
          times: [0, 0.3, 1],
          ease: "easeInOut"
        }}
      />

      {/* Japanese text with animation */}
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.h2 
          className="text-red-400 text-xl font-bold mb-2"
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
    
        </motion.h2>
        <motion.p 
          className="text-gray-300 text-lg"
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Moushiwake gozaimasen
        </motion.p>
        <motion.p 
          className="mt-4 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Work in progress. Expected to finish by 12th March 2025 4:00 PM
        </motion.p>
      </motion.div>
    </div>
  );
}