import React from 'react'
import WhiteKey from '../../Styles/WhiteKey'

const Natural = ({ playNote, note }) => {
  return (
    <WhiteKey
      onClick={() => playNote(note)}
    >
    </WhiteKey>
  )
}

export default Natural
