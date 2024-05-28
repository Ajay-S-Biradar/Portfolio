import React from 'react'
import { socialItems } from '../svg/socials'
import { motion } from 'framer-motion'

const Socials = () => {
  return (
    <div className='fixed z-20 flex flex-col bottom-0 items-center justify-center mx-8 gap-6'>
      <div className='flex flex-col gap-6'>
        {socialItems.map((item, index) => (
          <motion.svg
            key={index}
            className="w-8 h-8"
            fill="#fcf6f4"
            viewBox="0 0 24 24"
            aria-hidden="true"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 0, 1.1, 1] }}
            transition={{ duration: 2, ease: "circInOut", times:[0, 0.5, 0.9, 1]}}
          >
            <path fillRule="evenodd" d={item.d} clipRule="evenodd" />
          </motion.svg>
        ))}
      </div>
      <motion.div
        className='bg-[#fcf6f4] w-[3px]'
        initial={{ height: 0 }}
        animate={{ height: 150 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
      ></motion.div>
    </div>
  )
}

export default Socials
