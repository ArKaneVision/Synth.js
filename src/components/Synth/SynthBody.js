import React from 'react'
import Octave from './Keys/Octave'

import Synth from 'tone'

const SynthBody = () => {
  // const [synth, setSynth] = useState({ activeNotes: [] })

  function playNote (data) {
    console.log(data)
  }

  return (
    <div>
      <Octave oct='3' playNote={playNote}/>
      <Octave oct='4' playNote={playNote}/>
    </div>
  )
}

export default SynthBody
