import React, { useEffect, useState } from 'react';
import { IoSearchOutline, IoCloseSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axios';

function Navbar() {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    const [searchesData, setSearchesData] = useState([]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        (searchValue);
    };

    const handleCloseInputValue = () => {
        setSearchValue("");
    };

    const getSearches = async (query) => {
        if (!query) return;
        try {
            const response = await axiosInstance.get(`/search/multi?query=${query}`);
            setSearchesData(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getSearches(searchValue);
    }, [searchValue]);

    return (
        <div className='relative w-full flex items-center justify-center py-4 px-4 md:px-16'>
            <form className='flex gap-4 items-center text-zinc-400 w-full outline-none bg-zinc-80 border border-zinc-700 px-6 py-2 text-xl rounded-md' onSubmit={handleFormSubmit}>
                <span className='text-2xl'>
                    <IoSearchOutline />
                </span>
                <input 
                    type="text" 
                    placeholder='Search anything' 
                    className='w-full bg-inherit outline-none' 
                    value={searchValue} 
                    onChange={(event) => setSearchValue(event.target.value)} 
                />
                {searchValue && 
                    <span className='cursor-pointer' onClick={handleCloseInputValue}>
                        <IoCloseSharp />
                    </span>
                }
            </form>

            {searchValue && searchesData.length > 0 && (
                <div className='absolute z-10 flex flex-col gap-2 bottom-0 translate-y-[100%] bg-[#000000cf] backdrop-blur-md max-h-[15rem] w-[80%] overflow-y-auto'>
                    {searchesData.map((item) => {
                        const image = item.poster_path || item.backdrop_path || item.profile_path;
                        
                        if (image)
                        return (
                            <div key={item.id} className='flex items-center gap-4 px-6 py-4 cursor-pointer bg-[#ffffff0d] hover:bg-[#ffffff20]' onClick={() => navigate(`/${item.media_type}/details/${item.id}`)}>
                                <span className='h-[4rem] w-[4rem] shrink-0 bg-zinc-800 rounded-md overflow-hidden'>
                                    <img src={`https://image.tmdb.org/t/p/original/${image}`} alt={item.name || item.title || item.original_name || item.original_title} className='h-full w-full object-cover' />
                                </span>
                                <p className='text-xl font-semibold text-white'>{item.name || item.title || item.original_name || item.original_title}</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Navbar;
