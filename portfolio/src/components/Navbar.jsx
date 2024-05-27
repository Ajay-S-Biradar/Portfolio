import React, { useEffect, useState } from 'react'
import CD from './MusicPlayer'
import { motion, useAnimationControls } from 'framer-motion'

const Navbar = () => {
    const controls = useAnimationControls();
    const [play,setPlay] = useState();

    const handleEnded = () => {
        audio.currentTime = 0;
        audio.play();
      };
    const [audio] = useState(new Audio('sound.mp3'));
    
    //adding event listener- to know when the song will end, later remove it
    audio.addEventListener('ended', handleEnded);

    useEffect(()=>{
        controls.start("initial")

        return()=>{
            audio.removeEventListener('ended', handleEnded);
        }
    },[])
    const HandleClick = ()=>{
        console.log("clicked" + play)
        if(!play){
            audio.play();
            controls.start("play");
        }
        else {
            audio.pause();
            controls.start("pause");
        }
        setPlay(!play);
    }
  return (
    <div className='absolute flex justify-between w-full overflow-hidden'>
        <h1 className='font-name text-[#fcf6f4] text-4xl mx-8 my-5 p-3'>AB</h1>
        <motion.div
        onClick={HandleClick}
            className='origin-[40%_40%]'
            initial={{
                scale:0
            }}
            animate={controls}
            variants={{
                play:{
                    rotate:[0,360],
                    transition:{
                        duration:4,
                        repeat:Infinity,
                        ease:"linear"
                    }
                },
                initial:{
                    scale:1,
                    rotate:"-360deg",
                    transition:{
                        duration:1,
                        ease:"easeInOut"
                    }
                },
                pause:{
                    rotate:[0, 360],
                    transition:{
                        duration:0
                    }
                }
            }}
        >
            <CD />
        </motion.div>
    </div>
  )
}

export default Navbar