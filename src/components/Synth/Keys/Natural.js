import React from 'react'
import WhiteKey from '../../shared/WhiteKey'

const Natural = ({ playNote, note }) => {
  return (
    <WhiteKey
      onClick={() => playNote(note)}
    >
      {note}
    </WhiteKey>
  )
}

export default Natural
