import { QueryClient,QueryClientProvider } from "@tanstack/react-query"
import MovieSlider from "../Components/MovieSlider"
import Footer from "../Components/Footer"
import {useState,useEffect} from 'react'
import Navigation from "../Components/Navigation"
import Showroom from "../Components/Showroom"

const queryClient = new QueryClient()



const LandingPage:React.FC = () => {
  const [renderstate,setrenderstate]= useState<'Movies'|'Tv-series'>('Movies')

    const updater:React.Dispatch<React.SetStateAction<'Movies'|'Tv-series'>> = (param)=>{
      setrenderstate(param)
    }
    useEffect(()=>{
      console.log(renderstate)
    },[renderstate])

  return (
    <QueryClientProvider client={queryClient}>
     {renderstate==='Movies'? <MovieSlider variant="Movies" /> : <MovieSlider variant="Tv-series"/>}
      <Navigation state={renderstate} stateUpdater={updater}/>
        {renderstate==='Movies'?<Showroom variants={renderstate}/>:<Showroom variants={renderstate}/>}
        <Footer/>
    </QueryClientProvider>
  )
}

export default LandingPage