import React from 'react'

const WhiteKey = ({ playNote, note }) => {
  return (
    <div
      onClick={() => playNote(note)}
    >
      White key {note}
    </div>
  )
}

export default WhiteKey
