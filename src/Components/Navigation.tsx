import React from 'react'

type Props ={
  state:string,
  stateUpdater:React.Dispatch<React.SetStateAction<string>>

}


const Navigation:React.FC<Props> = ({state,stateUpdater}) => {
    const routes =['Movies','Tv-series']
  return (
    <div className='flex w-screen h-[5vh] justify-center space-x-3'>
        <span className={state==='Movies'? ` scale-105 text-red-500  cursor-pointer flex flex-col items-center`:` cursor-pointer text-red-500 `} onClick={()=>stateUpdater(routes[0])}>
            <p>Movies</p>
            <div className={state==='Movies'?`bg-red-500 rounded-md w-7 h-1`:'hidden'}></div>
        </span>
        <span className={state==='Tv-series'? ` scale-105 text-red-500 cursor-pointer flex flex-col items-center `:` cursor-pointer `} onClick={()=>stateUpdater(routes[1])}>
            <p>Tv-series</p>
            <div className={state==='Tv-series'?`bg-red-500 rounded-md w-7 h-1`:'hidden'}></div>
        </span>
    </div>
  )
}

export default Navigation