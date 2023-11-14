import { useNavigate } from "react-router-dom"
import GenreMap from "./GenreMap"
import { AiFillHeart } from "react-icons/ai"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFavourites from "../store/favourites";
import {motion} from 'framer-motion'


type Props ={
image:string,
title:string,
rating:number,
debut:string,
id:number
genres:[
  id:number,
  name:string
],
variants:'Movie'|'Tv-serie'

}


const imageBase = 'https://image.tmdb.org/t/p/original/'


const MovieCard:React.FC<Props> = ({image,title,rating,debut,id,genres,variants}) => {
  const favouriteMovies = useFavourites((state)=>state.favouriteMovies)
  const favouriteSeries = useFavourites((state)=>state.favouriteSeries)
  const addtofavouriteMovies = useFavourites((state)=>state.addtofavouriteMovies)
  const addtofavouriteSeries = useFavourites((state)=>state.addtofavouriteSeries)

const navigate = useNavigate()

const addToFavourites = (e:Event)=>{
e.stopPropagation();

if (variants==='Movie') {
  if (favouriteMovies.some(obj => obj.id === id )) {
  ''
  }else{
    addtofavouriteMovies({
      image,
      title,
      id,
      rating,
      debut,
      variants,
      genres
    });
  toast(`${title} has been added to your favourite movies`,{
    toastId:id,
    progressClassName:' bg-violet-700'
  })
  
  }
}else{
  if (favouriteSeries.includes(id)) {
  ''
  }else{
    addtofavouriteSeries({
      image:image,
      title:title,
      id:id
    });
  toast(`${title} has been added to your favourite series`,{
    toastId:id,
    progressClassName:' bg-violet-700'
  })
  
  }
}



}

  return (
    <motion.div initial={{opacity:0, scaleX:0.7}} whileInView={{opacity:1,scaleX:1}} transition={{delay:0.3,duration:0.5,}} className="h-[90%] w-[50%] sm:w-[25%] md:w-[20%] lg:w-[15%]  sm:space-y-1  flex-col space-y-1 flex-shrink-0  rounded-md hover:scale-110 hover:z-10 bg-gray-200 shadow-sm relative" onClick={()=>{if (variants==='Movie') {
      navigate(`/Movies/${id}`) 
    }else{
      navigate(`/Tv-series/${id}`)
    }}}>
        <div className={favouriteMovies.some(obj => obj.id === id)? `z-10 h-7 bg-gray-100 bg-opacity-50  w-7 rounded-full  absolute right-[3%] top-[3%] flex items-center justify-center text-red-500 cursor-pointer`:`z-10 h-7 bg-gray-100 bg-opacity-50  w-7 rounded-full  absolute right-[3%] top-[3%] flex items-center justify-center text-gray-100 cursor-pointer`} onClick={addToFavourites}><AiFillHeart /></div>

      <div className="w-full h-[55%] rounded-md ">
        <img className="object-full w-full h-full rounded-t-md" src={`${imageBase}${image}`} alt="" />
      </div> 
        

     <div className=" h-[45%] flex flex-col space-y-2   p-3 w-full h">
     <small className=" text-gray-400 text-sm">{debut}</small>
        <h1 className=" text-black text-lg font-bold  truncate w-full h-[20%]  ">{title}</h1>
        <span>Rating: {rating}</span>
        <small className="  font-thin w-full"><GenreMap genreIds={genres}/></small>
     </div>
     
    </motion.div>
  )
}

export default MovieCard