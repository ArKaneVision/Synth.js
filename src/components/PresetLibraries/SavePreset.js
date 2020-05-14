import React from 'react'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import SaveBox from '../Styles/SaveBox'

const SavePreset = ({ preset, setPreset, user, setWatcher, watcher }) => {
  const handleSubmit = event => {
    event.preventDefault()
    setWatcher(watcher + 1)
    delete preset._id
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
    <SaveBox>
      <form onSubmit={handleSubmit}>
        <input
          name='title'
          placeholder="Title"
          value={preset.title}
          onChange={handleChange}
        /><br></br>
        <input
          name='description'
          placeholder="Description"
          value={preset.description}
          onChange={handleChange}
        /><br></br>
        <button
          type='submit'
        >
        Save
        </button>
      </form>
    </SaveBox>
  )
}

export default SavePreset
