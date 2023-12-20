import React from 'react'
import { useCastAndCrew } from '../hooks/useCategoryFetch'
//import { useSerieCastAndCrew } from '../hooks/useCategoryFetch'
import {useEffect,useState} from 'react'
import PersonImage from './PersonImage'
import PersonImageSkeleton from './PersonImageSkeleton'

type props ={
    movieid?:string,
    variants:'Movies'|'Tv-series'
}

type People ={
  name:string,
  profile_path:string,
  job:string
}

const CastOrCrew:React.FC<props> = ({movieid,variants}) => {
    const castandcrew = useCastAndCrew(movieid,variants)
    const [directors,setDirectors] = useState([])
    const placeholder =[1,2,3,4,5,6]


    useEffect(()=>{
            if (castandcrew.isLoading===false) {
                    setDirectors(castandcrew.data.crew.filter((object:People)=>{ return object.job==='Director'}))
               

            }
    },[castandcrew.isLoading])

  return (
    <div className=' flex flex-col space-y-3 dark:text-white'>

            <div className=' flex flex-col space-y-2 w-[100%]  '>
                <h1 className=' font-bold'>Directors</h1>
                <div className='flex space-x-2'>{castandcrew.isLoading?<PersonImageSkeleton/> :directors.map((director:People,index)=>(<PersonImage key={index}  name={director.name} image={director.profile_path} />))}</div>
            </div>
            
            <div className='flex flex-col space-y-1 w-[100%] overflow-x-auto'>
                <h1 className=' font-bold'>Cast</h1>
                <div className=' flex space-x-4'>{castandcrew.isLoading?placeholder.map(()=>(<PersonImageSkeleton/>)) :castandcrew?.data?.cast?.map((cast:People,index:number)=>(< PersonImage key={index}  name={cast.name} image={cast.profile_path} />))}</div>
                </div>

    </div>
  )
}

export default CastOrCrew