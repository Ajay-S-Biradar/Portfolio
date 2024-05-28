import React from 'react'
import { Works } from '../svg/works';
import WorkCard from '../components/WorkCard';

const MySkills = () => {
  return (
    <div className='bg-black w-[100%] h-[100vh] overflow-x-scroll flex items-center'>
      <div className='text-[#1a1919] absolute z-0 font-extrabold text-9xl right-[20%] top-[20%] font-work'>
        WORK
      </div>
      <div className='relative z-10 flex flex-nowrap gap-24 items-center w-auto h-fit'>
          <div className='w-80 '>
            {/* extra part */}
          </div>
        {Works.map((work,ind)=>{
          return(
            <WorkCard key={ind} work={work} />
          )
        })}
        <div className='w-80 '>
            {/* extra part */}
          </div>
      </div>
    </div>
  )
}

export default MySkills;