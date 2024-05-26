import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className='w-[100hw] h-[100vh] flex'>
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
                <div className='flex h-96 gap-3 flex-col justify-center items-start border border-[#fcf6f4] text-[#fcf6f4] p-6'>
                  <div className='m-1 p-2 text-7xl font-extrabold font-serif'>Hoi</div>
                  <div className='m-1 p-2 text-5xl font-semibold  font-serif'>I'm Ajay</div>
                  <div className='m-1 p-2 text-4xl font-semibold text-gray-400  font-serif'>I'm good at development.</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        <div className='flex bg-[#fcf6f4] w-full'>

        </div>
    </div>
  )
}

export default Home