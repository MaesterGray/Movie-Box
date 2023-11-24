import React from 'react'
import {AiFillFacebook , AiOutlineInstagram , AiFillLinkedin , AiFillTwitterSquare, AiFillGithub} from 'react-icons/ai'



const Footer = () => {
  return (
    <footer className=' w-full h-[15vh] flex flex-col space-y-3 justify-center items-center dark:text-white dark:bg-slate-800 font-DmSans'>
        <span className=' flex space-x-2'><AiFillFacebook size={20}/><AiOutlineInstagram size={20}/> <AiFillTwitterSquare size={20}/> <AiFillLinkedin size={20}/> <AiFillGithub size={20}/></span>
        <span className='flex   space-x-5 font-bold text-sm'>
        <p>Conditions of Use</p>
        <p>Privacy&Policy</p>
        <p>Press Room</p>
        </span>
        <small className=' text-gray-400'>&copy2023 MovieBox by Nwabuisi Chike</small>

    </footer>
  )
}

export default Footer