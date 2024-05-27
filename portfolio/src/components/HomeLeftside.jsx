import React from 'react'
import { motion } from 'framer-motion'

const HomeLeftside = () => {
  return (
    <motion.div
      className='bg-black w-3 relative left-[50%]'
      initial={{
        height:0
      }}
      animate={{
        height:[0,"100%",0]
      }}

      transition={{
        duration:.5,
        times:[0,.9,1],
        ease:"easeIn"
      }}
      >
      </motion.div>
  )
}

export default HomeLeftside;