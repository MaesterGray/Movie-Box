import React from 'react'
import { useTrendingFetch } from '../hooks/useCategoryFetch'
import { useEffect,useState,useRef } from 'react'
import Header from './Header'
import DescriptionBox from './DescriptionBox'
import SliderNavigation from './SliderNavigation'
import { useTrendingSeries } from '../hooks/useCategoryFetch'

const imageBase = 'https://image.tmdb.org/t/p/original/'

type props ={
  variant:'Movies'|'Tv-series'
}

const MovieSlider:React.FC<props> = ({variant}) => {

  
  const movies=useTrendingFetch()
  const series = useTrendingSeries()
  const imagePoster = useRef(null)
  const [presentIndex,setPresentIndex] = useState(0)
  const [renderedPoster,setRenderedPoster] = useState()
  const [renderedSeriesPoster,setrenderedSeriesposter] = useState()
  const [renderedDescription,setRenderedDescription] = useState()
  const [renderedSeriesDescription,setRenderedSeriesDescription] = useState()
  const [renderedTitle,setRenderedTitle] = useState()
  const [renderedSeriesTitle,setrenderedseriestitle] = useState()
  const [renderedRating,setrenderedRating]=useState(0)
  const [presnetRoutableId,setpresentRoutableId]= useState('')
  const [presentRoutableSerieId,setPresentRoutableSerieId] = useState('')
  const [imageLoading,setImageLoading]= useState(true)

useEffect(()=>{

  if (movies.isLoading===false) {
    const neededMovies=  movies.data.results.slice(0,10)
    setRenderedPoster(neededMovies[presentIndex].backdrop_path)
    setRenderedTitle(neededMovies[presentIndex].title)
    setRenderedDescription(neededMovies[presentIndex].overview)
    setrenderedRating(neededMovies[presentIndex].vote_average)
    setpresentRoutableId(neededMovies[presentIndex].id)
  } 
  if (series.isLoading===false) {
    const neededSeries = series.data.results.slice(0,10)
    setrenderedSeriesposter(neededSeries[presentIndex].backdrop_path)
    setRenderedSeriesDescription(neededSeries[presentIndex].overview)
    setrenderedseriestitle(neededSeries[presentIndex].name)
    setPresentRoutableSerieId(neededSeries[presentIndex].id)

  }


},[movies.isLoading,presentIndex,series.isLoading])

const updater=(param:number)=>{
setPresentIndex(param)
}

if (variant==='Movies') {
  return (
    <div className=' w-screen h-[50vh] sm:h-[100vh] md:h-screen relative mb-10'>

      <Header/>

      <div ref={imagePoster} className= ' w-full h-full bg-gray-200 '>
        {movies.isLoading?<div>nothing here</div>:<img className=' object-fill h-full w-full' onLoad={()=>setImageLoading(false)} src={`${imageBase}${renderedPoster}`} alt="" />}
        </div>
        <SliderNavigation presentIndex={presentIndex} stateUpdater={updater}/>
        <DescriptionBox isLoading={movies.isLoading} title={renderedTitle} rating={renderedRating} description={renderedDescription} id={presnetRoutableId} variant='Movies'/>
        

    </div>
  )
} else if (variant==='Tv-series') {
  return (
    <div className=' w-screen h-[50vh] sm:h-[100vh] md:h-screen relative mb-10'>

      <Header/>

      <div ref={imagePoster} className= ' w-full h-full bg-gray-200 '>
        {series.isLoading?<div>nothing here</div>:<img className=' object-fill h-full w-full' src={`${imageBase}${renderedSeriesPoster}`} alt="" />}
        </div>
        <SliderNavigation presentIndex={presentIndex} stateUpdater={updater}/>
        <DescriptionBox isLoading={series.isLoading} title={renderedSeriesTitle} rating={4} description={renderedSeriesDescription} id={presentRoutableSerieId} variant='Tv-series'/>
        

    </div>
  )
}
  
}

export default MovieSlider