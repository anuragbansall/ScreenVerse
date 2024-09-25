import React from 'react'
import Card from '../Common/Card'

function MediaCardsContainer({cardsData, title}) {
  return (
    <div className='py-4 grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] place-items-center gap-y-4'>
        {
            cardsData.map((card, index) => (
                <Card
                key={index}
                data = {card}
                title={title.toLowerCase()}
            />
            ))
        }
    </div>
  )
}

export default MediaCardsContainer