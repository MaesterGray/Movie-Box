import { useNavigate } from "react-router-dom"
import GenreMap from "./GenreMap"
import { motion } from "framer-motion";
import { MovieProps } from "../types";
import FavouriteButton from "./FavouriteButton";


const imageBase = 'https://image.tmdb.org/t/p/original/'


const MovieCard:React.FC<MovieProps> = ({image,title,rating,debut,id,genres,variants}) => {
  

const navigate = useNavigate()

const handleNavigate = ()=>{
  if (variants==='Movies') {
    navigate(`/Movies/${id}`) 
  }else{
    navigate(`/Tv-series/${id}`)
  }
}


  return (
    <motion.div initial={{opacity:0, scaleX:0.7}} whileInView={{opacity:1,scaleX:1}} transition={{delay:0.3,duration:0.5,}} className=" aspect-[9/16] w-[47%] sm:w-[25%]  md:w-[25%]  lg:w-[15%]   sm:space-y-1  flex-col space-y-1 flex-shrink-0  rounded-md hover:scale-110 hover:z-10 bg-gray-200 shadow-sm relative overflow-clip font-DmSans" onClick={handleNavigate}>

      <div className="w-full h-[55%] rounded-md ">
        <img className="object-full w-full h-full rounded-t-md" src={`${imageBase}${image}`} alt="" />
      </div> 
        
      <FavouriteButton image={image} title={title} rating={rating} debut={debut} id={id} genres={genres} variants={variants}  />
     <div className=" h-[45%] flex flex-col space-y-2   p-3 w-full h">
     <small className=" text-gray-400 text-sm">{debut}</small>
        <h1 className=" text-black text-lg font-bold  truncate w-full h-[20%]  ">{title}</h1>
        <span className=" flex justify-between text-lg font-semibold"><small>Rating: {rating}</small> <small> {variants==='Movies'?'Movie':'Serie'}</small></span>
        <small className="  font-thin w-full h-[10%]"><GenreMap genreIds={genres}/></small>
     </div>
     
    </motion.div>
  )
}

export default MovieCard