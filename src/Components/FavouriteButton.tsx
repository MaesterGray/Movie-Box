import React from 'react'
import { AiFillHeart } from "react-icons/ai"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFavourites from "../store/favourites";
import { MovieProps } from '../types';

const FavouriteButton:React.FC<MovieProps> = ({image,title,id,rating,debut,variants,genres}) => {

  const favouriteMovies = useFavourites((state)=>state.favouriteMovies)
  const favouriteSeries = useFavourites((state)=>state.favouriteSeries)
  const addtofavouriteMovies = useFavourites((state)=>state.addtofavouriteMovies)
  const addtofavouriteSeries = useFavourites((state)=>state.addtofavouriteSeries)
  const removeMovie = useFavourites((state)=>state.removeMovie)
  const removeSerie = useFavourites((state)=>state.removeSerie)
  const addToFavourites = (e:React.MouseEvent<HTMLDivElement>)=>{
    e.stopPropagation();
    
    if (variants==='Movies') {
      if (favouriteIncludes(favouriteMovies)) {
      removeMovie({
        image,
        title,
        id,
        rating,
        debut,
        variants,
        genres
      });
      toast(`${title} has been removed from your favourite movies`,{
        toastId:id,
      });
      console.log(favouriteMovies)
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
      })
      console.log(favouriteMovies)
      }
    }else{
      if (favouriteIncludes(favouriteSeries)) {
        removeSerie(
         { id,
          image,
          title,
          debut,
          genres,
          variants,
          rating}
        );
        toast(`${title} has been removed to your favourite series`,{
          toastId:id,
        })
      }else{
        addtofavouriteSeries({
          id,
          image,
          title,
          debut,
          genres,
          variants,
          rating
        });
      toast(`${title} has been added to your favourite series`,{
        toastId:id,
        progressClassName:' bg-violet-700'
      })
      
      }
    }
} 
    
  function favouriteIncludes (arr:MovieProps[]){
      return arr.some(obj => obj.id === id)
  }

  return (
    <div className={variants==='Movies'&& favouriteMovies.some(obj => obj.id === id)|| variants==='Tv-series'&& favouriteSeries.some(obj => obj.id==id)? `z-10 h-7 bg-gray-100 bg-opacity-50  w-7 rounded-full  absolute right-[3%] top-[3%] flex items-center justify-center text-red-500 cursor-pointer`:`z-10 h-7 bg-gray-100 bg-opacity-50  w-7 rounded-full  absolute right-[3%] top-[3%] flex items-center justify-center text-gray-100 cursor-pointer`} onClick={addToFavourites}><AiFillHeart /></div>
    
  )
}

export default FavouriteButton