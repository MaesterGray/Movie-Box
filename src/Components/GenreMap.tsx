import React from 'react'
import {useEffect}from 'react'
import GenrePellet from './GenrePellet'
const genres =  [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Sci-Fi"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

type Props = {
    genreIds : [id:number,name:string]|number[],
    
}

type genre ={
  name?:string
}

const GenreMap:React.FC<Props> = ({genreIds}) => {

    useEffect(()=>{

    })
  return (
    <div className='flex space-x-3 overflow-x-auto h-[full]'>
      {typeof(genreIds[0])==='object'?genreIds.map((object:genre,index)=>{return(<GenrePellet key={index} genre={object.name}/>)}):
      genreIds.map((id,index)=>{
        const genre = genres.find((genre)=>genre.id===id);
       return (<GenrePellet key={index} genre={genre?.name}/>)
       })
       }
      </div>
  )
}

export default GenreMap