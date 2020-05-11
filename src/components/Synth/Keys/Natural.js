import React from 'react'
import WhiteKey from '../../shared/WhiteKey'

const Natural = ({ playNote, note }) => {
  return (
    <WhiteKey
      onClick={() => {
        console.log('test')
        playNote(note)
      }}
    >
      {note}
    </WhiteKey>
  )
}

export default Natural
