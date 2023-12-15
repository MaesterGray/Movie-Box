import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";

const MovieCardSkeleton = () => {
  return (
    <div className=' aspect-[9/16] w-[47%] sm:w-[25%] md:w-1/4 lg:w-[15%]   bg-gray-400 rounded-md flex flex-col'>
      <div className="w-full h-[50%] bg-black rounded-t-md flex items-center justify-center text-white">
        <AiOutlineLoading3Quarters className=' animate-spin  '/>
      </div>
      
      <div className=" flex flex-col space-y-3 animate-pulse w-full h-[50%] items-center p-2">
      <div className=" w-[90%] h-[10%]">
        <div className="h-full w-[30%] bg-black rounded-md"></div>
      </div>
        <div className=" w-[90%] rounded-md bg-black h-[20%] "></div>
        <div className=" w-[90%] h-[15%]"><div className="h-full w-[30%] bg-black rounded-md"></div></div>
        <div></div>
        <div className=" flex space-x-2 w-[90%] h-[15%] ">
        <div className="bg-black h-full w-[33.3%] rounded-md"></div>
        <div className="bg-black h-full w-[33.3%] rounded-md"></div>
        <div className="bg-black h-full w-[33.3%] rounded-md"></div>
        
        </div>
      </div>

    </div>
  )
}

export default MovieCardSkeleton