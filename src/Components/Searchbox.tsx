import React from 'react'
import { movieResult } from './Showroom'
import { imageBase } from './Slide'

type props ={
    results:movieResult[]
    isloading:boolean
}

const Searchbox:React.FC<props> = ({results,isloading}) => {
  return (
    <div className='w-[50%] flex flex-col'>
        {isloading?<div></div>:results.map(()=>(
            <div className=' flex justify-evenly'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        ))}
    </div>
  )
}

export default Searchbox