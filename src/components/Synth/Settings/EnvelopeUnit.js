import React from 'react'
import { Silver } from 'react-dial-knob'

const Evelope = ({ setPreset, preset, setting }) => {
  const handleChange = (value) => {
    setPreset({ ...preset, oscSettings: { ...preset.oscSettings, envelope: { ...preset.oscSettings.envelope, [setting]: value } } })
  }
  return (
    <div>
      <Silver
        diameter={50}
        min={1}
        max={10}
        step={1}
        value={preset.oscSettings.envelope[setting]}
        theme={{
          donutColor: 'blue'
        }}
        onValueChange={handleChange}
        ariaLabelledBy={'my-label'}
      >
        <label id={'my-label'}>Some label</label>
      </Silver>
    </div>
    // <input value={value / 100} disabled={true}/>
  )
}

export default Evelope
