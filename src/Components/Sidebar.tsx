import React,{useEffect,useState} from 'react'
import Logo from './Logo'
import NavigationPellet from './NavigationPellet'
import { useLocation } from 'react-router-dom'


type Routes = {
  display:"Movies" | "Tv-series" | "Home" | "Upcoming" | "Favourites" | "Logout",
  route:string
}[]

const routes:Routes=[
    {
      display:'Home',
     route:'/'
    },
    {
    display:'Movies',
    route:''
    },
    {
    display:'Tv-series',
    route:''
    },
   
    {display:'Upcoming',
    route:''
  },
    {
        display:'Favourites',
        route:'/Favourites'
    }
  //   {
  //   display:'Logout',
  //   route:'/'
  //  },
  ]

const Sidebar = () => {
    const[active,setactive]= useState<'Movies'|'Tv-series'|'Favourites'>('Movies')
const location = useLocation()

useEffect(()=>{
    if (location.pathname.includes('Movies')) {
        setactive('Movies')
    }else if(location.pathname.includes('Tv-series')){
        setactive('Tv-series')
    }else if (location.pathname.includes('Favourites')){
      setactive('Favourites')
    }
},[])


  return (
    <div className="hidden lg:w-[15vw] lg:h-screen lg:rounded-r-3xl lg:items-center lg:flex lg:flex-col lg:space-y-5 lg:py-10 lg:border lg:border-gray-400 lg:fixed "> 
    <Logo variant="sidebar"/>
    {routes.map((route)=>(<NavigationPellet key={route.display} variant={route.display} active={active} route={route.route}/>))}

        <div className=" h-[25%] rounded-lg border border-red-600 bg-red-50 flex flex-col w-[70%] space-y-3 pb-1 pt-2 px-2">
          <p className=" font-semibold text-sm">Play movie quizzes and earn free tickets</p>
          <small>50k people are playing now</small>
          <button className=" bg-[rgba(190,18,60,0.2)] text-[rgb(190,18,60)] rounded-full w-[90%] py-1 text-center">Start playing</button>
        </div>
    </div>
  )
}

export default Sidebar