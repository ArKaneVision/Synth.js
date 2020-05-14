import React from 'react'
// import { Donut } from 'react-dial-knob'
import SettingDisplay from '../../Styles/SettingDisplay'

const Master = ({ setPreset, preset, setting }) => {
  const adjust = () => {
    if (preset.master.noteLength > 10) {
      setPreset({ ...preset, master: { ...preset.master, [setting]: 10 } })
    } else if (preset.master.noteLength < 0) {
      setPreset({ ...preset, master: { ...preset.master, [setting]: 0.2 } })
    }
  }
  const handleChange = (value) => {
    setPreset({ ...preset, master: { ...preset.master, [setting]: event.target.value } })
  }
  return (
    <div>
      <SettingDisplay value={preset.master.noteLength} type='number' min='0.2' max='10' step='0.2'onChange={handleChange} onKeyUp={adjust}/>
      <label>length</label>
    </div>
  )
}

export default Master
