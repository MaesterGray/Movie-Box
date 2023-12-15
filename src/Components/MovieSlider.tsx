import React from 'react'
import { useTrendingFetch } from '../hooks/useCategoryFetch'
import { useEffect,useState,useRef } from 'react'
import DescriptionBox from './DescriptionBox'
import SliderNavigation from './SliderNavigation'
import SlideSkeleton from './SlideSkeleton'
import Slide from './Slide'
import { movieResult } from './Showroom'
export const imageBase = 'https://image.tmdb.org/t/p/original/'

type props ={
  variant:'Movies'|'Tv-series'
}

const MovieSlider:React.FC<props> = ({variant}) => {
  const delay = 5000
  
  const slideshow = useRef(null)
  const placeholders =[1,2,3,4,5,6,7,8,9,10]
  const [presentIndex,setPresentIndex] = useState(0)
  const [neededMovies,setneededMovies]=useState<movieResult[]>([])
  const movies=useTrendingFetch(variant)


useEffect(()=>{

  if (movies.isLoading===false ) {
    setneededMovies( movies.data.results.slice(0,10))

    setTimeout(
      () =>
        setPresentIndex((prevIndex) =>
          prevIndex === 9 ? 0 : prevIndex + 1
        ),
      delay
    );
  } 
  


},[movies.isLoading,presentIndex,variant])

const updater:React.Dispatch<React.SetStateAction<number>>=(param)=>{
setPresentIndex(param)
}

  return (
    <div className=' w-screen flex h-[50vh]  items-center justify-center dark:bg-slate-800  sm:h-[100vh] md:h-screen relative  m-0 overflow-clip'>


      <div ref={slideshow} style={{transform:`translate3d(${-presentIndex*100}%,0,0)`,transition:'ease-in-out',transitionDelay:'0.5' }} className=' w-full h-full  sm:h-full sm:w-full rounded-md flex '>
        {movies.isLoading?placeholders.map((number)=>(<SlideSkeleton key={number}/>)):
        neededMovies.map((obj,index)=>{ return< Slide key={index} poster= {obj.backdrop_path}/>})}
        </div>
        <SliderNavigation presentIndex={presentIndex} stateUpdater={updater}/>
        <DescriptionBox isLoading={movies.isLoading} title={variant==='Movies'?movies.data?.results[presentIndex].title:movies.data?.results[presentIndex].name} rating={movies.data?.results[presentIndex].vote_average} description={movies.data?.results[presentIndex].overview} id={movies.data?.results[presentIndex].id} variant={variant}/>
        

    </div>
  )


  
}

export default MovieSlider