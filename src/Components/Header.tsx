import React,{ChangeEvent, useRef,useState} from 'react'
import Logo from './Logo'
import { AiOutlineMenu,AiOutlineSearch } from 'react-icons/ai'
import { useSearchFetch } from '../hooks/useCategoryFetch'
import { Link } from 'react-router-dom'
type prop={
  page:'movie'|'',
  stateupdater:React.Dispatch<React.SetStateAction<boolean>>
}


const Header:React.FC<prop> = ({page,stateupdater}) => {
    const searchRef = useRef(null)
  const [movieSearch,setMovieSearch] = useState('')
  const searchResults = useSearchFetch(movieSearch)


  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setMovieSearch(e.target.value)
    console.log(movieSearch,searchResults.data)
  }
  return (
    <div className={page==='movie'?`lg:hidden w-screen font-DmSans top-0 sticky flex justify-evenly   dark:bg-slate-800 shadow-md h-[10vh] md:h-[7vh] items-center z-50 `:`w-screen font-DmSans top-0 sticky flex justify-evenly  dark:bg-slate-800 shadow-md h-[10vh] md:h-[7vh] items-center z-50  `}>
        <Logo variant='slider'/>
        <div className='hidden md:w-[30vw] h-[2vw]  border border-white rounded-md md:flex '><input ref={searchRef} className='w-[90%] bg-transparent placeholder:text-white placeholder:font-DmSans focus:outline-none border-r border-r-white px-2 text-white ' placeholder='What are you interested in?' type="search" name="" id="" onChange={handleChange} /> 
        <div className='text-white flex w-[10%] justify-center items-center '><AiOutlineSearch size={15}/></div>
        </div>

             <div className=' w-[3vh] h-[3vh] md:h-[2vw] md:w-[2vw] cursor-pointer  flex text-white justify-center items-center rounded-full' onClick={()=>stateupdater(true)}><AiOutlineMenu className='w-[90%] h-[90%]'/></div>
             
       <Link to={'/Search'}> <div className=' text-white  md:hidden'><AiOutlineSearch size={25}/></div></Link>


      </div>
  )
}

export default Header