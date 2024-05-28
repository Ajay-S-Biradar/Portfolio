import React, { useEffect, useRef } from 'react'
import { Works } from '../svg/works';
import WorkCard from '../components/WorkCard';

const MyWorks = () => {
  const scrollableRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        scrollableRef.current.scrollLeft += 80;
      } else {
        scrollableRef.current.scrollLeft -= 80;
      }
    };

    const scrollableElement = scrollableRef.current;
    scrollableElement.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      scrollableElement.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div ref={scrollableRef} className='scrollable bg-black w-[100%] h-[100vh] overflow-x-hidden flex items-center'>
      <div className='text-[#1a1919] absolute z-0 font-extrabold text-9xl right-[20%] top-[10%] font-work'>
        WORK
      </div>
      <div className='relative z-10 flex flex-nowrap gap-24 items-center w-auto h-fit'>
          <div className='w-80 '>
            {/* extra part */}
          </div>
        {Works.map((work,key)=>{
          return(
            <WorkCard key={key} work={work} />
          )
        })}
        <div className='w-80 '>
            {/* extra part */}
          </div>
      </div>
    </div>
  )
}

export default MyWorks;