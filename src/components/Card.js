import React from 'react'

function Card({ card, onClick }) {
  return (
    <div className='card' onClick={onClick}>
      <div className='card__dot card__dot--visible'></div>
      <div className='card__date'>{card.date}</div>
      <div className='card__discription'>{card.description}</div>
    </div>
  )
}

export default Card
