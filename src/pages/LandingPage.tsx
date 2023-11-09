import { QueryClient,QueryClientProvider } from "@tanstack/react-query"
import MovieSlider from "../Components/MovieSlider"
import ShowRoomHoc from "../Components/ShowRoomHoc"
import Footer from "../Components/Footer"
import {useState,useEffect} from 'react'
import Navigation from "../Components/Navigation"

const queryClient = new QueryClient()



const LandingPage:React.FC = () => {
  const [renderstate,setrenderstate]= useState('Movies')

    const updater = (param)=>{
      setrenderstate(param)
    }
    useEffect(()=>{
      console.log(renderstate)
    },[renderstate])

  return (
    <QueryClientProvider client={queryClient}>
     {renderstate==='Movies'? <MovieSlider variant="Movies" /> : <MovieSlider variant="Tv-series"/>}
      <Navigation state={renderstate} stateUpdater={updater}/>
        {renderstate==='Movies'?<ShowRoomHoc variants="Movies" />:<ShowRoomHoc variants="Tv-series"/>}
        <Footer/>
    </QueryClientProvider>
  )
}

export default LandingPage