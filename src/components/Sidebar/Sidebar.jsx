import React, { useEffect } from 'react'
import logo from "../../assets/logo.svg"

import { FaFire } from "react-icons/fa";
import { PiSparkleFill } from "react-icons/pi";
import { RiMovie2Fill } from "react-icons/ri";
import { IoTv } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function Sidebar() {

    const navigate = useNavigate()

  return (
    <div className='w-[16rem] flex-shrink-0 h-full border-r-2 border-zinc-700 px-10 pt-10 overflow-y-auto'>
        <div className='flex justify-cente items-center gap-4'>
            <img src={logo} className='h-[2rem]' />
            <h2 className='text-white font-bold text-2xl'>ScreenVerse</h2>
        </div>
        <div className='mt-8'>
            <h3 className='text-white font-semibold text-xl'>New Feeds</h3>
            <div className='flex flex-col gap-2 mt-6'>
                {
                    [
                        {
                            title: "Trending",
                            icon: <FaFire />,
                            navigate: "/trending",
                        },
                        {
                            title: "Popular",
                            icon: <PiSparkleFill />,
                            navigate: "/popular",
                        },
                        {
                            title: "Movies",
                            icon: <RiMovie2Fill />,
                            navigate: "/movie",
                        },
                        {
                            title: "TV Shows",
                            icon: <IoTv />,
                            navigate: "/tv",
                        },
                        {
                            title: "People",
                            icon: <BsPeopleFill />,
                            navigate: "/people",
                        },
                    ].map((item, index) => (
                        <div 
                            className='flex items-center gap-2 text-zinc-400 font-semibold text-lg cursor-pointer hover:text-white duration-200 hover:bg-[#6556CD] px-4 py-5 rounded-md'
                            onClick={() => navigate(item.navigate)}
                            key={index}
                        >
                            <span>{item.icon}</span>
                            <h3>{item.title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Sidebar