import React from 'react'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import SaveBox from '../Styles/SaveBox'
import SaveForm from '../Styles/SaveForm'
import TitleInput from '../Styles/TitleInput'
import DescriptionInput from '../Styles/DescriptionInput'
import SolidButton from '../Styles/SolidButton'
import SaveButton from '../Styles/SaveButton'

const SavePreset = ({ preset, setPreset, user, setWatcher, watcher, msgAlert }) => {
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
      .then(() => {
        msgAlert({
          heading: 'Save Preset Success',
          message: `The synth patch ${preset.title}: has been saved `,
          variant: 'success'
        })
        setPreset({ ...preset, title: '', description: '' })
      })
      .then(setWatcher(watcher + 1))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Save Preset With Error: ' + error.message,
          message: 'Make sure to fill out all forms',
          variant: 'danger'
        })
      })
  }

  const handleChange = event => {
    event.persist()
    setPreset(preset => ({ ...preset, [event.target.name]: event.target.value }))
  }

  const updateDescription = (id) => {
    axios({
      url: `${apiUrl}/presets/${id}`,
      headers: {
        Authorization: 'Token token=' + user.token
      },
      method: 'PATCH',
      data: { description: preset.description }
    })
      .then(() => msgAlert({
        heading: 'Update Description Success',
        message: 'Success',
        variant: 'success'
      }))
      .catch(error => {
        setPreset({ ...preset, description: '' })
        msgAlert({
          heading: 'Sign In Failed with error: ' + error.message,
          message: 'failure',
          variant: 'danger'
        })
      })
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
