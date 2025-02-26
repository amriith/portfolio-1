import { motion } from "framer-motion";

export default function ApologeticBow() {
  return (
    <>
    <div className="flex justify-center "> 
    
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1, y: 10 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="relative flex flex-col items-center text-white"
      >
        {/* Head */}
        <motion.div
          className="w-16 h-16 bg-yellow-300 rounded-full border-4 border-black"
          initial={{ rotate: 0 }}
          animate={{ rotate: -15 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>

        {/* Body */}
        <div className="w-20 h-28 bg-blue-600 mt-2 rounded-lg border-2 border-black"></div>

        {/* Hands */}
        <motion.div
          className="absolute top-12 left-6 w-6 h-16 bg-yellow-300 border-2 border-black rounded-lg"
          initial={{ rotate: 20 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>

        <motion.div
          className="absolute top-12 right-6 w-6 h-16 bg-yellow-300 border-2 border-black rounded-lg"
          initial={{ rotate: -20 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
      </motion.div>

      <div className=" flex justify-center  text-white mt-4 text-2xl "> Apologies , Work in progress. Expected to finish by 12th March 2025 4:00 PM </div>
     
    </div>

    </div>
    
    </>  
  );
}