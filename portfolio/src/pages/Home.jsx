import React from 'react'
import { motion } from 'framer-motion'
import HomeLeftside from '../components/HomeLeftside'
import HomeDividerLine from '../components/HomeDividerLine'
import HomeRightside from '../components/HomeRightside'
import HomeBottomLinks from '../components/HomeBottomLinks'

const Home = () => {

  return (
    <motion.div className='w-[100hw] h-[100vh] flex'
      initial={{
        scale:1
      }}
      exit={{
        x:-1000,
        opacity:[1,.7,0]
      }}
      animate={{
        opacity:1
      }}
      transition={{
        duration:2
      }}
    >
      <HomeLeftside />
      <HomeDividerLine />
      <HomeRightside />
      <HomeBottomLinks />
    </motion.div>
  )
}

export default Home