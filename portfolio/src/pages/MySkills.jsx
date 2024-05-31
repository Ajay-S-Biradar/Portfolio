import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MySkills = () => {
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);

  return (
    <motion.div
      className='h-screen w-full  items-center bg-[#fcf6f4] overflow-y-auto'
    >
      {/* image */}
      <motion.div 
        className='md:mt-10 z-0 flex w-screen justify-end md:justify-center px-5 py-2'
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: .75 }}
      >
        <img src="frontback.png" className='h-14 md:h-32' alt="" />
      </motion.div>
      <div className='flex flex-col ml-[5%] md:m-0 items-center gap-4'>
      <div className='absolute text-[#e2dddb] right-5 md:right-20 bottom-20 md:bottom-10 text-6xl md:text-8xl font-extrabold'>Skills</div>
      
      {/* 2 box frontend backend */}
      <div className='flex flex-col gap-4 md:mt-0 relative z-20 md:flex-row md:gap-12 md:h-auto mx-[10%]'>
        <motion.div 
          className={`md:w-1/2 h-auto border-2 border-solid border-black px-5 py-3 md:px-10 md:py-5 md:m-0 flex flex-col justify-evenly ${isHover1 ? "bg-black text-[#fcf6f4]" : " bg-[#fcf6f4] text-black"}`}
          onMouseEnter={() => setIsHover1(true)}
          onMouseLeave={() => setIsHover1(false)}
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: .75 }}
        >
          <div className='flex justify-center'>
            <h1 className='font-extrabold text-2xl md:text-3xl m-1 md:py-3'>Frontend Developer</h1>
          </div>
          <div className='tracking-wider text-xl md:text-2xl'>
            <p className='p-1'>I like developing websites, I enjoy bringing new ideas to life.</p>
            <hr />
            <h2 className='font-semibold py-5'>SKILLS:</h2>
            <p className='pl-5 leading-10'>Html, Css, Js, React, Redux, Tailwind, Firebase...</p>
          </div>
        </motion.div>

        <motion.div 
          className={`md:w-1/2 h-auto border-2 border-solid border-black px-5 py-3 md:px-10 md:py-5 md:m-0 flex flex-col justify-evenly ${isHover2 ? "bg-black text-[#fcf6f4]" : "bg-[#fcf6f4] text-black"}`}
          onMouseEnter={() => setIsHover2(true)}
          onMouseLeave={() => setIsHover2(false)}
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: .75 }}
        >
          <div className='flex justify-center'>
            <h1 className='font-extrabold text-2xl md:text-3xl m-1 py-3'>Backend Developer</h1>
          </div>
          <div className='tracking-wider text-xl md:text-2xl'>
            <p className='p-1'>I use Node for the backend. I like doing backend as it supports the frontend and makes the frontend very interactive.</p>
            <hr />
            <h2 className='font-semibold py-5'>SKILLS:</h2>
            <p className='pl-5 leading-10'>Nodejs, Expressjs, JwtToken, Nodemailer, Oauth, MongoDB...</p>
          </div>
        </motion.div>
      </div>

      {/* tools section */}
      <motion.div 
        className={`relative z-20 mx-[10%] md:w-[50%] border-2 border-black p-4  flex flex-col justify-evenly items-center ${isHover3 ? "bg-black text-[#fcf6f4]" : "bg-[#fcf6f4] text-black"}`}
        onMouseEnter={() => setIsHover3(true)}
        onMouseLeave={() => setIsHover3(false)}
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ duration: .75 }}
      >
        <div className='p-3'>
          <h1 className='font-extrabold text-2xl md:text-3xl m-1'>Tools used for Development</h1>
        </div>
        <div className='text-center'>
          <p>VScode, Git, GitHub, Postman, Vercel, ReduXDevTools</p>
          <hr className='bg-black h-[1px]' />
        </div>
      </motion.div>
      </div>
    </motion.div>
  );
};

export default MySkills;
