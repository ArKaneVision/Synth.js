import React from 'react'
// import { Donut } from 'react-dial-knob'
import SettingDisplay from '../../Styles/SettingDisplay'

const Master = ({ setPatch, patch, setting }) => {
  const adjust = () => {
    if (patch.master.noteLength > 10) {
      setPatch({ ...patch, master: { ...patch.master, [setting]: 10 } })
    } else if (patch.master.noteLength < 0) {
      setPatch({ ...patch, master: { ...patch.master, [setting]: 0.2 } })
    }
  }
  const handleChange = (value) => {
    setPatch({ ...patch, master: { ...patch.master, [setting]: event.target.value } })
  }
  return (
    <div>
      <SettingDisplay value={patch.master.noteLength} type='number' min='0.2' max='10' step='0.2'onChange={handleChange} onKeyUp={adjust}/>
      <label>length</label>
    </div>
  )
}

export default Master
