import React from 'react';
import { motion } from 'framer-motion';

const MySkills = () => {
  return (
    <motion.div
      className='w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[#fcf6f4]'
    >
      <div className='flex h-[55%] mx-[10%] gap-52'>
      <div className='w-[50%] h-[100%] border border-black px-10 py-5  flex flex-col justify-evenly'>
        <div className='flex justify-center'>
        <h1 className='font-extrabold text-3xl m-1 py-3'>Frontend Developer</h1>
        </div>
        <div className='tracking-wider text-2xl'>
          <p className='p-1'>I like developing the websites, i enjoy bringing new ideas to life.</p>
          <hr />
          <h2 className='font-semibold py-5'>SKILLS:</h2>
          <p className='pl-5 leading-10'>Html, Css, Js, React, Redux, Tailwind, Firebase...</p>
        </div>
      </div>

      <div className='w-[50%] h-[100%] border border-black px-10 py-5 flex flex-col justify-evenly'>
        <div className='flex justify-center'>
        <h1 className='font-extrabold text-3xl m-1 py-3'>Backend Developer</h1>
        </div>
        <div className='tracking-wider text-2xl'>
          <p className='p-1'>I use node for the backend.I like doing backend as it supports the frontend and makes the frontend very interactive.</p>
          <hr />
          <h2 className='font-semibold py-5'>SKILLS:</h2>
          <p className='pl-5 leading-10'>Nodejs, expressjs, jwtToken, nodemailer, Oauth, MongoDB...</p>
        </div>
      </div>
      
      </div>
      <div className='border border-black m-4 h-[20%] flex flex-col items-center'>
        <div className='p-5'>
          <h1 className='font-extrabold text-3xl m-1 py-3'>Tools used for Development</h1>
        </div>
        <div>
          <p>VScode, Git, GitHub, </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MySkills;
