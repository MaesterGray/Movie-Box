import React from 'react'
import Showroom from './Showroom'


// type Props={
//     categories:string[]
// }

const categories:string[] =[
  'Discover',
  'Action',
  'Adventure',
  'Animation',
  'Comedy'
]
type props = {
  variants:'Movies'|'Tv-series'
}

const ShowRoomHoc:React.FC<props> = ({variants}) => {

  return (
    <div className='overflow-y-auto flex flex-col h-fit w-screen  space-y-3 md:space-y-4 dark:bg-slate-800'>
        {variants==='Movies'?categories.map((category)=>(<Showroom variants='Movies' key={category} category={category}/>)):categories.map((category)=>(<Showroom variants='Tv-series' category={category} key={category}/>))}

        
    </div>
  )
}

export default ShowRoomHoc