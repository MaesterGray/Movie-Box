import React from 'react'

const positions =[0,1,2,3,4,5,6,7,8,9,]





const SliderNavigation = ({presentIndex,stateUpdater}) => {

  function update (position:number){
    if(position===presentIndex){
''
    }else{
      stateUpdater(position)
    }
    }
  return (
    <div className='hidden lg:flex flex-col space-y-3 text-orange-600 absolute right-[2%] top-[35%]  border border-black  rounded-md backdrop-blur-lg justify-center items-center cursor-pointer'>
    {positions.map((position)=>(
        <div key={position} className={position===presentIndex?`flex scale-105  space-x-3  justify-center items-center`:`flex justify-center items-center`} onClick={()=>update(position)}>
            <div className={position===presentIndex? `w-4 h-1 rounded-sm bg-orange-500  `:` hidden`}></div>
            <p>{position + 1 }</p> 
          </div>
    ))
      }</div>
    )
}

export default SliderNavigation