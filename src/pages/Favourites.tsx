import React from 'react'
import useFavourites from '../store/favourites'
import MovieCard from '../Components/MovieCard'
import Sidebar from '../Components/Sidebar'



const Favourites = () => {
  const favouriteMovies = useFavourites((state)=>state.favouriteMovies)
  const addtofavouriteMovies = useFavourites((state)=>state.addtofavouriteMovies)
  return (
    <div className=' w-screen h-screen lg:flex lg:space-x-5'>

      <Sidebar/>
      <div className=' flex flex-col space-y-3'>

        <div className='w-fit h-fit p-3 flex flex-col'>
        <h1 className='w-full text-center font-bold text-lg'>Favourite Movies</h1>
        <div className=' flex flex-wrap'>{favouriteMovies.map((movie)=>(<MovieCard image={movie.image} id={movie.id}  title={movie.title}/>))}</div>
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