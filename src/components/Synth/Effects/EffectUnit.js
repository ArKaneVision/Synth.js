import React from 'react'
import { Silver } from 'react-dial-knob'
import SettingDisplay from '../../Styles/SettingDisplay'
import EffectMeter from '../../Styles/EffectMeter'
import EffectRack from '../../Styles/EffectRack'
import EffectLabel from '../../Styles/EffectLabel'

const EffectUnit = ({ scale, effect, patch, setPatch }) => {
  const handleChange = (value) => {
    const newValue = (value / scale)
    setPatch({ ...patch, effects: { ...patch.effects, [effect]: newValue } })
  }
  return (
    <div>
      <EffectRack>
        <EffectMeter>
          <Silver
            diameter={50}
            min={0}
            max={10}
            step={1}
            value={Math.floor(patch.effects[effect] * scale)}
            theme={{
              donutColor: 'blue'
            }}
            onValueChange={handleChange}
            ariaLabelledBy={'my-label'}
          />
          <SettingDisplay value={patch.effects[effect]} disabled={true}/>
        </EffectMeter><br></br>
      </EffectRack>
      <EffectLabel>{effect}</EffectLabel>
    </div>
  )
}

export default EffectUnit
