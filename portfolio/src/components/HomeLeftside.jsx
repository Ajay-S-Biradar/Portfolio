import React from 'react'
import { motion } from 'framer-motion'

const HomeLeftside = () => {
  return (
    <>
    <motion.div
      className='bg-black hidden md:flex w-3 relative left-[50%]'
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
      <motion.div
      className='bg-black h-1 md:hidden absolute md:relative top-[50%]'
      initial={{
        width:0
      }}
      animate={{
        width:[0,"100%",0]
      }}

      transition={{
        duration:.5,
        times:[0,.9,1],
        ease:"easeIn"
      }}
      >
      </motion.div>
      </>
  )
}

export default HomeLeftside;