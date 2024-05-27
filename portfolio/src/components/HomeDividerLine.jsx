import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const HomeDividerLine = () => {
    const navigate = useNavigate();
    
    const handleClick = ()=>{
        navigate('/works');
    }
  return (
    <motion.div 
            className='flex bg-black w-full'
            style={{ transformOrigin: 'right' }}
            initial={{ scaleX:0 }}
            animate={{ scaleX:[0,0,1] }}
            transition={{ duration: 1, ease: 'easeIn' , times:[0,.5,1]}}
          >
            <motion.div className='flex items-center justify-end w-full h-full'
              initial={{
                scaleY:0
              }}
              animate={{
                scaleY:[0,0,1]
              }}
              transition={{
                duration:2,
                ease:"easeIn",
                times:[0,.5,1]
              }}
            >
              <div className='flex'>
                <div className='flex h-96 gap-3 flex-col justify-center items-start border border-r-0 border-[#fcf6f4] text-[#fcf6f4] p-6'>
                  <div className='m-1 p-2 text-7xl font-extrabold font-serif'>Hoi</div>
                  <div className='m-1 p-2 text-5xl font-semibold  font-serif'>I'm Ajay</div>
                  <div className='m-1 p-2 text-4xl font-semibold text-gray-400  font-serif'>I'm good at development.</div>
                </div>
              </div>
            </motion.div>
            <motion.div
            onClick={handleClick}
              className='absolute top-[45%] text-xl font-medium p-3 text-[#fcf6f4] cursor-pointer'
              initial={{
                rotate: -90 ,
                scaleX:0
              }}
              whileHover={{
                scale: 1.2,
                transition:{duration:.4}
              }}
              whileTap={{
                rotate: -95, 
                scale: 0.9,
                transition:{duration:.4}
              }}
              animate={{
                scaleX:[0,0,1],
                transition:{
                  duration:2
                }
              }}
              transition={{
                ease: "easeInOut",
                times:[0,.5,1]
              }}
            >
              Works
            </motion.div>
      </motion.div>
  )
}

export default HomeDividerLine