import React from 'react'
import { White } from 'react-dial-knob'
import SettingDisplay from '../../Styles/SettingDisplay'
import EffectMeter from '../../Styles/EffectMeter'
import EffectRack from '../../Styles/EffectRack'
import EffectLabel from '../../Styles/EffectLabel'

const EffectUnit = ({ scale, effect, preset, setPreset }) => {
  const handleChange = (value) => {
    const newValue = (value / scale)
    setPreset({ ...preset, effects: { ...preset.effects, [effect]: newValue } })
  }
  return (
    <div>
      <EffectRack>
        <EffectMeter>
          <White
            diameter={50}
            min={0}
            max={10}
            step={1}
            value={Math.floor(preset.effects[effect] * scale)}
            theme={{
              donutColor: 'blue'
            }}
            onValueChange={handleChange}
            ariaLabelledBy={'my-label'}
          />
          <SettingDisplay value={preset.effects[effect]} disabled={true}/>
        </EffectMeter><br></br>
      </EffectRack>
      <EffectLabel>{effect}</EffectLabel>
    </div>
  )
}

export default EffectUnit
