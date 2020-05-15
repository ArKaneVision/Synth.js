import React from 'react'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import SaveBox from '../Styles/SaveBox'
import SaveForm from '../Styles/SaveForm'
import TitleInput from '../Styles/TitleInput'
import DescriptionInput from '../Styles/DescriptionInput'
import SolidButton from '../Styles/SolidButton'
import SaveButton from '../Styles/SaveButton'

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
  }

  const updateDescription = (id) => {
    console.log(id)
    axios({
      url: `${apiUrl}/presets/${id}`,
      headers: {
        Authorization: 'Token token=' + user.token
      },
      method: 'PATCH',
      data: { description: preset.description }
    })
      .then(res => console.log(res))
      .catch(console.error)
  }

  return (
    <SaveBox>
      <h4>Save Your Settings</h4>
      <SaveForm onSubmit={handleSubmit}>
        <TitleInput
          maxlength='15'
          name='title'
          placeholder="Title"
          value={preset.title}
          onChange={handleChange}
        /><br></br>
        <DescriptionInput
          maxlength='1'
          rows={3}
          name='description'
          placeholder="Description"
          value={preset.description}
          onChange={handleChange}
        /><br></br>
      </SaveForm>
      <SaveButton primaryColor='green' secondaryColor="black" onClick={handleSubmit}>
      Save
      </SaveButton>
      <SolidButton primaryColor='green' secondaryColor="black" onClick={() => updateDescription(preset._id)}>
      Updt Des
      </SolidButton>
    </SaveBox>
  )
}

export default SavePreset
