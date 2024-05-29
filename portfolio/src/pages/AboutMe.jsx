import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const AboutMe = () => {
  const [hi,setHi] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setHi(false);
    }, 2000);
  },[])

  const handleClick=()=>{
    if(hi) return;
    setHi(true);
    setTimeout(() => {
      setHi(false);
    }, 3000);
  }

  return (
    <div className='bg-black h-[100vh] text-[#fcf6f4] flex justify-center items-center gap-3' >
      <motion.div className='relative flex h-2/3 w-1/2 flex-col  justify-center px-10 gap-6 origin-top'>
        {/* the line animation */}
        <motion.div className='absolute top-0 right-0 w-full h-1 bg-[#fcf6f4] origin-right'
        initial={{
          scaleX:0
        }}
        animate={{
          scaleX:1
        }}
        transition={{
          ease:"easeInOut",
          duration:.5
        }}
        ></motion.div>
        <motion.div className='absolute bottom-0 right-0 w-full h-1 bg-[#fcf6f4] origin-right'
        initial={{
          scaleX:0
        }}
        animate={{
          scaleX:1
        }}
        transition={{
          ease:"easeInOut",
          duration:.5
        }}
        ></motion.div>

        <motion.div
        className='origin-top'
        initial={{
          scaleY:0
        }}
        animate={{
          scaleY:[0,0,1]
        }}
        transition={{
          duration:1.25,
          times:[0,.3,1],
          ease:"easeInOut"
        }}
        >
          <div className='text-2xl font-work tracking-wide font-medium'>
          I'm an engineering student at The National Institute of Engineering, Mysuru, specializing in Computer Science. Hailing from Bijapur, I have a deep passion for technology and an innate curiosity that drives my academic and personal pursuits.
          </div>
          <div className='text-2xl font-work tracking-wide font-medium'>
          I'm good at web development and enjoy making websites and web apps. I'm always enthusiastic about my work and love to explore different tech fields.
          </div>
          <div className='text-2xl font-work tracking-wide font-medium'>
          In my free time, I love to dance, play chess, and tackle coding challenges. These hobbies not only keep me engaged and active but also enhance my problem-solving abilities and creativity.
          </div>
        </motion.div>
      </motion.div>
      <div className='relative'>
      <motion.div
      className='origin-bottom'
        onClick={handleClick}
        initial={{  
          rotate:0,
          scale:[1]
        }}
        animate={{
          x:[0,30,0],
          transition:{
            duration:3,
            repeat:Infinity,
            ease:"linear"
          }
        }}
        whileTap={{
          rotate:5,
          scale:.9
        }}
      >
          <img src="avatar.png" alt="" />
      </motion.div>
          <motion.div 
          className={`' origin-bottom-right absolute top-20 left-20 '${hi? "  ":" hidden "}`}
          initial={{
            rotate:50,
            scale:0
          }}
          animate={{
            scale:1,
            rotate:0
          }}
          transition={{
            duration:1,
            type:"spring"
          }}
          ><img src="hello.png" className='h-20'l alt="" /></motion.div>
      </div>
    </div>
  )
}

export default AboutMe