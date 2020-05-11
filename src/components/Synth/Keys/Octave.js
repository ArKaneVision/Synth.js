import React from 'react'
import WhiteKey from './WhiteKey'
import BlackKey from './BlackKey'

const Octave = ({ playNote, oct }) => {
  return (
    <div>
      {/* 7 white keys */}
      <WhiteKey
        note={`C${oct}`}
        playNote={playNote}
      />
      <WhiteKey
        note={`D${oct}`}
        playNote={playNote}
      />
      <WhiteKey
        note={`E${oct}`}
        playNote={playNote}
      />
      <WhiteKey
        note={`F${oct}`}
        playNote={playNote}
      />
      <WhiteKey
        note={`G${oct}`}
        playNote={playNote}
      />
      <WhiteKey
        note={`A${oct}`}
        playNote={playNote}
      />
      <WhiteKey
        note={`B${oct}`}
        playNote={playNote}
      />
      {/* 5 black keys */}
      <BlackKey
        note={`C#${oct}`}
        playNote={playNote}
      />
      <BlackKey
        note={`D#${oct}`}
        playNote={playNote}
      />
      <BlackKey
        note={`F#${oct}`}
        playNote={playNote}
      />
      <BlackKey
        note={`G#${oct}`}
        playNote={playNote}
      />
      <BlackKey
        note={`A#${oct}`}
        playNote={playNote}
      />
    </div>
  )
}

export default Octave
