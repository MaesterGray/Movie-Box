import {useState,useRef, ChangeEvent,useEffect} from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSearchFetch } from '../hooks/useCategoryFetch'
import { movieResult } from '../Components/Showroom'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import MovieCard from '../Components/MovieCard'



const Search = () => {
    const searchRef = useRef(null)
    const [movieSearch,setMovieSearch] = useState('')
    const [moviesresults,setmoviesresults]= useState([])
    const [hasbeensearched,sethasbeensearched]= useState(false)
    const searchResults = useSearchFetch(movieSearch)

    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
      if (hasbeensearched===false) {
        sethasbeensearched(true)
        
      }
        setMovieSearch(e.target.value)
        console.log(movieSearch,searchResults.data)
      }

useEffect(()=>{
if (searchResults.isLoading===false) {
   setmoviesresults(searchResults.data.results) 
}


},[searchResults.isLoading,])

  return (
    <div className=' w-screen h-screen bg-black flex flex-col items-center overflow-y-auto'>

        <div className=' h-[5vh] text-white px-2 flex items-center'>
            <Link to={'/'}><BiArrowBack size={20}/></Link>
            </div>
        <div className='w-full h-[5vh] flex space-x-2 items-center bg-gray-400'>
            <div className='w-[8%] h-[90%] flex justify-center items-center text-white'><AiOutlineSearch size={20}/></div>
            <input onChange={handleChange} ref={searchRef} className=' w-[90%] h-[90%] outline-none bg-transparent placeholder:text-white flex items-center text-white' type="text" placeholder='Search Movies,Tv-series' />
        </div>

        <h1 className='w-full text-center text-white font-bold'>{hasbeensearched?'Results':'Your search results appear here'}</h1>
    <div className='flex flex-col w-[90%] mb-3  space-y-1 '>
        <div className='w-full  flex flex-wrap gap-5 justify-center'>
            {searchResults.isLoading&& hasbeensearched?
            <div className=' animate-spin  h-10 w-10 text-white'><AiOutlineLoading3Quarters className='w-full h-full'/></div>:
            moviesresults.map((result:movieResult,index)=>(<MovieCard key={index} id={result.id} variants='Movies' image={result.poster_path} genres={result.genre_ids} debut={result.release_date} rating={result.vote_average} title={result.original_title}  />))
            }
            
            </div>
    </div>
             
    </div>
  )
}

export default Search