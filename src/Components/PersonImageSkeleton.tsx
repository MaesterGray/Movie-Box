import React from 'react'

const PersonImageSkeleton = () => {
  return (
    <div className=' animate-pulse w-[13vh] h-[14vh] sm:h-[10vw] sm:w-[10vw]  md:w-[10vw] md:h-[10vw]  flex flex-col space-y-2 items-center '>
                <div className=' w-[10vh] h-[10vh] sm:h-[8vw] sm:w-[8vw]  md:w-[8vw] md:h-[8vw] rounded-full bg-gray-300'></div>
                <div className=' w-[50%] h-[10%] rounded-full bg-gray-300'></div>
    </div>
  )
}

export default PersonImageSkeleton