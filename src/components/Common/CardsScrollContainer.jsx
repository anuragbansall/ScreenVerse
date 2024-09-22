import React from 'react'
import Card from './Card'

function CardsScrollContainer({trendingMovieData, filterOption}) {
  console.log(trendingMovieData);

  const filteredData = trendingMovieData ? trendingMovieData.filter(item => item.media_type === filterOption) : []

  const dataToDisplay = filteredData.length > 0 ? filteredData : trendingMovieData || [];
  
  return (
    <div className='w-full py-4 mt-4 flex gap-4 overflow-x-scroll'>
        {
          dataToDisplay &&
          dataToDisplay.map((item) => (
            <Card 
              key={item.id}
              data = {item}
              navigateTo={"/"}
            />
          ))
        }
    </div>
  )
}

export default CardsScrollContainer