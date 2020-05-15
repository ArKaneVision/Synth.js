import React from 'react'
import BlackKey from '../../Styles/BlackKey'

const Sharp = ({ playNote, note, theme }) => {
  return (
    <BlackKey
      theme={theme}
      onMouseDown={() => playNote(note)}
    >
    </BlackKey>
  )
}

export default Sharp
