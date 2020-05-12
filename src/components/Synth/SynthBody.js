import React, { useState } from 'react'
import Octave from './Keys/Octave'
import EnvelopeUnit from './Settings/EnvelopeUnit'
// import EffectContainer from '../shared/EffectContainer'
import EvelopeContainer from '../shared/EnvelopeContainer'

// stlye
import Keyboard from '../shared/Keyboard'
import useMidi from 'react-midi-hook'

// tone.js
import Tone, { Synth } from 'tone'

const SynthBody = () => {
  const { pressedKeys } = useMidi()
  const [attack, setAttack] = useState(1)
  const [decay, setDecay] = useState(1)
  const [sustain, setSustain] = useState(4)
  const [release, setRelease] = useState(1)

  const oscSettings = {
    oscillator: {
      modulationType: 'sawtooth',
      modulationIndex: 3,
      harmonicity: 3.4
    },
    envelope: {
      attack: attack,
      decay: decay,
      sustain: sustain,
      release: release
    }
  }

  function playNote (noteToTrigger) {
    console.log(pressedKeys)
    Tone.context.lookAhead = 0
    const synth = new Synth(oscSettings).toMaster()
    synth.triggerAttackRelease(noteToTrigger, 1)
  }

  return (
    <div>
      <EvelopeContainer>
        <EnvelopeUnit setter={setAttack} value={attack} />
        <EnvelopeUnit setter={setDecay} value={decay} />
        <EnvelopeUnit setter={setSustain} value={sustain} />
        <EnvelopeUnit setter={setRelease} value={release} />
      </EvelopeContainer>
      <Keyboard>
        <Octave oct='2' playNote={playNote}/>
        <Octave oct='3' playNote={playNote}/>
        <Octave oct='4' playNote={playNote}/>
      </Keyboard>
    </div>
    // <EffectContainer>
    // </EffectContainer>
  )
}

export default SynthBody
