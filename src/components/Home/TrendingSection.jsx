import React, { useState } from 'react'
import CardsScrollContainer from '../Common/CardsScrollContainer'
import Dropdown from '../Common/Dropdown';

function TrendingSection({trendingMovieData}) {

    const [filterOption, setFilterOption] = useState("")
    const options = [
        {
            title: "Filter",
            value: "",
            isDisabled: true,
        },
        {
            title: "TV",
            value: "tv",
            isDisabled: false,
        },
        {
            title: "Movie",
            value: "movie",
            isDisabled: false,
        },
        {
            title: "All",
            value: "all",
            isDisabled: false,
        },
    ]

  return (
    <div className='p-8'>
        <div className='flex justify-between items-center mb-2'>
            <h2 className='text-zinc-400 text-2xl md:text-3xl font-semibold outline-none'>Trending</h2>
            <Dropdown 
                filterOption = {filterOption}
                setFilterOption = {setFilterOption}
                options = {options}
            />
        </div>
        <CardsScrollContainer
            data={trendingMovieData}
            filterOption={filterOption}
        />
    </div>
  )
}

export default TrendingSection