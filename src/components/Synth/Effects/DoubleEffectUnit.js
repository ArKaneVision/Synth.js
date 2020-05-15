import React from 'react'
import { Silver, Basic } from 'react-dial-knob'
import SettingDisplay from '../../Styles/SettingDisplay'
import EffectMeter from '../../Styles/EffectMeter'
import EffectRack from '../../Styles/EffectRack'
import EffectLabel from '../../Styles/EffectLabel'
import WetDryBox from '../../Styles/WetDryBox'

const DoubleEffectUnit = ({ mainEffect, scale1, scale2, effect1, effect2, preset, setPreset, highRange1, lowRange1, highRange2, lowRange2 }) => {
  const handleChange1 = (value) => {
    const newValue = (value / scale1)
    setPreset({ ...preset, effects: { ...preset.effects, [mainEffect]: { ...preset.effects[mainEffect], [effect1]: newValue } } })
  }
  const handleChange2 = (value) => {
    const newValue = (value / scale2)
    setPreset({ ...preset, effects: { ...preset.effects, [mainEffect]: { ...preset.effects[mainEffect], [effect2]: newValue } } })
  }
  const changeWetDry = (value) => {
    const newValue = (value / 10)
    setPreset({ ...preset, effects: { ...preset.effects, [mainEffect]: { ...preset.effects[mainEffect], wetDry: newValue } } })
  }
  return (
    <div>
      <EffectRack>
        <EffectMeter>
          <Silver
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
          <Silver
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
        <WetDryBox>
          <Basic
            diameter={50}
            min={0}
            max={10}
            step={1}
            value={Math.floor(preset.effects[mainEffect].wetDry * 10)}
            theme={{
              donutColor: 'blue'
            }}
            onValueChange={changeWetDry}
            ariaLabelledBy={'my-label'}
          />
          <EffectLabel>w / d</EffectLabel>
        </WetDryBox>
      </EffectRack>
      <EffectLabel>{effect1} / {effect2}</EffectLabel><br></br>
      <EffectLabel>{mainEffect}</EffectLabel>
    </div>
  )
}

export default DoubleEffectUnit
