import React from 'react'

const BlackKey = ({ playNote, note }) => {
  return (
    <div
      onClick={() => playNote(note)}
    >
      Black key {note}
    </div>
  )
}

export default BlackKey
