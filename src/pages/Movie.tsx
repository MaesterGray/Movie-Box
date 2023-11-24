import { useParams } from "react-router-dom"
import {  useMovieId, useRecommendation } from "../hooks/useCategoryFetch"
import { useEffect,useState } from "react"
import Footer from "../Components/Footer"
import Sidebar from "../Components/Sidebar"
import MovieTrailer from "../Components/MovieTrailer"
import MovieTitle from "../Components/MovieTitle"
import MainBody from "../Components/MainBody"

type props ={
  variants:'Movies'|'Tv-series'
}


const Movie:React.FC<props> = ({variants}) => {
    const {movieId} = useParams()
    const movieData = useMovieId(movieId,variants)
    const recommendations = useRecommendation(movieId,variants)
    const [recommendationArray,setRecommendationArray] = useState([])
    const [seasons,setseasons] = useState()
    const [formattedRuntime,setFormattedRuntime] = useState('')
    const [releaseYear, setreleaseYear] = useState('')
    

    

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
         setRecommendationArray(recommendations.data.results.slice(0,3)) 

        }
        if ( movieData.isLoading===false && variants==='Tv-series'){
        setRecommendationArray(recommendations.data.results.slice(0,3))
        setseasons(movieData.data.seasons.length)
        setreleaseYear(movieData.data.first_air_date.split('-',1))

        }
    },[movieData.isLoading,recommendations.isLoading,])


      return (
        <>
        <div className="  w-screen  md:relative bg-slate-800">
    
        <Sidebar/>
        <div className="w-screen lg:w-[85vw] p-3   flex flex-col rounded-md space-y-4 lg:p-10 absolute lg:left-[15vw] dark:bg-slate-800">
        <MovieTrailer isLoading={movieData.isLoading} image={movieData?.data?.backdrop_path} />
        {<MovieTitle variants={variants} isLoading={movieData.isLoading} runtime={formattedRuntime} title={variants==='Movies'?movieData?.data?.title:movieData?.data?.name} genres={movieData?.data?.genres} yearofrelease={releaseYear} seasons={seasons} />}
    
        {<MainBody variants={variants} isLoading={movieData.isLoading} overview={movieData?.data?.overview} movieid={movieId} recommendations={recommendationArray}/>}
    
          
          <Footer/>
        </div>
        
        </div>
        
        </>
      )
      
}

export default Movie