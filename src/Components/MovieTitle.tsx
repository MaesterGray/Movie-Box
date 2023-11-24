import React from 'react'
import GenreMap from './GenreMap'
import Skeleton from 'react-loading-skeleton'
type props={
    isLoading:boolean,
    title:string,
    runtime?:string,
    seasons?:number,
    genres:[id:number,name:string],
    yearofrelease:string,
    variants:'Movies'|'Tv-series'

}


const MovieTitle:React.FC<props> = ({isLoading,title,runtime,seasons,genres,yearofrelease,variants}) => {
  return (
    <span className="w-full dark:bg-slate-800 dark:text-white font-Poppins px-4">
        {isLoading?<Skeleton/>:
        <div className=" flex flex-col justify-center space-y-2 font-semibold md:flex md:flex-row md:space-x-3 w-full md:items-center  md:font-bold dark:text-white">
             <span className=' text-center md:pt-1'>{title}</span>
              <span> {variants==='Movies'?runtime:`Seasons: ${seasons}`} </span>
               <span>{yearofrelease}</span> 
               <GenreMap genreIds={genres} />
               </div>} 
        </span>
    
  )
}

export default MovieTitle