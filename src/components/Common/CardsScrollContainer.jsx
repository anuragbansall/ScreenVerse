import React from 'react'
import Card from './Card'

function CardsScrollContainer({data, filterOption, isClickable, title}) {
  const filteredData = data ? data.filter(item => item.media_type === filterOption) : []

  const dataToDisplay = filteredData.length > 0 ? filteredData : data || [];
  
  return (
    <div className='w-full md:py-4 md:mt-4 flex gap-4 overflow-x-scroll'>
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