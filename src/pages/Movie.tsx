import { useParams } from "react-router-dom"
import {  useMovieId, useRecommendation, useCastAndCrew } from "../hooks/useCategoryFetch"
import { useEffect,useState } from "react"
import Footer from "../Components/Footer"
import Sidebar from "../Components/Sidebar"
import MovieTrailer from "../Components/MovieTrailer"
import MovieTitle from "../Components/MovieTitle"
import MainBody from "../Components/MainBody"
import Skeleton from 'react-loading-skeleton'
import { useRecommendationSeries } from "../hooks/useCategoryFetch"
import { useSerieId } from "../hooks/useCategoryFetch"

type props ={
  variants:'Movies'|'Tv-series'
}


const Movie:React.FC<props> = ({variants}) => {
    const {movieId} = useParams()
    const movieData = useMovieId(movieId)
    const serieData = useSerieId(movieId)
    const serieRecommendations = useSerieId(movieId)
    const recommendations = useRecommendation(movieId)
    const [recommendationArray,setRecommendationArray] = useState([])
    const [serieRecommendationArray,setSerieRecommendationArray] = useState([])
    const [seasons,setseasons] = useState()
    const [formattedRuntime,setFormattedRuntime] = useState('')
    const [releaseYear, setreleaseYear] = useState('')
    const [seriereleaseYear,setSerieReleaseyear] = useState()
    

    

    function formatRuntime(minutes:number) {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
  
      // Create a string to display the runtime
      let formattedRuntime = '';
      
      if (hours > 0) {
          formattedRuntime += hours + 'h';
      }
      
      if (remainingMinutes > 0) {
          formattedRuntime += ' ' + remainingMinutes + 'min';
      }
  
      return formattedRuntime;
  }

    useEffect(()=>{
        if (movieData.isLoading===false && variants==='Movies') {
          setFormattedRuntime(formatRuntime(movieData.data.runtime))
          setreleaseYear(movieData.data.release_date.split('-',1))
        }
        if (recommendations.isLoading===false && variants==='Movies') {
         setRecommendationArray(recommendations.data.results.slice(0,3)) 
        }
        if (serieRecommendations.isLoading===false && variants==='Tv-series'){
            

        //setSerieRecommendationArray(serieRecommendations.data.results.slice(0,3))
        }
    },[movieData.isLoading,recommendations.isLoading,serieData.isLoading])


    if (variants==='Movies') {
      return (
        <>
        <div className="  w-screen  md:relative ">
    
        <Sidebar/>
        <div className="w-screen lg:w-[85vw] p-3   flex flex-col rounded-md space-y-4 lg:p-10 absolute lg:left-[15vw]">
        <MovieTrailer isLoading={movieData.isLoading} image={movieData?.data?.backdrop_path} />
        <MovieTitle variants="Movies" isLoading={movieData.isLoading} runtime={formattedRuntime} title={movieData?.data?.title} genres={movieData?.data?.genres} yearofrelease={releaseYear}/>
    
        <MainBody variants='Movies' isLoading={movieData.isLoading} overview={movieData?.data?.overview} movieid={movieId} recommendations={recommendationArray}/>
    
          
          <Footer/>
        </div>
        
        </div>
        
        </>
      )
    }else if (variants==='Tv-series'){
      return (
        <>
        <div className="  w-screen  md:relatie">
    
        <Sidebar/>
        <div className="w-screen lg:w-[85vw] p-3  absolute lg:left-[15vw]  flex flex-col rounded-md space-y-4 lg:p-10 ">
        <MovieTrailer isLoading={serieData.isLoading} image={serieData.data.backdrop_path} />
        <MovieTitle isLoading={serieData.isLoading} seasons={serieData?.data?.results?.number_of_seasons} variants="Tv-series" runtime={formattedRuntime} title={serieData?.data?.name} genres={serieData?.data?.genres} yearofrelease={seriereleaseYear}/>
    
        <MainBody variants="Tv-series" isLoading={serieData.isLoading} overview={serieData?.data?.overview} movieid={movieId} recommendations={serieRecommendationArray}/>
    
          
          <Footer/>
        </div>
        
        </div>
        
        </>
      )
    }
  
}

export default Movie