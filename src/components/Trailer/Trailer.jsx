import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { IoCloseCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Trailer() {
    const movieSlice = useSelector(state => state.movieSlice)
    const movieTrailer = movieSlice?.data?.videos?.results

    const tvSlice = useSelector(state => state.tvSlice)
    const tvTrailer = tvSlice?.data?.videos?.results
    
    const trailer = movieTrailer || tvTrailer
    const trailerToDisplay = trailer.filter(item => item.type === "Trailer")[0];
  
    const navigate = useNavigate();

  return (
    <div className='absolute top-0 left-0 z-20 h-full w-full flex justify-center items-center bg-[#000000d7]'>
        {trailerToDisplay ? 
            <div className='relative'>
                <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailerToDisplay.key}`}
                controls={true}
                />
                <span className='absolute top-0 right-0 translate-x-[2rem] -translate-y-[2rem] text-white text-[2rem] cursor-pointer' onClick={() => navigate(-1)}>
                    <IoCloseCircleSharp />
                </span>
            </div>
            :
            <div className='relative'>
                <p className="text-white text-xl">No trailer available</p>
                <span className='absolute top-0 right-0 translate-x-[2rem] -translate-y-[2rem] text-white text-[2rem] cursor-pointer' onClick={() => navigate(-1)}>
                    <IoCloseCircleSharp />
                </span>
            </div>
        }
    </div>
  );
}

export default Trailer;
