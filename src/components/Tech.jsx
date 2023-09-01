import React from 'react'
import {BallCanvas} from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology)=>(
        <div className='w-28 h-28 text-center' key={technology.name}>
          
          <BallCanvas icon={technology.icon}></BallCanvas>
          <motion.div variants={textVariant()}>
            <p>{technology.name}</p>
          </motion.div>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"tech")
