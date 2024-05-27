import { motion } from 'framer-motion'
import React from 'react'

const HomeRightside = () => {
  return (
    <div className='flex bg-[#fcf6f4] w-full'>
        <motion.div className='flex items-center justify-start w-full h-full'
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
            <div className='flex h-96 w-[450px] border-l-0 border border-black relative'>
              <motion.img className='absolute bottom-0' src="avatar.png" alt="" 
                initial={{
                  scale:0
                }}
                animate={{
                  scale:[0,0,1]
                }}
                transition={{
                  times:[0,.7,1],
                  duration:2,
                  ease:"easeInOut"
                }}
              />
            </div>
          </div>
          </motion.div>
          <motion.div className='absolute right-0 top-[45%] text-xl font-medium p-3 text-black cursor-pointer'
          initial={{
            rotate: 90 ,
            scaleX:0
          }}
          whileHover={{
            scale: 1.2,
            transition:{duration:.4}
          }}
          whileTap={{
            rotate: 95, 
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
            Say Hii..
          </motion.div>
      </div>
  )
}

export default HomeRightside