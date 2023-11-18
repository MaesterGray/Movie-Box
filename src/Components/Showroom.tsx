import React from 'react'
import { useEffect } from 'react'
import useCategoryFetch from '../hooks/useCategoryFetch'
import { motion } from 'framer-motion'
import { useCategorySeries } from '../hooks/useCategoryFetch'
import MovieCard from './MovieCard'
import MovieCardSkeleton from './MovieCardSkeleton'
type Props ={
    category:string,
    variants:'Movies'|'Tv-series'
}

export  type movieResult = {
  variants:'Movies'|'Tv-series',
  id:number,
  poster_path:string,
  genre_ids:[id: number, name: string]
  original_title:string,
  vote_average:number
  name:string
  release_date:string
  first_air_date:string
  
}

const Showroom:React.FC<Props> = ({category,variants}) => {

  const movies = useCategoryFetch(category)
  const series = useCategorySeries(category)
  const placeholders=[1,2,3,4,5,6]
useEffect(()=>{
  if (movies.isLoading===false) {
  console.log(movies.data.results[0].genre_ids)
  }
},[movies.isLoading])

if (movies.isError) {
  return( <div>oopsss</div>)
}

 if (variants==='Movies') {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.3,duration:0.7}}  className='flex flex-col  w-[90vw] h-fit relative dark:bg-slate-800'>

        <h1 className=' w-screen font-bold flex p-2 justify-between  text-lg'>
            <p className='dark:text-white'>{category}</p>
            <span className='  text-red-400 px-2'> See more</span >
        </h1>
    <div className='flex space-x-5 sm:h-[80vh] md:h-[40vh] lg:h-[55vh]  overflow-x-scroll items-center w-screen p-2 justify-center dark:bg-slate-800'>
    {movies.isLoading?placeholders.map((position)=>(<MovieCardSkeleton key={position}/>)):movies.data.results.map((movie:movieResult)=>(
      <MovieCard variants='Movie' key={movie.id} image={movie.poster_path} genres={movie.genre_ids} title={movie.original_title} debut={movie.release_date} rating={movie.vote_average} id={movie.id} />
    ))}
    </div>
    </motion.div>
  )
}
if (variants==='Tv-series') {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1, }} transition={{duration:0.3 ,delay:0.7}} className='flex flex-col  w-[90vw] h-fit relative dark:bg-slate-800'>

        <h1 className=' w-screen font-bold flex p-2 justify-between  text-lg'>
            <p className=' dark:text-white'>{category}</p>
            <span className='  text-red-400 px-2'> See more</span >
        </h1>
    <div className='flex space-x-3 flex-shrink-0 sm:h-[80vh]  lg:h-[55vh]  overflow-x-scroll items-center w-screen p-2 dark:bg-slate-800'>
    {series.isLoading?placeholders.map((position)=>(<MovieCardSkeleton key={position}/>)):series.data.results.map((serie:movieResult)=>(
      <MovieCard variants='Tv-serie' key={serie.id} image={serie.poster_path} genres={serie.genre_ids} title={serie.name} debut={serie.first_air_date} rating={serie.vote_average} id={serie.id} />
    ))}
    </div>
    </motion.div>
  )
}


}

export default Showroom