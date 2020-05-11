import React from 'react'
import BlackKey from '../../shared/BlackKey'

const Sharp = ({ playNote, note }) => {
  return (
    <BlackKey
      onClick={() => {
        console.log('test')
        playNote(note)
      }}
    >
      {note}
    </BlackKey>
  )
}

export default Sharp
