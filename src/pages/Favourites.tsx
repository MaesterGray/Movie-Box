import React from 'react'
import useFavourites from '../store/favourites'
import MovieCard from '../Components/MovieCard'
import Sidebar from '../Components/Sidebar'
import { MovieProps } from '../types'



const Favourites = () => {
  const favouriteMovies = useFavourites((state)=>state.favouriteMovies)
  const addtofavouriteMovies = useFavourites((state)=>state.addtofavouriteMovies)
  return (
    <div className=' w-screen h-screen md:relative '>

      <Sidebar/>
      <div className=' flex flex-col space-y-3 w-screen lg:w-[85vw] p-3 absolute lg:left-[15vw]'>

        <div className='w-fit h-fit p-1 lg:p-3 flex flex-col'>
        <h1 className='w-full text-center font-bold text-lg'>Favourite Movies</h1>
        <div className=' flex flex-wrap space-x-1'>{favouriteMovies.map((movie)=>(<MovieCard image={movie.image} id={movie.id}  title={movie.title} rating={movie.rating} debut={movie.debut} variants={movie.variants} genres={movie.genres}/>))}</div>
        </div>
       
       <div className='w-fit h-fit p-3 flex flex-col '>
       <h1 className=' w-full text-center font-bold text-lg'>Favourite Series</h1>
        <div className=' flex flex-wrap'>{}</div>
       </div>
        
      </div>

    </div>
  )
}

export default Favourites