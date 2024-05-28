import React, { act, useState } from 'react'

const WorkCard = ({work}) => {
    const {title,desp,hashTags} = work;
    console.log(work);
    const [active,setActive] = useState(false);
  return (
    <div className={`${active?"bg-black ":"bg-[#fcf6f4] "} ' flex justify-evenly flex-col w-80 border border-[#fcf6f4] rounded-bl-[20%] rounded-tr-[20%] h-96 m-2 p-4 '`}
        onMouseEnter={()=>{
            setActive(true);
        }}
        onMouseLeave={()=>{
            setActive(false);
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
        <div className='flex gap-5 flex-wrap'>
            {hashTags.map((hash)=>{
                return <h3 className={`" font-semibold "${active?" text-[#fcf6f4] ":"text-black "}`}>{hash}</h3>
            })}
        </div>
    </div>
  )
}

export default WorkCard