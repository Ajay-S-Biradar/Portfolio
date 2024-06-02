import { motion } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeBottomLinks = () => {
    const navigate = useNavigate();
    const handleSkills = ()=>{
        navigate('/skills');
    }
    const handleAbout = ()=>{
        navigate('/aboutme');
    }
  return (
    <motion.div className='absolute w-full bottom-0 flex justify-evenly text-lg md:text-xl font-medium origin-bottom'
      initial={{
        scaleY:0,
      }}
      animate={{
        scaleY:[0,0,1]
      }}
      transition={{
        duration:1.5,
        times:[0,.5,1]
      }}
      >
        <motion.div className='text-[#000000] md:text-[#fcf6f4] m-3 p-3 cursor-pointer'
        onClick={handleSkills}
        whileHover={{
          scale:1.2
        }}
        whileTap={{
          rotate:"5deg",
          scale:.9
        }}
        transition={{
          ease:"easeInOut"
        }}
        >
          My Skills
        </motion.div>
        <motion.div className='m-3 p-3 cursor-pointer'
        onClick={handleAbout}
        whileHover={{
          scale:1.2
        }}
        whileTap={{
          rotate:"5deg",
          scale:.9
        }}
        transition={{
          ease:"easeInOut"
        }}
        >
          About Me
        </motion.div>
      </motion.div>
  )
}

export default HomeBottomLinks