import React,{ChangeEvent, useRef,useState} from 'react'
import Logo from './Logo'
import { AiOutlineMenu,AiOutlineSearch } from 'react-icons/ai'
import { useSearchFetch } from '../hooks/useCategoryFetch'
import { Link } from 'react-router-dom'


const Header:React.FC = () => {
    const searchRef = useRef(null)
  const [movieSearch,setMovieSearch] = useState('')
  const searchResults = useSearchFetch(movieSearch)


  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setMovieSearch(e.target.value)
    console.log(movieSearch,searchResults.data)
  }
  return (
    <div className='w-screen top-[5%] flex justify-evenly absolute md:top-[10%]'>
        <Logo variant='slider'/>
        <div className='hidden md:w-[30vw] h-[2vw]  border border-white rounded-md md:flex'><input ref={searchRef} className='w-[90%] bg-transparent placeholder:text-white focus:outline-none border-r border-r-white px-2 text-white ' placeholder='What are you interested in?' type="search" name="" id="" onChange={handleChange} /> <div className='text-white flex w-[10%] justify-center items-center '><AiOutlineSearch size={15}/></div></div>

        <div className=' h-[10vh] space-x-3  rounded-sm flex'>
            <span className='   text-white md:font-bold lg:font-bold'>Sign in</span>
             <div className=' w-[3vh] h-[3vh] md:h-[2vw] md:w-[2vw] bg-rose-700 flex text-white justify-center items-center rounded-full'><AiOutlineMenu size={15}/></div>
       <Link to={'/Search'}> <div className=' text-white  md:hidden'><AiOutlineSearch size={25}/></div></Link>

              </div>

      </div>
  )
}

export default Header