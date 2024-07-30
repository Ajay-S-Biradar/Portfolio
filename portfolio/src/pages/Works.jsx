import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import { Works } from '../svg/works';
import WorkCard from '../components/WorkCard';
import { API_URL } from '../constants/util';

const MyWorks = () => {
  const scrollableRef = useRef(null);

  const [works,setWorks] = useState([]);
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async()=>{
    const res = await axios.get(API_URL+'work');
    console.log(res.data);
    setWorks(res.data);
  }
  useEffect(() => {
    const scrollableElement = scrollableRef.current;
  
    const handleWheel = (e) => {
      e.preventDefault();
      scrollableElement.scrollLeft += e.deltaY * 2;
    };
  
    let startX = 0;
    let scrollLeft = 0;
  
    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      scrollLeft = scrollableElement.scrollLeft;
    };
  
    const handleTouchMove = (e) => {
      const x = e.touches[0].clientX;
      const walk = (x - startX) * 2; // Adjust scroll speed multiplier as needed
      scrollableElement.scrollLeft = scrollLeft - walk;
    };
  
    scrollableElement.addEventListener('wheel', handleWheel, { passive: false });
    scrollableElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    scrollableElement.addEventListener('touchmove', handleTouchMove, { passive: true });
  
    return () => {
      scrollableElement.removeEventListener('wheel', handleWheel);
      scrollableElement.removeEventListener('touchstart', handleTouchStart);
      scrollableElement.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
  

  return (
    <div ref={scrollableRef} className='scrollable bg-black w-[100%] h-[100vh] overflow-x-auto flex flex-col md:flex-row items-center' style={{ scrollBehavior: 'smooth' }}>
      <div className='text-[#1a1919] absolute z-0 font-extrabold text-9xl right-[20%] top-[10%] font-work'>
        WORK
      </div>
      <div className='relative z-10 flex flex-col ml-[5%] md:flex-row flex-nowrap gap-16 md:gap-24 items-center md:w-auto h-[100vh]'>
        <div className='w-40'>
          {/* extra part */}
        </div>
        {works.map((work, key) => (
          <WorkCard key={key} work={work} time={key} />
        ))}
        <div className='w-80 h-80'>
          {/* extra part */}
        </div>
      </div>
    </div>
  );
}

export default MyWorks;
