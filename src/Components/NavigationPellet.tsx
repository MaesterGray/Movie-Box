import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BsCameraReels,BsCardList} from 'react-icons/bs'
import {  useNavigate } from 'react-router-dom'
import {GrSchedulePlay} from 'react-icons/gr'
import {IoExitOutline} from 'react-icons/io5'
import { LuMonitorPlay } from 'react-icons/lu'

type Props ={
    variant:'Home'|'Movies'|'Tv-series'|'Upcoming'|'Logout'|'Favourites',
    active:'Movies'|'Tv-series'|'Favourites',
    route:string
}

const NavigationPellet = ({variant,active,route}:Props) => {
   const navigate = useNavigate()

    if (variant ==='Home') {
        return (
        <div className=' items-center justify-center h-[8%] w-full  flex space-x-3 text-black cursor-pointer' onClick={()=>navigate(route)}> <AiOutlineHome size={20}/> <span>{variant}</span> </div>
          )
    }else if (variant ==='Movies') {
        return( <div className= {active==='Movies'?`items-center justify-center h-[8%] flex space-x-3 text-black border-r-4 bg-rose-700 bg-opacity-10 border-r-rose-700 w-full cursor-pointer`:`items-center w-full justify-center h-[8%] flex space-x-3 text-black cursor-pointer`} onClick={()=>navigate(route)} > <BsCameraReels size={20}/> <span>{variant}</span> </div>)
        
    }else if (variant ==='Tv-series') {
        return(<div className={active==='Tv-series'? ` items-center justify-center h-[8%] flex space-x-3 text-black bg-opacity-10 border-r-4 border-r-rose-700 bg-rose-700 w-full cursor-pointer`:`items-center justify-center h-[8%] flex space-x-3 text-black w-full cursor-pointer`} onClick={()=>navigate(route)}> <LuMonitorPlay size={20}/> <span>{variant}</span> </div>) 
    }else if (variant ==='Upcoming') {
        return(<div className=' items-center justify-center h-[8%] flex space-x-3 text-black w-full cursor-pointer'> <GrSchedulePlay  size={20}/> <span>{variant}</span> </div>)
         
    }else if (variant ==='Logout') {
         return(<div className=' items-center justify-center h-[8%] flex space-x-3 text-black w-full cursor-pointer'> <IoExitOutline size={20}/> <span>{variant}</span> </div>)
    }else if(variant==='Favourites'){
        return( <div className= {active==='Favourites'?`items-center justify-center h-[8%] flex space-x-3 text-black border-r-4 bg-rose-700 bg-opacity-10 border-r-rose-700 w-full cursor-pointer`:`items-center justify-center w-full h-[8%] flex space-x-3 text-black cursor-pointer`} onClick={()=>navigate(route)}> <BsCardList size={20}/> <span>{variant}</span> </div>)
  
}
}

export default NavigationPellet