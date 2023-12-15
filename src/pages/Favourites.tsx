import React from 'react'
import useFavourites from '../store/favourites'
import MovieCard from '../Components/MovieCard'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import { useState } from 'react'
import Drawer from '../Components/Drawer'



const Favourites = () => {
  const [sidebarIsOpen,setSidebarIsOpen] = useState(false)

  const favouriteMovies = useFavourites((state)=>state.favouriteMovies)
  const favouriteSeries = useFavourites((state)=> state.favouriteSeries )
  return (
    <>
    <Header stateupdater={setSidebarIsOpen} page='movie'/>
    <div className=' w-screen h-screen md:relative '>

      <Sidebar/>
      <div className=' flex flex-col space-y-3 w-screen lg:w-[85vw] p-2 absolute lg:left-[15vw] dark:bg-slate-800'>

        <div className='w-full h-fit p-1 lg:p-3 flex flex-col  dark:bg-slate-800'>
        <h1 className='w-full text-center font-bold text-lg dark:text-white'>Favourite Movies</h1>
        <div className=' flex flex-wrap gap-3'>{favouriteMovies.map((movie)=>(<MovieCard image={movie.image} id={movie.id}  title={movie.title} rating={movie.rating} debut={movie.debut} variants={movie.variants} genres={movie.genres}/>))}</div>
        </div>
       
       <div className='w-full h-fit p-3 flex flex-col  dark:bg-slate-800'>
       <h1 className=' w-full text-center font-bold text-lg dark:text-white'>Favourite Series</h1>
        <div className=' flex flex-wrap gap-3'>{favouriteSeries.map((movie)=>(<MovieCard image={movie.image} id={movie.id}  title={movie.title} rating={movie.rating} debut={movie.debut} variants={movie.variants} genres={movie.genres}/>))}</div>
       </div>
        
      </div>

    </div>
    <Drawer isOpen={sidebarIsOpen} stateupdater={setSidebarIsOpen}/>
    </>
  )
}

export default Favourites