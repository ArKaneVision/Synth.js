import React from 'react'
import { White } from 'react-dial-knob'
import SettingDisplay from '../../Styles/SettingDisplay'
import EffectMeter from '../../Styles/EffectMeter'
import EffectRack from '../../Styles/EffectRack'
import EffectLabel from '../../Styles/EffectLabel'

const TripleEffectUnit = ({ mainEffect, scale1, scale2, scale3, effect1, effect2, effect3, preset, setPreset, highRange1, lowRange1, highRange2, lowRange2, highRange3, lowRange3 }) => {
  const handleChange1 = (value) => {
    const newValue = (value / scale1)
    setPreset({ ...preset, effects: { ...preset.effects, [mainEffect]: { ...preset.effects[mainEffect], [effect1]: newValue } } })
  }
  const handleChange2 = (value) => {
    const newValue = (value / scale2)
    setPreset({ ...preset, effects: { ...preset.effects, [mainEffect]: { ...preset.effects[mainEffect], [effect2]: newValue } } })
  }
  const handleChange3 = (value) => {
    const newValue = (value / scale3)
    setPreset({ ...preset, effects: { ...preset.effects, [mainEffect]: { ...preset.effects[mainEffect], [effect3]: newValue } } })
  }
  return (
    <div>
      <EffectRack>
        <EffectMeter>
          <White
            diameter={50}
            min={lowRange1}
            max={highRange1}
            step={1}
            value={Math.floor(preset.effects[mainEffect][effect1] * scale1)}
            theme={{
              donutColor: 'blue'
            }}
            onValueChange={handleChange1}
            ariaLabelledBy={'my-label'}
          />
          <SettingDisplay value={preset.effects[mainEffect][effect1]} disabled={true}/>
        </EffectMeter>
        <EffectMeter>
          <White
            diameter={50}
            min={lowRange2}
            max={highRange2}
            step={1}
            value={Math.floor(preset.effects[mainEffect][effect2] * scale2)}
            theme={{
              donutColor: 'blue'
            }}
            onValueChange={handleChange2}
            ariaLabelledBy={'my-label'}
          />
          <SettingDisplay value={preset.effects[mainEffect][effect2]} disabled={true}/>
        </EffectMeter>
        <EffectMeter>
          <White
            diameter={50}
            min={lowRange3}
            max={highRange3}
            step={1}
            value={Math.floor(preset.effects[mainEffect][effect3] * scale3)}
            theme={{
              donutColor: 'blue'
            }}
            onValueChange={handleChange3}
            ariaLabelledBy={'my-label'}
          />
          <SettingDisplay value={preset.effects[mainEffect][effect3]} disabled={true}/>
        </EffectMeter>
      </EffectRack>
      <EffectLabel>{effect1} / {effect2} / {effect3}</EffectLabel><br></br>
      <EffectLabel>{mainEffect}</EffectLabel>
    </div>
  )
}

export default TripleEffectUnit
