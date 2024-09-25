import React, { useEffect, useState } from 'react'
import axiosInstance from '../../utils/axios'

import { HiSpeakerphone } from "react-icons/hi";
import { IoDiscSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import PrimaryBtn from '../Common/PrimaryBtn';

function HeroSection({trendingMovieData}) {

    const randomIdx = trendingMovieData && Math.floor(Math.random() * trendingMovieData.length)
    const trendingMovie = trendingMovieData && trendingMovieData[randomIdx]

    const navigateTo = trendingMovie && `/${trendingMovie.media_type}/details/${trendingMovie.id}`

  return (
    <div className='relative w-full h-[80vh] max-h-fit sm:h-[22rem] bg-zinc-800'>
        <img src={`https://image.tmdb.org/t/p/original${trendingMovie?.backdrop_path || trendingMovie?.poster_path}`} className='h-full w-full object-cover object-top' />
        <div className="absolute flex flex-col justify-center items-start gap-6 md:gap-2 px-4 md:px-12 top-0 left-0 h-full w-full bg-[#0000009c] text-white">
            <h2 className='line-clamp-2 md:line-clamp-1 leading-tight text-[3rem] font-bold'>
                {trendingMovie?.original_title || trendingMovie?.title || trendingMovie?.name}
            </h2>
            <p className='max-w-[70ch] text-lg line-clamp-[8]'>
                {trendingMovie?.overview.slice(0, 200)}...
                <Link to={navigateTo} className='text-sky-500'>more</Link>
            </p>
            <div className='flex items-center gap-4 text-lg'>
                <div className='flex items-center gap-2'>
                    <span className='text-[#EAB308]'>
                        <HiSpeakerphone />
                    </span>
                    <p>{trendingMovie?.first_air_date || trendingMovie?.release_date}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-[#EAB308]'>
                        <IoDiscSharp />
                    </span>
                    <p className='uppercase'>{trendingMovie?.media_type}</p>
                </div>
            </div>
            <PrimaryBtn
                title={"Watch Trailer"}
                navigateTo={navigateTo}
            />
        </div>
    </div>
  )
}

export default HeroSection