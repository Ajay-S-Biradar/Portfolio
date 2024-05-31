import React, { useEffect, useRef } from 'react';
import { Works } from '../svg/works';
import WorkCard from '../components/WorkCard';

const MyWorks = () => {
  const scrollableRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      scrollableRef.current.scrollLeft += e.deltaY > 0 ? 100 : -100;
    };

    let startX = 0;
    let scrollLeft = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].pageX - scrollableRef.current.offsetLeft;
      scrollLeft = scrollableRef.current.scrollLeft;
    };

    const handleTouchMove = (e) => {
      const x = e.touches[0].pageX - scrollableRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scroll speed multiplier as needed
      scrollableRef.current.scrollLeft = scrollLeft - walk;
    };

    const scrollableElement = scrollableRef.current;
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
        {Works.map((work, key) => (
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
