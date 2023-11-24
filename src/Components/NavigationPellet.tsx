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

   let presentRoute

   switch (variant) {
    case 'Home':
        presentRoute = <AiOutlineHome size={20}/>
        break;
   case 'Favourites':
    presentRoute =  <BsCardList size={20}/>
        break;
    case 'Logout': 
            presentRoute = <IoExitOutline size={20}/>
        break;
    case 'Movies':
            presentRoute =  <BsCameraReels size={20}/>
        break; 
    case 'Tv-series':
            presentRoute = <LuMonitorPlay size={20}/>
        break;
    case 'Upcoming':
        presentRoute = <GrSchedulePlay  size={20}/>
        break;

    default:
        break;
   }

    
        return( 
        <div className= {active=== variant?`items-center justify-center h-[8%] flex space-x-3 text-black border-r-4 bg-rose-700 bg-opacity-10 border-r-rose-700 w-full cursor-pointer dark:text-white`:`items-center w-full justify-center h-[8%] flex space-x-3 text-black cursor-pointer dark:text-white`} onClick={()=>navigate(route)} >
             {presentRoute}
             <span>{variant}</span> 
        </div>)
        
  
}


export default NavigationPellet