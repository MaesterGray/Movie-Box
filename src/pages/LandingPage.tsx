import MovieSlider from "../Components/MovieSlider"
import Footer from "../Components/Footer"
import {useState,useEffect} from 'react'
import Navigation from "../Components/Navigation"
import Showroom from "../Components/Showroom"
import Header from "../Components/Header"
import Drawer from "../Components/Drawer"




const LandingPage:React.FC = () => {
  const [renderstate,setrenderstate]= useState<'Movies'|'Tv-series'>('Movies')

  const [sidebarIsOpen,setSidebarIsOpen] = useState(false)

    const updater:React.Dispatch<React.SetStateAction<'Movies'|'Tv-series'>> = (param)=>{
      setrenderstate(param)
    }
    useEffect(()=>{
    },[renderstate])

  return (
      <div className="dark:bg-slate-800">
      <Header stateupdater={setSidebarIsOpen} page=""/>
     {renderstate==='Movies'? <MovieSlider variant="Movies" /> : <MovieSlider variant="Tv-series"/>}
      <Navigation state={renderstate} stateUpdater={updater}/>
        {renderstate==='Movies'?<Showroom variants={renderstate}/>:<Showroom variants={renderstate}/>}
        <Footer/>
        <Drawer stateupdater={setSidebarIsOpen} isOpen={sidebarIsOpen}/>
        </div>
        
  )
}

export default LandingPage