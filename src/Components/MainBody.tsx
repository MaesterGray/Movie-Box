import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai"
import CastOrCrew from "../Components/CastOrCrew"


type props ={
    isLoading:boolean,
    overview?:string,
    movieid?:string,
    recommendations:recommendation[]
    variants:'Movies'|'Tv-series'

}
type recommendation={
  poster_path:string,
  id:string
}

const imageBase= 'https://image.tmdb.org/t/p/original/'


const MainBody:React.FC<props>  = ({isLoading,overview,movieid,recommendations,variants}) => {
    const navigate=useNavigate()

  return (
    <section className="w-full flex flex-col space-y-7 lg:flex-row lg:space-x-6 px-4">
        <div className=" flex flex-col space-y-4 lg:w-[60%]">
          <p className=" ">{isLoading?
          <div role='status' className=' w-full rounded-md animate-pulse h-36 flex flex-col space-y-5 '>
              <div className=' w-full h-[25%] bg-gray-200 rounded-md'></div>
              <div className=' w-full h-[25%] bg-gray-200 rounded-md'></div>
              <div className=' w-full h-[25%] bg-gray-200 rounded-md'></div>
              <div className=' w-full h-[23%] bg-gray-200 rounded-md'></div>
          </div>:
          overview}
          </p>
          <CastOrCrew variants={variants} movieid={movieid}/>
        </div>
        <div className=" flex flex-col space-y-2 lg:w-[40%]">
            <button className=" w-full rounded-md text-center bg-rose-700 text-white py-2">
              See Showtimes
              </button>
            <button className="w-full rounded-md  bg-red-200 text-white py-2 flex justify-center items-center">
              <span className="flex space-x-2 items-center">
              <AiOutlineMenu className='text-black' size={15}/> 
              <small>More Watch Options</small>
              </span>
              </button>
            <div className=" flex flex-col">
              <h1 className="text-center font-bold text-lg">Similar</h1>
            <div className="w-full flex rounded-md h-[30vh] sm:h-[40vh] md:h-[60vh]  lg:h-[45vh] space-x-1">
              { recommendations.length>0 ?recommendations.map((object:recommendation)=>(<img src={`${imageBase}${object.poster_path}`} onClick={()=>{if (variants==='Movies') {
                navigate(`/Movies/${object.id}`)
              }navigate(`/Tv-series/${object.id}`) }} className=" w-[33.34%] h-full  md:h-full lg:h-full rounded-md hover:scale-105 cursor-pointer"/>)):'nothing here'}
            </div>
            </div>
        </div>
      </section>
  )
}

export default MainBody