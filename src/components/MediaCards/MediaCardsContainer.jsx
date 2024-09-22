import React from 'react'
import Card from '../Common/Card'

function MediaCardsContainer({cardsData}) {
  return (
    <div className='py-4 grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] place-items-center gap-y-4'>
        {
            cardsData.map((card, index) => (
                <Card
                key={index}
                data = {card}
            />
            ))
        }
    </div>
  )
}

export default MediaCardsContainer