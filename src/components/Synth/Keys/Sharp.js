import React from 'react'
import BlackKey from '../../Styles/BlackKey'

const Sharp = ({ playNote, note, theme }) => {
  return (
    <BlackKey
      theme={theme}
      onClick={() => playNote(note)}
    >
      {note}
    </BlackKey>
  )
}

export default Sharp
