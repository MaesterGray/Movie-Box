import React from 'react'

type Props = {
    genre?:string
}

const GenrePellet:React.FC<Props> = ({genre}) => {
  return (
    <div className='  text-red-400 border border-pink-100 rounded-lg flex justify-center items-center text-sm'>{genre}</div>
  )
}

export default GenrePellet