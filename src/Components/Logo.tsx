import {LuMonitorPlay} from 'react-icons/lu'
import { clsx } from 'clsx'

interface Props{
variant:'slider'|'sidebar'
}

const Logo = ({variant}:Props) => {
  return (
    <div className={clsx(' flex space-x-3 ',
    {
        'text-black':variant === 'sidebar',
        'text-white':variant ==='slider'
    }
    )}>
    <div className=' w-[3vh] h-[3vh] md:h-[2vw] md:w-[2vw]  bg-rose-700 flex justify-center items-center rounded-full text-white'>
      <LuMonitorPlay size={15}/>
      </div> 
      <span className='font-semibold  text-base  md:text-lg md:font-bold lg:text-xl'>MovieBox</span>
       </div>
    
  )
}

export default Logo