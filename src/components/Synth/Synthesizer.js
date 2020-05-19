import React, { useState } from 'react'
import Octave from './Keys/Octave'
import EnvelopeUnit from './Settings/EnvelopeUnit'
import EffectContainer from '../Styles/EffectContainer'
import EffectUnit from './Effects/EffectUnit'
import DoubleEffectUnit from './Effects/DoubleEffectUnit'
import TripleEffectUnit from './Effects/TripleEffectUnit'
import EvelopeContainer from '../Styles/EnvelopeContainer'
import UserLibrary from '../PatchLibraries/UserLibrary'
import SavePatch from '../PatchLibraries/SavePatch'
import Oscillator from './Settings/Oscillator'
import Master from './Settings/Master'

// stlye
import Keyboard from '../Styles/Keyboard'
import ControlBoard from '../Styles/ControlBoard'
import SynthSettings from '../Styles/SynthSettings'
import SynthBody from '../Styles/SynthBody'
import ApiContainer from '../Styles/ApiContainer'
import WaveSettings from '../Styles/WaveSettings'

// tone.js
import Tone, { Synth } from 'tone'

const Synthesizer = ({ user, msgAlert }) => {
  const [watcher, setWatcher] = useState(0)
  const [patch, setPatch] = useState({
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
      distortion: 0,
      freeverb: {
        roomSize: 0.1,
        dampning: 1000,
        wetDry: 0
      },
      phaser: {
        frequency: 1,
        octaves: 0,
        baseFrequency: 1,
        wetDry: 0
      },
      pingPong: {
        delayTime: 1,
        feedBack: 0.1,
        wetDry: 0
      }
    },
    master: {
      noteLength: 0.5
    }
  })

  function playNote (noteToTrigger) {
    Tone.context.lookAhead = 0
    const pingPong = new Tone.PingPongDelay(patch.effects.pingPong.delayTime, patch.effects.pingPong.feedBack)
    pingPong.wet.value = patch.effects.pingPong.wetDry
    const freeverb = new Tone.Freeverb(patch.effects.freeverb.roomSize, patch.effects.freeverb.dampning)
    freeverb.wet.value = patch.effects.freeverb.wetDry
    const phase = new Tone.Phaser(patch.effects.phaser.frequency, patch.effects.phaser.octaves, patch.effects.phaser.baseFrequency)
    phase.wet.value = patch.effects.phaser.wetDry
    const dist = new Tone.Distortion(patch.effects.distortion)
    const synth = new Synth(patch.oscSettings).chain(dist, phase, freeverb, pingPong, Tone.Master)
    synth.triggerAttackRelease(noteToTrigger, patch.master.noteLength)
  }

  return (
    <SynthBody>

      <ControlBoard>

        <SynthSettings>
          <WaveSettings>
            <Oscillator setPatch={setPatch} patch={patch}/>
            <Master setting='noteLength' setPatch={setPatch} patch={patch}/>
          </WaveSettings>

          <EvelopeContainer>
            <EnvelopeUnit setting='attack' setPatch={setPatch} patch={patch} />
            <EnvelopeUnit setting='decay' setPatch={setPatch} patch={patch} />
            <EnvelopeUnit setting='sustain' setPatch={setPatch} patch={patch} />
            <EnvelopeUnit setting='release' setPatch={setPatch} patch={patch} />
          </EvelopeContainer>

          <EffectContainer>
            <EffectUnit effect='distortion' scale={10} setPatch={setPatch} patch={patch}/>
          </EffectContainer>
          <EffectContainer>
            <DoubleEffectUnit
              mainEffect='freeverb'
              effect1='roomSize' lowRange1={1} highRange1={9} scale1={10}
              effect2='dampning' lowRange2={1} highRange2={9} scale2={0.001}
              setPatch={setPatch}
              patch={patch}
            />
          </EffectContainer>
          <EffectContainer>
            <DoubleEffectUnit
              mainEffect='pingPong'
              effect1='delayTime' lowRange1={1} highRange1={10} scale1={1}
              effect2='feedBack' lowRange2={1} highRange2={9} scale2={10}
              setPatch={setPatch}
              patch={patch}
            />
          </EffectContainer>
          <EffectContainer>
            <TripleEffectUnit
              mainEffect='phaser'
              effect1='frequency' lowRange1={3} highRange1={15} scale1={1}
              effect2='octaves' lowRange2={1} highRange2={9} scale2={10}
              effect3='baseFrequency' lowRange3={1} highRange3={9} scale3={0.01}
              setPatch={setPatch}
              patch={patch}
            />
          </EffectContainer>
        </SynthSettings>

        <ApiContainer>
          <UserLibrary watcher={watcher} setWatcher={setWatcher} msgAlert={msgAlert} user={user} setPatch={setPatch}/>
          <SavePatch watcher={watcher} setWatcher={setWatcher} msgAlert={msgAlert} user={user} patch={patch} setPatch={setPatch}/>
        </ApiContainer>
      </ControlBoard>

      <Keyboard>
        <Octave oct='2' playNote={playNote}/>
        <Octave oct='3' playNote={playNote}/>
        <Octave oct='4' playNote={playNote}/>
      </Keyboard>

    </SynthBody>
  )
}

export default Synthesizer
