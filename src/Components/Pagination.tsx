import React from 'react'

type props ={
  pages:number,
  state:number,
  stateUpdater:React.Dispatch<React.SetStateAction<number>>
}

const Pagination = ({pages,state,stateUpdater}:props) => {
    const placeholders =[1,2,3]
  return (
    <div className=' flex w-full justify-center items-center font-DmSans'>
        <div className=' w-[20vw] h-[3vh] flex space-x-1'>
        {placeholders.map((number)=>(<div key={number} className={ number === state?` h-full w-[33.3%] flex text-center border border-rose-500 text-rose-500 rounded-md place-content-center`:`  h-full w-[33.3%]  flex place-content-center border border-gray-500 cursor-pointer dark:text-white rounded-md`} onClick={()=>stateUpdater(number)}> {number}</div>))}
    </div>
    </div>
    
  )
}

export default Pagination