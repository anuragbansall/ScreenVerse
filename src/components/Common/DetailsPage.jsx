import React from 'react'
import CardsScrollContainer from './CardsScrollContainer'

import { IoMdArrowRoundBack } from "react-icons/io";
import { RiExternalLinkLine } from "react-icons/ri";
import { TiWorld } from "react-icons/ti";
import { FaImdb } from "react-icons/fa";
import PrimaryBtn from './PrimaryBtn';
import { Link, useNavigate } from 'react-router-dom';

function DetailsPage({detail, externalids, similar, recommendations, seasons, watchproviders, videos}) {
    // console.log(videos.results.filter(item => item.name === "Official Trailer"));

    const navigate = useNavigate()
    
  return (
    <div className='relative h-screen w-full text-white'>
        <img src={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`} className='h-full w-full object-cover object-top' />
        <div className="absolute top-0 left-0 px-20 py-4 h-full w-full bg-[#0000006c] backdrop-blur-sm overflow-y-auto">
            {/* Top Nav */}
            <div className='w-full py-2 flex items-center gap-6'>
                {
                    [
                        {
                            icon: <IoMdArrowRoundBack />,
                            navigateTo: -1
                        },
                        {
                            icon: <RiExternalLinkLine />,
                            link: detail.homepage,
                        },
                        {
                            icon: <TiWorld />,
                            link: `https://www.wikidata.org/wiki/${externalids.wikidata_id}`,
                        },
                        {
                            icon: <FaImdb />,
                            link: `https://www.imdb.com/title/${externalids.imdb_id}`,
                        },
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.link ? item.link : '#'}
                            className='text-2xl h-[2rem] cursor-pointer'
                            onClick={item.navigateTo ? () => navigate(item.navigateTo) : null}
                        >
                            {item.icon}
                        </a>
                    ))
                }
            </div>

            {/* main body */}
            <div className='w-full 2xl:container mx-auto'>
                {/* Hero Section */}
                <div className='w-full py-4 flex gap-20'>
                    <div className='h-[22rem] w-[15rem] bg-zinc-500 flex-shrink-0'>
                        <img src={`https://image.tmdb.org/t/p/original${detail.poster_path}`} className='h-full w-full object-cover' />
                    </div>
                    <div className='flex-grow flex flex-col items-start gap-4'>
                        <h2 className='text-5xl font-bold'>{detail.original_title || detail.original_name} <span className='text-2xl'>({new Date(detail.release_date || detail.last_air_data || detail.first_air_date).getFullYear()})</span></h2>
                        <p>{detail.release_date} {
                            detail.genres.map((item, index) => (
                                <span key={index}>{item.name}, </span>
                            ))
                            }</p>
                        <p className='text-zinc-300 text-xl font-semibold italic'>{detail.tagline}</p>
                        <div>
                        <h3 className='text-2xl my-2'>Overview</h3>
                        <p>{detail.overview}</p>
                        </div>

                        <PrimaryBtn 
                            title="Play Trailer"
                            navigateTo={"/"}
                        />
                    </div>
                </div>

                {/* Buy and Rent */}

                {
                    watchproviders?.rent && 
                    <div className='flex items-center gap-8 my-4'>
                    <p>Available on Rent</p>
                    <div className='flex items-center gap-4'>
                        {
                            watchproviders.rent.map((item, index) => (
                                <span key={index} className='inline-block h-[2rem] w-[2rem] rounded-md overflow-hidden'>
                                    <img src={`https://image.tmdb.org/t/p/original${item.logo_path}`} className='h-full w-full object-cover' />
                                </span>
                            ))
                        }
                    </div>
                </div>
                }

                {
                    watchproviders?.buy &&
                    <div className='flex items-center gap-8 my-4'>
                    <p>Available to Buy</p>
                    <div className='flex items-center gap-4'>
                        {
                            watchproviders.buy.map((item, index) => (
                                <span key={index} className='inline-block h-[2rem] w-[2rem] rounded-md overflow-hidden'>
                                    <img src={`https://image.tmdb.org/t/p/original${item.logo_path}`} />
                                </span>
                            ))
                        }
                    </div>
                </div>
                }



                {/* Seasons */}
                {
                seasons && 
                <div className='w-full'>
                    <hr className='my-8' />
                    <h2 className='text-3xl font-semibold'>Seasons</h2>
                    <CardsScrollContainer
                        movieData={seasons}
                        isClickable = {false}
                    />
                </div>
                }


                {/* recommendations & Similar stuff */}

                <div className='w-full'>
                    <hr className='my-8' />
                    <h2 className='text-3xl font-semibold'>Recommendations & Similar stuff</h2>
                    <CardsScrollContainer
                        movieData={recommendations.results || similar.results}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailsPage