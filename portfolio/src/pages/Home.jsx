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
                <div className='flex h-96 gap-3 flex-col justify-center items-start border border-r-0 border-[#fcf6f4] text-[#fcf6f4] p-6'>
                  <div className='m-1 p-2 text-7xl font-extrabold font-serif'>Hoi</div>
                  <div className='m-1 p-2 text-5xl font-semibold  font-serif'>I'm Ajay</div>
                  <div className='m-1 p-2 text-4xl font-semibold text-gray-400  font-serif'>I'm good at development.</div>
                </div>
              </div>
            </motion.div>
            <motion.div
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
              Work
            </motion.div>
      </motion.div>
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
            <div className='flex h-96 w-[450px] border-l-0 border border-black'>
              <img src="avatar.png" alt="" />
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
      <motion.div className='absolute w-full bottom-0 flex justify-evenly text-xl font-medium origin-bottom'
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
        <motion.div className='text-[#fcf6f4] m-3 p-3 cursor-pointer'
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
    </div>
  )
}

export default Home