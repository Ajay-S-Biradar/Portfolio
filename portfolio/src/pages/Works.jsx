// Works.js
import React from 'react';
import { motion } from 'framer-motion';

const Works = () => {
  return (
    <motion.div
      className='w-[100vw] h-[100vh] flex'
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      Works Page
    </motion.div>
  );
};

export default Works;
