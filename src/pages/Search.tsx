import React,{useState,useRef, ChangeEvent} from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSearchFetch } from '../hooks/useCategoryFetch'
import { useTvSeriesSearch } from '../hooks/useCategoryFetch'
import { movieResult } from '../Components/Showroom'

import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import MovieCard from '../Components/MovieCard'



const Search = () => {
    const searchRef = useRef(null)
    const [movieSearch,setMovieSearch] = useState('')
    const [seriesSearch,setseriessearch] = useState('')
    const searchResults = useSearchFetch(movieSearch)
    const seriesResults = useTvSeriesSearch(seriesSearch)

    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setMovieSearch(e.target.value)
        setseriessearch(e.target.value)
        console.log(seriesSearch,seriesResults)
        console.log(movieSearch,searchResults.data)
      }
  return (
    <div className=' w-screen h-screen bg-black flex flex-col items-center'>

        <div className=' h-[5vh] text-white px-2 flex items-center'>
            <Link to={'/'}><BiArrowBack size={20}/></Link>
            </div>
        <div className='w-full h-[5vh] flex space-x-2 items-center bg-gray-400'>
            <div className='w-[8%] h-[90%] flex justify-center items-center text-white'><AiOutlineSearch size={20}/></div>
            <input onChange={handleChange} ref={searchRef} className=' w-[90%] h-[90%] outline-none bg-transparent placeholder:text-white flex items-center text-white' type="text" placeholder='Search Movies,Tv-series' />
        </div>
        <h1 className='w-full text-center text-white font-bold'>Results</h1>
    <div className='flex flex-col w-[90%] h-[40vh] space-y-1'>
        <h1 className='text-white h-[5%]'>Movies</h1>
        <div className='w-full h-[92%] '>{searchResults.isLoading?'nothing here':searchResults.data.results.map((result:movieResult)=>{<MovieCard id={result.id} variants='Movie' image={result.poster_path} genres={result.genre_ids} debut={result.release_date} rating={result.vote_average} title={result.original_title}  />})}</div>
    </div>

    </div>
  )
}

export default Search