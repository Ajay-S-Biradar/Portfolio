import React, { useEffect, useState } from 'react';
import CD from './MusicPlayer';
import { motion, useAnimationControls } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Socials from './Socials';

const Navbar = () => {
    const location = useLocation();
    const [color, setColor] = useState("#fcf6f4");
    const [cdColor,setCdColor] = useState("#000000");
    const controls = useAnimationControls();
    const [play, setPlay] = useState(false);
    const [audio] = useState(new Audio('sound.mp3'));

    useEffect(() => {
        const handleEnded = () => {
            audio.currentTime = 0;
            audio.play();
        };

        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('ended', handleEnded);
        };
    }, [audio]);

    useEffect(() => {
        controls.start("initial");
        if (location.pathname === "/skills") {
            setColor("#000000");
            setCdColor("#000000");
        } else if(location.pathname === "/"){
            setColor("#fcf6f4");
            setCdColor("#000000");
        }
        else{
            setColor("#fcf6f4");
            setCdColor("#fcf6f4");
        }
    }, [location, controls]);

    const handleClick = () => {
        console.log("clicked" + play);
        if (!play) {
            audio.play();
            controls.start("play");
        } else {
            audio.pause();
            controls.start("pause");
        }
        setPlay(!play);
    };

    return (
        <>
        <div className='absolute z-40 flex flex-col md:flex-row justify-between w-full overflow-hidden'>
            <Link to={'/'}>
            <h1 className='font-name text-3xl md:text-4xl md:mx-8 md:my-5 p-2 md:p-3' style={{ color: color }}>AB</h1>
            </Link>
            <motion.div
                onClick={handleClick}
                className='h-10 md:h-32 m-2 md:m-5'
                initial={{ scale: 0 }}
                animate={controls}
                variants={{
                    play: {
                        rotate: [0, 360],
                        transition: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                        }
                    },
                    initial: {
                        scale: 1,
                        rotate: "-360deg",
                        transition: {
                            duration: 1,
                            ease: "easeInOut"
                        }
                    },
                    pause: {
                        rotate: [],
                        transition: {
                            duration: 1,
                            ease: "easeIn"
                        }
                    }
                }}
            >
                <CD color={cdColor} />
            </motion.div>
        </div>
        <Socials color={color}/>
        </>
    );
};

export default Navbar;
