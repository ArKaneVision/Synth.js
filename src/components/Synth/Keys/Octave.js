import React from 'react'
import Natural from './Natural'
import Sharp from './Sharp'
import Roll from '../../shared/Roll'

const Octave = ({ playNote, oct }) => {
  return (
    <Roll>
      {/* 12 keys */}
      <Natural
        note={`C${oct}`}
        playNote={playNote}
      />
      <Sharp
        note={`C#${oct}`}
        playNote={playNote}
      />
      <Natural
        note={`D${oct}`}
        playNote={playNote}
      />
      <Sharp
        note={`D#${oct}`}
        playNote={playNote}
      />
      <Natural
        note={`E${oct}`}
        playNote={playNote}
      />
      <Natural
        note={`F${oct}`}
        playNote={playNote}
      />
      <Sharp
        note={`F#${oct}`}
        playNote={playNote}
      />
      <Natural
        note={`G${oct}`}
        playNote={playNote}
      />
      <Sharp
        note={`G#${oct}`}
        playNote={playNote}
      />
      <Natural
        note={`A${oct}`}
        playNote={playNote}
      />
      <Sharp
        note={`A#${oct}`}
        playNote={playNote}
      />
      <Natural
        note={`B${oct}`}
        playNote={playNote}
      />
    </Roll>
  )
}

export default Octave
