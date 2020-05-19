import React from 'react'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import SaveBox from '../Styles/SaveBox'
import SaveForm from '../Styles/SaveForm'
import TitleInput from '../Styles/TitleInput'
import DescriptionInput from '../Styles/DescriptionInput'
import SolidButton from '../Styles/SolidButton'
import SaveButton from '../Styles/SaveButton'

const SavePatch = ({ patch, setPatch, user, setWatcher, watcher, msgAlert }) => {
  const handleSubmit = event => {
    event.preventDefault()
    delete patch._id
    axios({
      url: `${apiUrl}/patches`,
      headers: {
        Authorization: 'Token token=' + user.token
      },
      method: 'POST',
      data: { patch }
    })
      .then(() => {
        msgAlert({
          heading: 'Save Patch Success',
          message: `The synth patch ${patch.title}: has been saved `,
          variant: 'success'
        })
        setPatch({ ...patch, title: '', description: '' })
      })
      .then(() => {
        setWatcher(watcher + 1)
      })
      .catch(error => {
        msgAlert({
          heading: 'Failed to Save Patch With Error: ' + error.message,
          message: 'Make sure to fill out all forms',
          variant: 'danger'
        })
      })
  }

  const handleChange = event => {
    event.persist()
    setPatch(patch => ({ ...patch, [event.target.name]: event.target.value }))
  }

  const updateDescription = (id) => {
    axios({
      url: `${apiUrl}/patches/${id}`,
      headers: {
        Authorization: 'Token token=' + user.token
      },
      method: 'PATCH',
      data: { description: patch.description }
    })
      .then(() => msgAlert({
        heading: 'Update Description Success',
        message: 'Success',
        variant: 'success'
      }))
      .catch(error => {
        setPatch({ ...patch, description: '' })
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
          value={patch.title}
          onChange={handleChange}
        /><br></br>
        <DescriptionInput
          maxlength='1'
          rows={3}
          name='description'
          placeholder="Description"
          value={patch.description}
          onChange={handleChange}
        /><br></br>
      </SaveForm>
      <SaveButton primaryColor='green' secondaryColor="black" onClick={handleSubmit}>
      Save
      </SaveButton>
      <SolidButton primaryColor='green' secondaryColor="black" onClick={() => updateDescription(patch._id)}>
      Updt Des
      </SolidButton>
    </SaveBox>
  )
}

export default SavePatch
