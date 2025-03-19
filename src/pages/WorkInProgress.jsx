import React from 'react'; 
import { motion } from 'framer-motion';
import AnimatedNaruto from '../components/Naruto';
import "../styles/styles.css"

export default function ApologeticBow() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-indigo-900 to-gray-900 p-4 overflow-hidden">
      {/* Enhanced surreal background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Small floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-white bg-opacity-10"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -1000],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 20,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Larger glowing orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 40 + 20,
              height: Math.random() * 40 + 20,
              background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: Math.random() * 20 + 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Geometric shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute border border-indigo-300 border-opacity-20"
            style={{
              width: Math.random() * 60 + 40,
              height: Math.random() * 60 + 40,
              borderRadius: i % 2 === 0 ? '0%' : '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: Math.random() * 40 + 60,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Light rays */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-screen"
          style={{
            background: 'radial-gradient(circle, rgba(120,120,255,0.05) 0%, rgba(0,0,0,0) 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Japanese characters */}
        {['申', '訳', 'ご','申', '訳', 'ご','申', '訳', 'ご','申', '訳', 'ご', 'ざ','🕊', 'い', 'ま', 'せ', 'ん','🕊','🕊','🕊','🕊'].map((char, i) => (
          <motion.div
            key={`char-${i}`}
            className="absolute text-indigo-200 text-opacity-10 text-4xl font-bold"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.1, 0.05],
              rotate: [0, Math.random() * 20 - 10, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            {char}
          </motion.div>
        ))}
        
        {/* Floating crows (Itachi's signature) */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`crow-${i}`}
            className="absolute text-black text-opacity-70 text-xl"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 50 + 5}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, Math.random() * 40 - 20],
              opacity: [0.7, 0.3, 0.7]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            ✦                                                                                                        
          </motion.div>
        ))}
      </div>

      <div className="relative mb-8 z-10">
        {/* Character Container */}
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ y: 0 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          {/* Itachi Character */}
          <div className="relative">
            {/* Head */}
            <motion.div
              className="relative mx-auto w-24 h-28 bg-gradient-to-b from-[#f2d1b3] to-[#ccab92] rounded-full border-2 border-gray-800 shadow-lg"
              initial={{ rotateX: 0 }}
              animate={{ rotateX: [0, 10, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                repeatType: "loop",
                times: [0, 0.3, 1],
                ease: "easeInOut"
              }}
            >
              {/* Hair */}
              <div className="absolute -top-2 -left-2 -right-2 h-20 bg-gradient-to-b from-[#4b4c57] to-[#2f2f3f] rounded-t-full overflow-hidden">
                <div className="absolute top-0 left-1/2 w-1 h-24 bg-[#090909] -translate-x-1/2" />
                <div className="absolute top-0 left-1/3 w-1 h-24 bg-[#090909]" />
                <div className="absolute top-0 right-1/3 w-1 h-24 bg-[#090909]" />
              </div>
              
              {/* Side bangs */}
              <div className="absolute top-0 -left-1 w-6 h-24 bg-gradient-to-b from-[#4b4c57] to-[#2f2f3f] rounded-l-full" />
              <div className="absolute top-0 -right-1 w-6 h-24 bg-gradient-to-b from-[#4b4c57] to-[#2f2f3f] rounded-r-full" />
              
              {/* Headband */}
              <div className="absolute top-4 left-1/2 w-28 h-5 bg-[#444a69] -translate-x-1/2 border border-[#090909]">
                <div className="absolute left-1/2 top-1/2 w-8 h-4 bg-[#b7b7c0] -translate-x-1/2 -translate-y-1/2 rounded-sm border border-[#444444]">
                  <div className="absolute left-1/2 top-1/2 w-5 h-1 bg-[#444444] -translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute left-1/2 top-1/2 w-1 h-3 bg-[#444444] -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
              
              {/* Sharingan Eyes */}
              <motion.div 
                className="absolute top-11 left-1/2 -translate-x-8 w-4 h-4 bg-red-600 rounded-full"
                initial={{ scaleY: 1 }}
                animate={{ 
                  backgroundColor: ['#973740', '#4b1b20', '#973740'],
                  boxShadow: ['0 0 0px #973740', '0 0 5px #973740', '0 0 0px #973740']
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  repeatType: "loop",
                  times: [0, 0.5, 1],
                  ease: "easeInOut"
                }}
              >
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-black rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-red-600 rounded-full -translate-x-1/2 -translate-y-1/2" />
                {/* Tomoe patterns */}
                <div className="absolute top-0 left-1/2 w-1 h-1.5 bg-black rounded-full -translate-x-1/2 rotate-45 origin-bottom" />
                <div className="absolute bottom-0 left-0 w-1 h-1.5 bg-black rounded-full rotate-45 origin-top-right" />
                <div className="absolute bottom-0 right-0 w-1 h-1.5 bg-black rounded-full -rotate-45 origin-top-left" />
              </motion.div>
              <motion.div 
                className="absolute top-11 left-1/2 translate-x-8 w-4 h-4 bg-red-600 rounded-full"
                initial={{ scaleY: 1 }}
                animate={{ 
                  backgroundColor: ['#973740', '#4b1b20', '#973740'],
                  boxShadow: ['0 0 0px #973740', '0 0 5px #973740', '0 0 0px #973740']
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  repeatType: "loop",
                  times: [0, 0.5, 1],
                  ease: "easeInOut"
                }}
              >
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-black rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-red-600 rounded-full -translate-x-1/2 -translate-y-1/2" />
                {/* Tomoe patterns */}
                <div className="absolute top-0 left-1/2 w-1 h-1.5 bg-black rounded-full -translate-x-1/2 rotate-45 origin-bottom" />
                <div className="absolute bottom-0 left-0 w-1 h-1.5 bg-black rounded-full rotate-45 origin-top-right" />
                <div className="absolute bottom-0 right-0 w-1 h-1.5 bg-black rounded-full -rotate-45 origin-top-left" />
              </motion.div>
              
              {/* Facial lines */}
              <div className="absolute top-11 left-2 w-0.5 h-10 bg-[#444444] transform rotate-5" />
              <div className="absolute top-11 right-2 w-0.5 h-10 bg-[#444444] transform -rotate-5" />
              
              {/* Mouth */}
              <motion.div 
                className="absolute bottom-6 left-1/2 w-4 h-0.5 bg-[#444444] -translate-x-1/2"
                animate={{ 
                  width: [4, 6, 4]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Akatsuki Cloak */}
            <motion.div
              className="w-48 h-60 bg-[#090909] rounded-t-3xl border-2 border-gray-800 mt-2 relative overflow-hidden shadow-md"
              initial={{ rotateX: 0 }}
              animate={{ rotateX: [0, 5, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                repeatType: "loop",
                times: [0, 0.3, 1],
                ease: "easeInOut"
              }}
            >
              {/* Cloak design */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 w-full h-full bg-[#090909]" />
                
                {/* Red clouds pattern */}
                <div className="absolute top-8 left-6 w-10 h-5 bg-[#973740] rounded-full opacity-90" />
                <div className="absolute top-24 left-8 w-10 h-5 bg-[#973740] rounded-full opacity-90" />
                <div className="absolute top-40 left-5 w-10 h-5 bg-[#973740] rounded-full opacity-90" />
                
                <div className="absolute top-8 right-6 w-10 h-5 bg-[#973740] rounded-full opacity-90" />
                <div className="absolute top-24 right-8 w-10 h-5 bg-[#973740] rounded-full opacity-90" />
                <div className="absolute top-40 right-5 w-10 h-5 bg-[#973740] rounded-full opacity-90" />
                
                {/* Cloud details */}
                <div className="absolute top-8 left-6 w-10 h-5 border border-white border-opacity-30 rounded-full" />
                <div className="absolute top-24 left-8 w-10 h-5 border border-white border-opacity-30 rounded-full" />
                <div className="absolute top-40 left-5 w-10 h-5 border border-white border-opacity-30 rounded-full" />
                
                <div className="absolute top-8 right-6 w-10 h-5 border border-white border-opacity-30 rounded-full" />
                <div className="absolute top-24 right-8 w-10 h-5 border border-white border-opacity-30 rounded-full" />
                <div className="absolute top-40 right-5 w-10 h-5 border border-white border-opacity-30 rounded-full" />
              </div>
              
              {/* Cloak collar */}
              <div className="absolute top-0 w-full h-14 bg-[#363845] flex items-center justify-center">
                <div className="w-8 h-14 bg-[#444a69] absolute left-1/2 -translate-x-1/2" />
              </div>
              
              {/* Cloak shoulders */}
              <div className="absolute top-14 left-0 w-full h-10 overflow-hidden">
                <div className="absolute left-0 w-24 h-20 bg-[#363845] rounded-tr-full"></div>
                <div className="absolute right-0 w-24 h-20 bg-[#363845] rounded-tl-full"></div>
              </div>
            </motion.div>

            {/* Arms */}
            <motion.div
              className="absolute top-28 left-0 w-8 h-40 bg-[#090909] border border-gray-800 rounded-full origin-top shadow-md"
              initial={{ rotate: -10 }}
              animate={{ rotate: [-10, 0, -10] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                repeatType: "loop",
                times: [0, 0.5, 1],
                ease: "easeInOut"
              }}
            >
              {/* Hand */}
              <div className="absolute bottom-0 left-1/2 w-7 h-7 bg-[#ccab92] rounded-full border border-gray-800 -translate-x-1/2" />
            </motion.div>

            <motion.div
              className="absolute top-28 right-0 w-8 h-40 bg-[#090909] border border-gray-800 rounded-full origin-top shadow-md"
              initial={{ rotate: 10 }}
              animate={{ rotate: [10, 0, 10] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                repeatType: "loop",
                times: [0, 0.5, 1],
                ease: "easeInOut"
              }}
            >
              {/* Hand */}
              <div className="absolute bottom-0 left-1/2 w-7 h-7 bg-[#ccab92] rounded-full border border-gray-800 -translate-x-1/2" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Shadow that moves with the character */}
      <motion.div
        className="w-32 h-3 bg-black bg-opacity-30 rounded-full blur-sm"
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
        className="mt-8 text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.h2 
          className="text-red-600 text-2xl font-bold mb-2"
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          申し訳ございません
        </motion.h2>
        <motion.p 
          className="text-gray-300 text-xl font-medium"
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
          Work in progress. Expected to finish by 18th March 2025 4:00 PM
        </motion.p>
        
        {/* Progress indicator */}
        <motion.div 
          className="mt-6 w-130 h-2 bg-gray-800 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-red-600 to-red-400"
            initial={{ width: "0%" }}
            animate={{ width: "45%" }}
            transition={{ delay: 2, duration: 2, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>
<AnimatedNaruto/>
    </div>
  );
}
