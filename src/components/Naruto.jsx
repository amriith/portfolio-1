import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedNaruto = () => {
  const [showCrows, setShowCrows] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 800,
    height: typeof window !== 'undefined' ? window.innerHeight : 600,
  });
  
  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  // Improved crow animation variants with more dynamic paths
  const crowVariants = {
    initial: (i) => {
      const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
      let x, y;
      
      switch(side) {
        case 0: // top
          x = Math.random() * windowSize.width;
          y = -100;
          break;
        case 1: // right
          x = windowSize.width + 100;
          y = Math.random() * windowSize.height;
          break;
        case 2: // bottom
          x = Math.random() * windowSize.width;
          y = windowSize.height + 100;
          break;
        case 3: // left
          x = -100;
          y = Math.random() * windowSize.height;
          break;
      }
      
      return {
        x,
        y,
        scale: 0.5 + Math.random() * 1.5,
        rotate: Math.random() * 360,
        opacity: 0,
      };
    },
    animate: (i) => {
      // Create a zigzag path with multiple points
      const targetX = Math.random() < 0.5 ? -200 : windowSize.width + 200;
      const targetY = Math.random() < 0.5 ? -200 : windowSize.height + 200;
      
      return {
        x: [null, targetX + Math.random() * 300 - 150, targetX],
        y: [null, targetY + Math.random() * 300 - 150, targetY],
        rotate: [null, Math.random() * 720 - 360, Math.random() * 720 - 360],
        scale: [null, 0.8 + Math.random() * 1.2, 0.5],
        opacity: [0, 1, 1, 0],
        transition: {
          duration: 4 + Math.random() * 3,
          ease: ["easeOut", "easeInOut", "easeIn"],
          times: [0, 0.2, 0.8, 1],
          delay: i * 0.05,
        }
      };
    },
  };

  // Generate more crows for a more immersive effect
  const crows = Array.from({ length: 60 }, (_, i) => i);

  // Toggle crow animation
  const handleEyeClick = () => {
    setShowCrows(true);
    // Reset after animation completes
    setTimeout(() => setShowCrows(false), 8000);
  };

  return (
    <>
      

      {/* Eye Button */}
      <button 
        onClick={handleEyeClick}
        className="fixed bottom-10 right-10 w-20 h-20 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform z-50 overflow-hidden"
        style={{ 
          boxShadow: '0 0 10px rgba(255, 0, 0, 0.7), 0 0 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Main red eye background */}
        <div className="w-full h-full bg-red-700 rounded-full flex items-center justify-center relative">
          {/* Inner circle */}
          <div className="w-3/4 h-3/4 rounded-full border-2 border-black opacity-30"></div>
          
          {/* Center black dot */}
          <div className="absolute w-1/4 h-1/4 bg-black rounded-full"></div>
          
          {/* Three tomoe marks */}
          <div className="absolute w-full h-full">
            {/* First tomoe - top */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-7">
              <div className="w-full h-4 bg-black rounded-full"></div>
              <div className="w-2 h-3 bg-black absolute top-3 left-1 rounded-full transform rotate-45"></div>
            </div>
            
            {/* Second tomoe - bottom right */}
            <div className="absolute bottom-3 right-3 transform rotate-120 w-4 h-7">
              <div className="w-full h-4 bg-black rounded-full"></div>
              <div className="w-2 h-3 bg-black absolute top-3 left-1 rounded-full transform rotate-45"></div>
            </div>
            
            {/* Third tomoe - bottom left */}
            <div className="absolute bottom-3 left-3 transform -rotate-120 w-4 h-7">
              <div className="w-full h-4 bg-black rounded-full"></div>
              <div className="w-2 h-3 bg-black absolute top-3 left-1 rounded-full transform rotate-45"></div>
            </div>
          </div>
        </div>
      </button>

      {/* Crow Animation Overlay */}
      <AnimatePresence>
        {showCrows && (
          <>
            {/* Background effect */}
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-80 z-40"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                background: [
                  "rgba(0, 0, 0, 0.8)",
                  "rgba(139, 0, 0, 0.6)",
                  "rgba(0, 0, 0, 0.8)"
                ]
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.8,
                background: {
                  duration: 8,
                  repeat: 1,
                  repeatType: "reverse"
                }
              }}
            >
              {/* Red moon effect */}
              <motion.div
                className="absolute rounded-full bg-red-700"
                initial={{ 
                  top: "10%", 
                  left: "50%", 
                  width: "60px", 
                  height: "60px",
                  x: "-50%",
                  opacity: 0
                }}
                animate={{ 
                  opacity: [0, 0.7, 0.7, 0],
                  width: ["60px", "120px", "120px", "60px"],
                  height: ["60px", "120px", "120px", "60px"],
                }}
                transition={{ duration: 8, times: [0, 0.3, 0.7, 1] }}
              />
              
              {/* Sharingan text */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-600 font-bold text-4xl opacity-0"
                animate={{ 
                  opacity: [0, 0.8, 0, 0.8, 0],
                  scale: [1, 1.2, 1, 1.2, 1]
                }}
                transition={{ duration: 8, times: [0, 0.2, 0.4, 0.6, 1] }}
              >
                TSUKUYOMI
              </motion.div>
            </motion.div>
            
            {/* Crows */}
            {crows.map((i) => (
              <motion.div
                key={i}
                custom={i}
                variants={crowVariants}
                initial="initial"
                animate="animate"
                className="absolute"
                style={{ zIndex: 45 }}
              >
                <svg width="40" height="30" viewBox="0 0 40 30" fill="black">
                  <motion.path 
                    d="M20,0 C25,5 35,10 40,15 C35,20 25,25 20,30 C15,25 5,20 0,15 C5,10 15,5 20,0 Z" 
                    animate={{
                      d: [
                        "M20,0 C25,5 35,10 40,15 C35,20 25,25 20,30 C15,25 5,20 0,15 C5,10 15,5 20,0 Z",
                        "M20,0 C28,8 35,12 40,15 C35,18 28,22 20,30 C12,22 5,18 0,15 C5,12 12,8 20,0 Z",
                        "M20,0 C25,5 35,10 40,15 C35,20 25,25 20,30 C15,25 5,20 0,15 C5,10 15,5 20,0 Z"
                      ]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </svg>
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnimatedNaruto;