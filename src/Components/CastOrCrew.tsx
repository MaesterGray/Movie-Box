import React from 'react'
import { useCastAndCrew } from '../hooks/useCategoryFetch'
import { useSerieCastAndCrew } from '../hooks/useCategoryFetch'
import {useEffect,useState} from 'react'
import PersonImage from './PersonImage'
import Skeleton from 'react-loading-skeleton'
type props ={
    movieid:number,
    variants:'Movies'|'Tv-series'
}

const CastOrCrew:React.FC<props> = ({movieid,variants}) => {
    const castandcrew = useCastAndCrew(movieid,variants)
    const [directors,setDirectors] = useState([])
    const [topcast,setTopcast] = useState([])



    useEffect(()=>{
            if (castandcrew.isLoading===false) {
                    console.log(castandcrew.data.crew)
                    setDirectors(castandcrew.data.crew.filter((object)=>{ return object.job==='Director'}))
                    console.log(directors)
                    setTopcast(castandcrew.data.cast.slice(0,5))


            }
    },[castandcrew.isLoading])

  return (
    <div className=' flex flex-col space-y-3'>

            <div className=' flex flex-col space-y-2 w-[100%] '>
                <h1 className=' font-bold'>Directors</h1>
                <div className='flex space-x-2'>{directors.map((director)=>(<PersonImage  name={director.name} image={director.profile_path} isLoading={castandcrew.isLoading}/>))}</div>
            </div>
            <div className='flex flex-col space-y-1 w-[100%] overflow-x-auto'>
                <h1 className=' font-bold'>Cast</h1>
                <div className=' flex space-x-4'>{castandcrew?.data?.cast?.map((cast,index)=>(< PersonImage key={index} isLoading={castandcrew.isLoading} name={cast.name} image={cast.profile_path} />|| <Skeleton/>))}</div>
                </div>

    </div>
  )
}

export default CastOrCrew