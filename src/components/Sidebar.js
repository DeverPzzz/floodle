import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Card from './Card'
import cardsData from './cardsData'

const Sidebar = ({ onChange }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [cards, setCards] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      setCards(cardsData.reverse())
    }, 3000)
    // fetch('').then((data) => {
    //   setIsLoading(false)
    //   setCards(cardsData.reverse())
    // }).catch(err => {
    //   setError('Что-то пошло не так..')
    // })
  }, [])

  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='logo'>Floodle</div>
      </div>

      <div className='cards'>
        {isLoading
          ? 'loading...'
          : cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                onClick={() => onChange(card.id)}
              />
            ))}
      </div>

      <div className='sidebar__footer'>
        <button className='info-button button'>
          Created by <br />
          ...
        </button>
        <button className='settings-button button'>
          <FontAwesomeIcon icon={['fas', 'cog']} />
        </button>
      </div>
    </div>
  )
}

export default Sidebar
