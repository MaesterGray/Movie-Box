import React from 'react'

type Props ={
  state:string,
  stateUpdater:React.Dispatch<React.SetStateAction<'Movies'|'Tv-series'>>

}


const Navigation:React.FC<Props> = ({state,stateUpdater}) => {
  return (
    <div className='flex w-screen h-[5vh] justify-center items-center space-x-3 dark:bg-slate-800 font-semibold font-DmSans'>
        <span className={state==='Movies'? ` scale-105 text-red-500  cursor-pointer flex flex-col items-center`:` cursor-pointer dark:text-white  `} onClick={()=>stateUpdater('Movies')}>
            <p>Movies</p>
            <div className={state==='Movies'?`bg-red-500 rounded-md w-7 h-1`:'hidden'}></div>
        </span>
        <span className={state==='Tv-series'? ` scale-105 text-red-500 cursor-pointer flex flex-col items-center `:` cursor-pointer dark:text-white `} onClick={()=>stateUpdater('Tv-series')}>
            <p>Tv-series</p>
            <div className={state==='Tv-series'?`bg-red-500 rounded-md w-7 h-1`:'hidden'}></div>
        </span>
    </div>
  )
}

export default Navigation