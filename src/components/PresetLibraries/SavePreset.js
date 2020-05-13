import React from 'react'
import axios from 'axios'

import apiUrl from '../../apiConfig'
// import PresetForm from './PresetForm'

const SavePreset = ({ preset, setPreset, user }) => {
  const handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/presets`,
      headers: {
        Authorization: 'Token token=' + user.token
      },
      method: 'POST',
      data: { preset }
    })
      .then(res => console.log(res))
      .catch(console.error)
  }

  const handleChange = event => {
    event.persist()
    setPreset(preset => ({ ...preset, [event.target.name]: event.target.value }))
    console.log(preset)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='title'
          placeholder="Title"
          value={preset.title}
          onChange={handleChange}
        />
        <input
          name='description'
          placeholder="Description"
          value={preset.description}
          onChange={handleChange}
        />
        <button
          type='submit'
        >
        Save
        </button>
      </form>
    </div>
  )
}

export default SavePreset
