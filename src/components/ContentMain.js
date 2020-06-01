import React, { useEffect, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

import cardsData from 'components/cardsData'

const ContentBody = ({ cardId }) => {
  const [card, setCard] = useState({
    date: new Date().toLocaleDateString(),
    description: '',
    content: '',
  })

  useEffect(() => {
    if (cardId) setCard(cardsData.find((card) => card.id === cardId))
  }, [cardId])

  return (
    <main className='content'>
      <form className='date-inner'>
        <div className='date-header'>{card.date}</div>
        <TextareaAutosize
          className='date-text'
          name='description'
          value={card ? card.description : ''}
          rowsMin={1}
          placeholder='Short note on the date'
          maxLength='150'
          onChange={(e) => setCard({ ...card, description: e.target.value })}
        />
        <span className='datetext-counter'>
          <span className='char-counter'>0</span>/150 characters used
        </span>
      </form>

      <form className='text-inner'>
        <div className='text-inner__separator'></div>
        <div
          className='textBox'
          name='textboxValue'
          autoFocus='autofocus'
          contenteditable='true'
          onChange={(e) => setCard({ ...card, content: e.target.value })}
        >
          {card.content}
        </div>
      </form>
    </main>
  )
}

export default ContentBody
