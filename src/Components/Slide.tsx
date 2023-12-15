import React from 'react'
import { motion } from 'framer-motion'

type props ={
    poster:string,
}
export const imageBase = 'https://image.tmdb.org/t/p/original/'

const Slide = ({poster}:props) => {
  return (
    <motion.div initial={{ scale:0.5}} whileInView={{scale:1}} transition={{duration:0.5,ease:'easeInOut'}} className=' w-full h-full flex-shrink-0 '>
        <img src={`${imageBase}${poster}`} alt="" className=' object-fill h-full w-full rounded-md' />
    </motion.div>
  )
}

export default Slide