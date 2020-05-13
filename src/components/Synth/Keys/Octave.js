import React from 'react'
import Natural from './Natural'
import Sharp from './Sharp'
import Roll from '../../Styles/Roll'

const Octave = ({ playNote, oct }) => {
  return (
    <Roll>
      {/* 12 keys */}
      <Natural
        note={`C${oct}`}
        playNote={playNote}
      />
      <Sharp
        theme={{ offset: '11%' }}
        note={`C#${oct}`}
        playNote={playNote}
      />
      <Natural
        note={`D${oct}`}
        playNote={playNote}
      />
      <Sharp
        theme={{ offset: '25.55%' }}
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
        theme={{ offset: '53.5%' }}
        note={`F#${oct}`}
        playNote={playNote}
      />
      <Natural
        note={`G${oct}`}
        playNote={playNote}
      />
      <Sharp
        theme={{ offset: '68.5%' }}
        note={`G#${oct}`}
        playNote={playNote}
      />
      <Natural
        note={`A${oct}`}
        playNote={playNote}
      />
      <Sharp
        theme={{ offset: '82.5%' }}
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
