import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {useLocation} from 'react-router-dom'

const MySkills = () => {
  const location = useLocation();
  const [isHover1,setIsHover1] = useState(false);
  const [isHover2,setIsHover2] = useState(false);
  const [isHover3,setIsHover3] = useState(false);
  return (
    <motion.div
      className='w-[100vw] h-[100vh] relative flex flex-col justify-center items-center bg-[#fcf6f4]'
    >
      <motion.div 
      className='absolute top-10 z-0 '
      initial={{
        y:-1000
      }}
      animate={{
        y:0,
      }}
      transition={{
        duration:.75
      }}
      ><img src="frontback.png" className='h-40' alt="" /></motion.div>
      <div className='absolute text-[#e2dddb] bottom-[10%] right-[20%] text-8xl font-work font-extrabold'>Skills</div>
      <div className='flex h-[55%] mx-[10%] gap-52 relative z-20'>
      <motion.div 
      className={`' w-[50%] h-[100%] border-2 border-solid border-black px-10 py-5  flex flex-col justify-evenly ${isHover1?"bg-black text-[#fcf6f4] ":"  text-black "}'`}
      onMouseEnter={()=>setIsHover1(true)}
      onMouseLeave={()=>setIsHover1(false)}
      initial={{
        x:-1000
      }}
      animate={{
        x:0,
      }}
      transition={{
        duration:.75
      }}
      >
        <div className={`' flex justify-center '`}>
        <h1 className={`font-extrabold text-3xl m-1 py-3`}>Frontend Developer</h1>
        </div>
        <div className='tracking-wider text-2xl'>
          <p className='p-1'>I like developing the websites, i enjoy bringing new ideas to life.</p>
          <hr />
          <h2 className='font-semibold py-5'>SKILLS:</h2>
          <p className='pl-5 leading-10'>Html, Css, Js, React, Redux, Tailwind, Firebase...</p>
        </div>
      </motion.div>

      <motion.div 
      className={`' w-[50%] h-[100%] border-2 border-solid border-black px-10 py-5  flex flex-col justify-evenly ${isHover2?"bg-black text-[#fcf6f4] ":"  text-black "}'`}
      onMouseEnter={()=>setIsHover2(true)}
      onMouseLeave={()=>setIsHover2(false)}
      initial={{
        x:1000
      }}
      animate={{
        x:0,
      }}
      transition={{
        duration:.75
      }}
      >
      <div className='flex justify-center'>
        
        <h1 className='font-extrabold text-3xl m-1 py-3'>Backend Developer</h1>
        </div>
        <div className='tracking-wider text-2xl'>
          <p className='p-1'>I use node for the backend.I like doing backend as it supports the frontend and makes the frontend very interactive.</p>
          <hr />
          <h2 className='font-semibold py-5'>SKILLS:</h2>
          <p className='pl-5 leading-10'>Nodejs, expressjs, jwtToken, nodemailer, Oauth, MongoDB...</p>
        </div>
      </motion.div>
      
      </div>
      <motion.div 
      className={`' relative z-20 mt-10 border-2 border-black m-4 h-[20%] flex flex-col items-center ' ${isHover3?"bg-black text-[#fcf6f4] ":"  text-black "}`}
        onMouseEnter={()=>setIsHover3(true)}
        onMouseLeave={()=>setIsHover3(false)} 
        initial={{
          y:+1000
        }}
        animate={{
          y:0,
        }}
        transition={{
          duration:.75
        }}
      >
        <div className='p-5'>
          <h1 className='font-extrabold text-3xl m-1 py-3'>Tools used for Development</h1>
        </div>
        <div>
          <p>VScode, Git, GitHub, Postman, Vercel, ReduXDevTools</p>
          <hr className='bg-black h-[1px]' />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MySkills;
