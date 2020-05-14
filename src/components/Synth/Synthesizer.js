import React, { useState } from 'react'
import Octave from './Keys/Octave'
import EnvelopeUnit from './Settings/EnvelopeUnit'
import EffectContainer from '../Styles/EffectContainer'
import EffectUnit from './Effects/EffectUnit'
import DoubleEffectUnit from './Effects/DoubleEffectUnit'
import TripleEffectUnit from './Effects/TripleEffectUnit'
import EvelopeContainer from '../Styles/EnvelopeContainer'
import UserLibrary from '../PresetLibraries/UserLibrary'
import SavePreset from '../PresetLibraries/SavePreset'
import Oscillator from './Settings/Oscillator'
import Master from './Settings/Master'

// stlye
import Keyboard from '../Styles/Keyboard'
import SynthSettings from '../Styles/SynthSettings'
import SynthBody from '../Styles/SynthBody'
import ApiContainer from '../Styles/ApiContainer'
import WaveSettings from '../Styles/WaveSettings'
// import useMidi from 'react-midi-hook'

// tone.js
import Tone, { Synth } from 'tone'

const Synthesizer = ({ user }) => {
  // const { pressedKeys } = useMidi()
  const [watcher, setWatcher] = useState(0)
  const [preset, setPreset] = useState({
    title: '',
    description: '',
    oscSettings: {
      oscillator: {
        type: 'sine',
        modulationIndex: 1,
        harmonicity: 1
      },
      envelope: {
        attack: 0.1,
        decay: 0.1,
        sustain: 0.1,
        release: 0.1
      }
    },
    effects: {
      distortion: 1,
      freeverb: {
        roomSize: 0.1,
        dampning: 1000
      },
      phaser: {
        frequency: 1,
        octaves: 0,
        baseFrequency: 1
      },
      pingPong: {
        delayTime: 1,
        feedBack: 1
      }
    },
    master: {
      noteLength: 1
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
    console.log(preset)
    Tone.context.lookAhead = 0
    const pingPong = new Tone.PingPongDelay()
    const freeverb = new Tone.Freeverb(preset.effects.freeverb.roomSize, preset.effects.freeverb.dampning)
    const phase = new Tone.Phaser(preset.effects.phaser.frequency, preset.effects.phaser.octaves, preset.effects.phaser.baseFrequency)
    const dist = new Tone.Distortion(preset.effects.distortion)
    const synth = new Synth(preset.oscSettings).chain(dist, phase, freeverb, pingPong, Tone.Master)
    synth.triggerAttackRelease(noteToTrigger, preset.master.noteLength)
  }

  return (
    <SynthBody>

      <SynthSettings>

        <WaveSettings>
          <Master setting='noteLength' setPreset={setPreset} preset={preset}/>
          <Oscillator setPreset={setPreset} preset={preset}/>
        </WaveSettings>

        <EvelopeContainer>
          <EnvelopeUnit setting='attack' setPreset={setPreset} preset={preset} />
          <EnvelopeUnit setting='decay' setPreset={setPreset} preset={preset} />
          <EnvelopeUnit setting='sustain' setPreset={setPreset} preset={preset} />
          <EnvelopeUnit setting='release' setPreset={setPreset} preset={preset} />
        </EvelopeContainer>

        <EffectContainer>
          <EffectUnit effect='distortion' scale={10} setPreset={setPreset} preset={preset}/>
        </EffectContainer>
        <EffectContainer>
          <DoubleEffectUnit
            mainEffect='freeverb'
            effect1='roomSize' lowRange1={1} highRange1={9} scale1={10}
            effect2='dampning' lowRange2={1} highRange2={9} scale2={0.001}
            setPreset={setPreset}
            preset={preset}
          />
        </EffectContainer>
        <EffectContainer>
          <DoubleEffectUnit
            mainEffect='pingPong'
            effect1='delayTime' lowRange1={1} highRange1={10} scale1={1}
            effect2='feedBack' lowRange2={1} highRange2={9} scale2={10}
            setPreset={setPreset}
            preset={preset}
          />
        </EffectContainer>
        <EffectContainer>
          <TripleEffectUnit
            mainEffect='phaser'
            effect1='frequency' lowRange1={3} highRange1={15} scale1={1}
            effect2='octaves' lowRange2={1} highRange2={9} scale2={10}
            effect3='baseFrequency' lowRange3={1} highRange3={9} scale3={0.01}
            setPreset={setPreset}
            preset={preset}
          />
        </EffectContainer>

        <ApiContainer>
          <UserLibrary watcher={watcher} setWatcher={setWatcher} user={user} setPreset={setPreset}/>
          <SavePreset watcher={watcher} setWatcher={setWatcher} user={user} preset={preset} setPreset={setPreset}/>
        </ApiContainer>

      </SynthSettings>

      <Keyboard>
        <Octave oct='2' playNote={playNote}/>
        <Octave oct='3' playNote={playNote}/>
        <Octave oct='4' playNote={playNote}/>
      </Keyboard>

    </SynthBody>
  )
}

export default Synthesizer
