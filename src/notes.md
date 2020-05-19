# Project notes

Origin Synth Code: {

  each note press builds a synth and then the effects and then plays the note. potentially creating choppy sound.
  new strategy is to has a synth rendered every time the patch is changed

  ```js
  function playNote (noteToTrigger) {
    console.log(user)
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
  ```
}

Second Synth Code: {
  experimental code, first try created more static in noise

  ```js
  const createSynths = () => {
    for (let i = 0; i < 36; i++) {

    }
  }

  const createSynth = ({ note }) => ({
    note
    setNote(note) {
      this.note = note
      return this
    }
  })

  const mainSynth = {
    synth: null
  }

  useEffect(() => {
    mainSynth.pingPong = new Tone.PingPongDelay(patch.effects.pingPong.delayTime, patch.effects.pingPong.feedBack)
    mainSynth.freeverb = new Tone.Freeverb(patch.effects.freeverb.roomSize, patch.effects.freeverb.dampning)
    mainSynth.phase = new Tone.Phaser(patch.effects.phaser.frequency, patch.effects.phaser.octaves, patch.effects.phaser.baseFrequency)
    mainSynth.dist = new Tone.Distortion(patch.effects.distortion)
    mainSynth.synth = new Synth(patch.oscSettings).chain(mainSynth.dist, mainSynth.phase, mainSynth.freeverb, mainSynth.pingPong, Tone.Master)
  }, [patch, watcher])
  ```
}

Future Midi code: {

  broken atm and causes infinate loop

  ``` js

  import useMidi from 'react-midi-hook'

  const { pressedKeys } = useMidi()

  MIDI controls
  useEffect(() => {
    if (pressedKeys.length > 0) {
      pressedKeys.forEach(element => {
        Tone.context.lookAhead = 0
        const synth = new Synth(oscSettings).toMaster()
        synth.triggerAttack(element.letter)
      })
      console.log(pressedKeys)
    }
  })
  ```
}
