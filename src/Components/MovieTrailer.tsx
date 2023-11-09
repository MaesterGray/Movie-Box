import React from 'react'
import {FaPlay} from 'react-icons/fa'


type props={
    image:string
    isLoading:boolean
}

const imageBase = 'https://image.tmdb.org/t/p/original/'

const MovieTrailer:React.FC<props> = ({image,isLoading}) => {
  return (
    

      <div className="  w-full h-[40vh] sm:h-[60vh] md:h-[70vh] cursor-pointer relative">
        <div className='  flex flex-col space-y-3   absolute inset-0  items-center justify-center'>
            <div className=' rounded-full  flex items-center justify-center  text-white '><FaPlay color={'white'} size={30} /></div>
            <span className=' text-white font-bold'>Watch Trailer</span>
        </div>
        <div className=' w-full h-full flex-shrink-0'>{ isLoading?<div className=' w-full h-full rounded-md animate-pulse bg-gray-200'></div>:<img src={`${imageBase}${image}`} className=" object-cover w-full h-full rounded-lg "  />}</div>
        </div>
        
  )
}

export default MovieTrailer