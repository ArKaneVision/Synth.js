import React from 'react'
import { Silver } from 'react-dial-knob'
import SettingDisplay from '../../Styles/SettingDisplay'
import EnvelopeMeter from '../../Styles/EnvelopeMeter'
import EffectLabel from '../../Styles/EffectLabel'

const Evelope = ({ setPreset, preset, setting }) => {
  const handleChange = (value) => {
    const newValue = (value / 10)
    setPreset({ ...preset, oscSettings: { ...preset.oscSettings, envelope: { ...preset.oscSettings.envelope, [setting]: newValue } } })
  }
  return (
    <div>
      <EnvelopeMeter>
        <Silver
          diameter={50}
          min={1}
          max={10}
          step={1}
          value={Math.floor(preset.oscSettings.envelope[setting] * 10)}
          theme={{
            donutColor: 'blue'
          }}
          onValueChange={handleChange}
          ariaLabelledBy={'my-label'}
        >
        </Silver>
        <SettingDisplay value={preset.oscSettings.envelope[setting]} disabled={true}/>
      </EnvelopeMeter>
      <EffectLabel>{setting}</EffectLabel><br></br>
    </div>
  )
}

export default Evelope
