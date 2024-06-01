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
    <div className='bg-black h-[100vh] w-screen text-[#fcf6f4] flex flex-col-reverse justify-center  md:flex-row md:justify-center md:items-center gap-3 overflow-y-scroll overflow-x-hidden' >
      {/* extra */}
      <div className='h-40'></div>
      <motion.div className='relative flex md:h-2/3 md:w-1/2 md:flex-col justify-center items-center md:px-10 gap-6 origin-top mx-[10%] md:m-0'>
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

        {/* the info */}
        <motion.div
        className='origin-top p-[3%] relative text-xl md:text-2xl font-work md:tracking-wide font-medium'
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
          <div>
          I'm an engineering student at The National Institute of Engineering, Mysuru, specializing in Computer Science. Hailing from Bijapur, I have a deep passion for technology and an innate curiosity that drives my academic and personal pursuits.
          </div>
          <div>
          I'm good at web development and enjoy making websites and web apps. I'm always enthusiastic about my work and love to explore different tech fields.
          </div>
          <div>
          In my free time, I love to dance, play chess, and tackle coding challenges. These hobbies not only keep me engaged and active but also enhance my problem-solving abilities and creativity.
          </div>
        </motion.div>

      </motion.div>

      {/* image and hey */}
      <div className='relative'>
      <motion.div
      className='origin-bottom flex w-full justify-end'
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
          <img className='h-36 md:h-auto' src="avatar.png" alt="" />
      </motion.div>
      <motion.div 
          className={`' origin-bottom-right md:h-auto md:w-auto top-0 left-[70%] absolute md:top-20 md:left-20 '${hi? "  ":" hidden "}`}
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
          ><img src="hello.png" className='h-10 md:h-20'l alt="" />
      </motion.div>
      </div>
      {/* <div className='h-40'></div> */}
    </div>
  )
}

export default AboutMe