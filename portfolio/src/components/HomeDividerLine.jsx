import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {useMediaQuery} from 'react-responsive'
import axios from 'axios'
import { API_URL } from '../constants/util'

const HomeDividerLine = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [intro,setIntro] = useState([]);
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{
    const res = await axios.get(API_URL+'intro');
    // console.log("INtro",res.data);
    setIntro(res.data[0]);
  }
    const navigate = useNavigate();
    
    const handleClick = ()=>{
        navigate('/works');
    }
  return (
    <motion.div
      className='flex bg-black h-full w-full origin-bottom md:origin-right justify-center md:justify-start'
      initial={isMobile ? { scaleY: 0 } : { scaleX: 0 }}
      animate={isMobile ? { scaleY: [0, 0, 1] } : { scaleX: [0, 0, 1] }}
      transition={{ duration: .9, ease: 'easeIn', times: [0, 0.5, 1] }}
    >
            <motion.div className='flex items-end md:items-center justify-center md:justify-end w-[70vw] md:w-full h-full origin-bottom md:origin-center'
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
                <div className='flex h-72 w-60 md:w-auto md:h-96 gap-3 flex-col justify-center md:items-start border md:border-r-0 border-[#fcf6f4] text-[#fcf6f4] px-2 md:p-6'>
                  <div className='m-1 py-2 md:p-2 text-3xl md:text-7xl font-extrabold font-serif'>{intro?.greet}</div>
                  <div className='m-1 py-2 md:p-2 text-2xl md:text-5xl font-semibold  font-serif'>{intro?.intro}</div>
                  <div className='m-1 py-2 md:p-2 text-xl md:text-4xl font-semibold text-gray-400  font-serif'>{intro?.info}</div>
                </div>
              </div>
            </motion.div>
            <motion.div
            onClick={handleClick}
              className='absolute z-20 left-0 top-[45%] text-xl font-medium p-3 text-red-300 md:text-[#fcf6f4] cursor-pointer'
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
              <span className='absolute z-0 text-black left-0 top-[45%] blur-[10px]'>Works</span>
            </motion.div>
      </motion.div>
  )
}

export default HomeDividerLine