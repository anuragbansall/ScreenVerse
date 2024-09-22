import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Card({data, navigateTo}) {

    const navigate = useNavigate()

    const image = data.poster_path || data.backdrop_path || data.profile_path

  return (
    image &&
    <div className='w-[14rem] h-[18rem] hover:scale-105 duration-200 rounded-md overflow-hidden flex-shrink-0 bg-[#18181B] cursor-pointer shadow-lg shadow-zinc-950' onClick={() => navigate(navigateTo)}>
        <img src={`https://image.tmdb.org/t/p/original${image}`} className='h-full w-full object-cover' />
    </div>
  )
}

export default Card