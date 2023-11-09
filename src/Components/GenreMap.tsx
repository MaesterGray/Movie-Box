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
      "name": "Science Fiction"
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
    genreIds : [id:number,name:string]
}

const GenreMap:React.FC<Props> = ({genreIds}) => {
    // function getGenreNamesByIds(idsToMatch:number[]) {
    //     const matchingGenres = genres.filter(genre => idsToMatch.includes(genre.id));
    //     const genreNames = matchingGenres.map(genre => genre.name);
    //     return genreNames;
    // }

    // const confirmedGenres = getGenreNamesByIds(genreIds)

    useEffect(()=>{

    })
  return (
    <div className='flex space-x-3  '>{genreIds.map((object)=>{return(<GenrePellet key={object.name} genre={object.name}/>)})}</div>
  )
}

export default GenreMap