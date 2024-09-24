import React from 'react'
import Card from './Card'

function CardsScrollContainer({movieData, filterOption, isClickable, title}) {
  const filteredData = movieData ? movieData.filter(item => item.media_type === filterOption) : []

  const dataToDisplay = filteredData.length > 0 ? filteredData : movieData || [];
  
  return (
    <div className='w-full py-4 mt-4 flex gap-4 overflow-x-scroll'>
        {
          dataToDisplay &&
          dataToDisplay.map((item, index) => (
            <Card 
              key={index}
              data = {item}
              isClickable={isClickable}
              title={title}
            />
          ))
        }
    </div>
  )
}

export default CardsScrollContainer