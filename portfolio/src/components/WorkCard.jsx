import React, { act, useState } from 'react'
import { motion } from 'framer-motion';

const WorkCard = ({work,time}) => {
    const {title,desp,hashTags} = work;
    console.log(time);
    const [active,setActive] = useState(false);
  return (
    <motion.div 
    className={`${active?"bg-black ":"bg-[#fcf6f4] "} ' flex justify-evenly flex-col w-72 md:w-80 border border-[#fcf6f4] rounded-bl-[20%] rounded-tr-[20%] h-96 m-2 px-6 py-4 '`}
        onMouseEnter={()=>{
            setActive(true);
        }}
        onMouseLeave={()=>{
            setActive(false);
        }}
        initial={{
            scale:0
        }}
        animate={{
            scale:1
        }}
        transition={{
            duration:(time*1+1),
            ease:"easeInOut"
        }}
    >
        <div className='flex justify-center w-full'>
            <h1 className={`" font-semibold text-4xl "${active?" text-[#fcf6f4] ":"text-black "}`}>
                {title}
            </h1>
        </div>
        <div>
            <h2 className={`" font-work text-xl " ${active?"text-[#fcf6f4] ":" text-black "}''`}>
                {desp}
            </h2>
        </div>
        <hr className='h-[2px] bg-gray-600'/>
        <div className='flex gap-5 flex-wrap mb-8 md:mb-0'>
            {hashTags.map((hash,ind)=>{
                return <h3 key={ind} className={`" font-semibold "${active?" text-[#fcf6f4] ":"text-black "}`}>{hash}</h3>
            })}
        </div>
    </motion.div>
  )
}

export default WorkCard