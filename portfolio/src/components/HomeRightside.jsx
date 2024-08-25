import { motion } from 'framer-motion'
import React from 'react'
import { useMediaQuery } from 'react-responsive';

const HomeRightside = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className='flex h-full bg-[#fcf6f4] w-full'>
        <motion.div className='flex items-start md:items-center justify-center md:justify-start w-full h-full origin-top md:origin-center'
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
            <div className='flex w-60 h-60 md:h-96 md:w-[450px] border-t-0 md:border-t-2 md:border-l-0 border-2 border-black relative'>
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
          <motion.div className='absolute z-20 right-0 top-[47%] text-lg md:text-xl font-medium md:p-3 text-red-300 md:text-black cursor-pointer'
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
            <span className='absolute z-0 text-xs text-black right-0 top-[45%] blur-sm'>Say Hii..</span>
          </motion.div>
      </div>
  )
}

export default HomeRightside