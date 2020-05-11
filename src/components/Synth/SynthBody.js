import React, { useRef, useEffect } from 'react'
import Octave from './Keys/Octave'

// stlye
// import Keyboard from '../shared/Keyboard'

// tone.js
import Tone, { Synth } from 'tone'

const SynthBody = () => {
  const synth = useRef(null)
  // const [synth, setSynth] = useState({ activeNotes: [] })

  useEffect(() => {
    synth.current = new Synth({
      oscillator: {
        // type: 'fmsquare',
        modulationType: 'sawtooth',
        modulationIndex: 3,
        harmonicity: 3.4
      },
      envelope: {
        attack: 0.000,
        decay: 0.1,
        sustain: 0.1,
        release: 0.1
      }
    }).toMaster()
  }, [])

  function playNote (noteToTrigger) {
    Tone.context.lookAhead = 0
    synth.current.triggerAttack(noteToTrigger, Tone.context.currentTime)
  }

  return (
    <div>
      <Octave oct='3' playNote={playNote}/>
    </div>
  )
}

export default SynthBody
