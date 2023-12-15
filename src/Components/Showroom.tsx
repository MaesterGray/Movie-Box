import React from 'react'
import { useEffect,useState } from 'react'
import { motion } from 'framer-motion'
import useDiscover from '../hooks/useCategoryFetch'
import MovieCard from './MovieCard'
import MovieCardSkeleton from './MovieCardSkeleton'
import Pagination from './Pagination'
type Props ={
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
  title:string
  overview:string
  backdrop_path:string
}


const Showroom:React.FC<Props> = ({variants}) => {
const [page,setpage] = useState(1)
  const movies = useDiscover(page,variants)
  
  const placeholders=[1,2,3,4,5,6,7,8,9,10,11,12,133,14,15,16,17,18,19,20]
useEffect(()=>{
  if (movies.isLoading===false) {
    ''
  }
},[movies.isLoading])

if (movies.isError) {
  return( <div>oopsss</div>)
}

  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.3,duration:0.7}}  className='  w-screen h-fit relative dark:bg-slate-800 flex flex-col space-y-5'>

        
    <div className='flex gap-5 flex-wrap items-center w-full p-2 justify-center dark:bg-slate-800'>
    {movies.isLoading?placeholders.map((position)=>(<MovieCardSkeleton key={position}/>)):movies.data.results.map((movie:movieResult)=>(
      <MovieCard variants={variants} key={movie.id} image={movie.poster_path} genres={movie.genre_ids} title={variants==='Movies'?movie.original_title:movie.name} debut={movie.release_date} rating={movie.vote_average} id={movie.id} />
    ))}
    </div>

   <Pagination pages={1} stateUpdater={setpage} state={page}/>
    </motion.div>
  )




}

export default Showroom