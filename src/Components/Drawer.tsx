import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import { createPortal } from 'react-dom'
import NavigationPellet from './NavigationPellet'
import Logo from './Logo'

import { routes } from './Sidebar'

type props ={
    isOpen:boolean,
    stateupdater:React.Dispatch<React.SetStateAction<boolean>>
}

const Drawer = ({isOpen,stateupdater}:props) => {
 const location = useLocation()
 const[active,setactive]= useState<'Movies'|'Tv-series'|'Favourites'>('Movies')

  useEffect(()=>{
      if (location.pathname.includes('Movies')) {
          setactive('Movies')
      }else if(location.pathname.includes('Tv-series')){
          setactive('Tv-series')
      }else if (location.pathname.includes('Favourites')){
        setactive('Favourites')
      }
  },[])
  return(
  createPortal (
   isOpen&&<div className=' w-screen h-screen   backdrop:blur-sm  top-0 z-50 fixed flex justify-center items-center' onClick={()=>stateupdater(!isOpen)}>
        <div className=' w-[50%] h-[50%] bg-black flex flex-col space-y-5 rounded-md shadow-lg '>
        <div className=' bg-black w-full h-[10%] flex justify-center items-center rounded-md'><Logo variant='sidebar'/></div>

          {routes.map((route)=>(<NavigationPellet route={route.route} key={route.display} variant={route.display} active={active}/>))}
        </div>

    </div>
  ,document.body)
  )
}

export default Drawer