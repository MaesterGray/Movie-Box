import React from 'react'

const positions =[0,1,2,3,4,5,6,7,8,9,]




const SliderNavigation = ({presentIndex,stateUpdater}) => {
  return (
    <div className='hidden lg:flex flex-col space-y-3 text-orange-600 absolute right-[2%] top-[35%]  border border-black  rounded-md backdrop-blur-lg justify-center items-center cursor-pointer'>
    {positions.map((position)=>{
      if (position===presentIndex) {
        return( <div key={position} className='flex scale-105  space-x-3  justify-center items-center'><div className='w-4 h-1 rounded-sm bg-orange-500  '></div><p>{position + 1 }</p> </div>)
      }
      return(
        <div onClick={()=>{if (position === presentIndex) {
          ''
        }else{stateUpdater(position)}}}>{position + 1}</div>
      )
    })
      }</div>
    )
}

export default SliderNavigation