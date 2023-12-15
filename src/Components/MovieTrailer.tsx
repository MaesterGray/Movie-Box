import React from 'react'
import {FaPlay} from 'react-icons/fa'
//<iframe width="560" height="315" src="https://www.youtube.com/embed/0fONene3OIA?si=k1hHEGep0bFKPs_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

type props={
    image:string
    isLoading:boolean,
    youtubeid:string
}

const imageBase = 'https://image.tmdb.org/t/p/original/'
//<img src={`${imageBase}${image}`} className=" object-cover w-full h-full rounded-lg "  />
const MovieTrailer:React.FC<props> = ({image,isLoading,youtubeid}) => {
  return (
    

      <div className="  w-full h-[40vh] sm:h-[60vh] md:h-[70vh] cursor-pointer relative">
        
        <div className=' w-full h-full flex-shrink-0'>{ <iframe id='player'  className='w-full h-full rounded-md' frameBorder={0}
  src={`http://www.youtube.com/embed/${youtubeid}?enablejsapi=1&origin=http://example.com`} allow='accelerometer' title='YouTube video player' picture-in-picture></iframe>}</div>
        
        </div>
        
  )
}

export default MovieTrailer