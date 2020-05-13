import React, { useState } from 'react'
import Octave from './Keys/Octave'
import EnvelopeUnit from './Settings/EnvelopeUnit'
// import EffectContainer from '../Styles/EffectContainer'
import EvelopeContainer from '../Styles/EnvelopeContainer'
import UserLibrary from '../PresetLibraries/UserLibrary'
import SavePreset from '../PresetLibraries/SavePreset'

// stlye
import Keyboard from '../Styles/Keyboard'
// import useMidi from 'react-midi-hook'

// tone.js
import Tone, { Synth } from 'tone'

const SynthBody = ({ user }) => {
  // const { pressedKeys } = useMidi()
  const [preset, setPreset] = useState({
    title: '',
    description: '',
    oscSettings: {
      oscillator: {
        modulationType: 'sawtooth',
        modulationIndex: 3,
        harmonicity: 3.4
      },
      envelope: {
        attack: 2,
        decay: 1,
        sustain: 1,
        release: 1
      }
    }
  })

  // MIDI controls
  // useEffect(() => {
  //   if (pressedKeys.length > 0) {
  //     pressedKeys.forEach(element => {
  //       Tone.context.lookAhead = 0
  //       const synth = new Synth(oscSettings).toMaster()
  //       synth.triggerAttack(element.letter)
  //     })
  //     console.log(pressedKeys)
  //   }
  // })

  function playNote (noteToTrigger) {
    console.log(user)
    console.log(preset.oscSettings)
    Tone.context.lookAhead = 0
    const synth = new Synth(preset.oscSettings).toMaster()
    synth.triggerAttackRelease(noteToTrigger, 1)
  }

  return (
    <div>
      <EvelopeContainer>
        <EnvelopeUnit setting='attack' setPreset={setPreset} preset={preset} />
        <EnvelopeUnit setting='decay' setPreset={setPreset} preset={preset} />
        <EnvelopeUnit setting='sustain' setPreset={setPreset} preset={preset} />
        <EnvelopeUnit setting='release' setPreset={setPreset} preset={preset} />
      </EvelopeContainer>
      <SavePreset user={user} preset={preset} setPreset={setPreset}/>
      <Keyboard>
        <Octave oct='2' playNote={playNote}/>
        <Octave oct='3' playNote={playNote}/>
        <Octave oct='4' playNote={playNote}/>
      </Keyboard>
      <UserLibrary />
    </div>
    // <EffectContainer>
    // </EffectContainer>
  )
}

export default SynthBody
