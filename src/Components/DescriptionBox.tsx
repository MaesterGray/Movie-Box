import React from 'react'
import { Link } from 'react-router-dom'


type Props ={
    isLoading:boolean,
    title:string,
    rating:string,
    description:string,
    variant:'Movies'|'Tv-series',
    id:any
}
const DescriptionBox:React.FC<Props> = ({isLoading,title,rating,description,id,variant}) => {
  return (
    <div className='hidden lg:block lg:absolute    lg:w-[17vw] lg:h-[17vw]  backdrop-blur-lg  bottom-[25%] left-[5%] shadow-sm shadow-black rounded-md p-3 hover:scale-110'>
        {
        isLoading?<div>nothing here</div>:
        <div className='hidden   md:flex md:flex-col md:space-y-1 w-full h-full md:text-white '>
          <h1 className=' h-[20%] w-full truncate text-4xl md:text-2xl white font-bold text-center'>{title}</h1>
          <p>{`Rating: ${Math.floor(rating)}/10`}</p>
          <section className='w-full h-[40%] text-ellipsis  overflow-hidden '>{description}</section>
         <Link to={`Movies/${id}`}> <button className='bg-red-400 rounded-md flex justify-center items-center  p-1 hover:bg-red-300 cursor-pointer w-full '>Watch Trailer</button></Link>
          </div>
          }
        </div>

  )
}

export default DescriptionBox