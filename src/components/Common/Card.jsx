import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({ data, title, isClickable = true }) {
  const navigate = useNavigate();
  const image = data.poster_path || data.backdrop_path || data.profile_path;
  const handleClick = () => {
    if (isClickable) {
      navigate(`/${data.media_type || title}/details/${data.id}`);
    }
  };

  return (
    image && (
      <div
        className='w-[14rem] h-[18rem] hover:scale-105 duration-200 rounded-md overflow-hidden flex-shrink-0 bg-[#18181B] cursor-pointer shadow-lg shadow-zinc-950'
        onClick={handleClick}
      >
        <img
          src={`https://image.tmdb.org/t/p/original${image}`}
          className='h-full w-full object-cover'
          alt={`${title} poster`}
        />
      </div>
    )
  );
}

export default Card;
