import React from 'react'
import Skeleton from 'react-loading-skeleton'

type props ={
    name:string,
    image:string,
    isLoading:boolean
}
const imageBase = 'https://image.tmdb.org/t/p/original/'


const PersonImage:React.FC<props> = ({name,image,isLoading}) => {


  return (
    <div className='w-[13vh] h-[14vh] sm:h-[10vw] sm:w-[10vw]  md:w-[10vw] md:h-[10vw]  flex flex-col space-y-2'>

        <div className=' w-[10vh] h-[10vh] sm:h-[8vw] sm:w-[8vw]  md:w-[8vw] md:h-[8vw] rounded-full'>
          {isLoading?<div className=' w-full h-full animate-pulse bg-gray-200'></div>:<img className=' object-cover h-full w-full rounded-full' src={`${imageBase}${image}`} alt="" />}
          </div>

        <span className=' font-semibold text-xs w-[100%] truncate  sm:text-xs text-center text-rose-700 md:font-bold '>
          {isLoading?<Skeleton/>:name}
          </span>
    </div>
  )
}

export default PersonImage