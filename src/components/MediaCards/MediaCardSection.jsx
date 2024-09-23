import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import MediaCardsContainer from './MediaCardsContainer';
import InfiniteScroll from 'react-infinite-scroll-component';

import { FaChevronCircleUp } from "react-icons/fa";

function MediaCardSection({title, cardsData, fetchData}) {

    const navigate = useNavigate()
    useEffect(() => {
        document.title = `ScreenVerse | ${title}`

        return () => {
          document.title = "ScreenVerse"
        }
    })

    const scrollToTop = () => {
        const scrollableDiv = document.getElementById("scrollableDiv");
        if (scrollableDiv) {
            scrollableDiv.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

  return (
    <div className='relative h-screen w-full px-8 flex flex-col'>
        <span className='inline-block text-[#6556CD] absolute bottom-4 right-4 z-10 text-[2rem] p-3 rounded-full bg-[#ffffff6d] backdrop-blur-xl cursor-pointer' onClick={scrollToTop}>
            <FaChevronCircleUp />
        </span>
        <div className='flex items-center'>
            <div className='flex items-center gap-2 w-fit text-nowrap text-zinc-500 text-2xl font-semibold'>
                <span className='text-3xl hover:text-[#6556CD] cursor-pointer hover:scale-105' onClick={() => navigate(-1)}>
                    <IoMdArrowRoundBack />
                </span>
                <h2 className=''>{title}</h2>
            </div>
            <Navbar />
        </div>
        <div id="scrollableDiv" className='w-full h-full overflow-y-scroll'>
            <InfiniteScroll
                scrollableTarget="scrollableDiv"
                dataLength={cardsData.length}
                next={fetchData}
                hasMore={true}
                loader={<h2 className='text-white text-2xl font-semibold text-center'>Loading...</h2>}
            >
                <MediaCardsContainer
                    cardsData = {cardsData}
                />
            </InfiniteScroll>
        </div>
    </div>
  )
}

export default MediaCardSection