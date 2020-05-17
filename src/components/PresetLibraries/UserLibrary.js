import React, { useState, useEffect } from 'react'
import LibraryContainer from '../Styles/LibraryContainer'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import SolidButton from '../Styles/SolidButton'

import apiUrl from '../../apiConfig'

const UserLibrary = ({ user, setPreset, watcher, setWatcher, msgAlert }) => {
  const [presets, setPresets] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/presets`)
      .then(res => setPresets(res.data.presets))
      .catch(console.error)
  }, [watcher])

  const loadPreset = (id) => {
    axios({
      url: `${apiUrl}/presets/${id}`,
      headers: {
        Authorization: 'Token token=' + user.token
      },
      method: 'GET'
    })
      .then(() => msgAlert({
        heading: 'Load Preset Success',
        message: 'Your settings have been adjusted',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Load Preset with error: ' + error.message,
          message: '',
          variant: 'danger'
        })
      })
  }

  const deletePreset = (id) => {
    axios({
      url: `${apiUrl}/presets/${id}`,
      headers: {
        Authorization: 'Token token=' + user.token
      },
      method: 'DELETE'
    })
      .then(() => msgAlert({
        heading: 'Preset Deleted',
        message: '',
        variant: 'warning'
      }))
      .then(setWatcher(watcher + 1))
  }

  const presetsJsx = presets.map(preset => {
    // if (preset.owner === user._id) {
    return (<tr key={preset._id}>
      <td>{preset.title}</td>
      <td>
        <SolidButton primaryColor='green' secondaryColor="black" onClick={() => loadPreset(preset._id)}>
        Load
        </SolidButton>
      </td>
      <td>
        <SolidButton primaryColor='red' secondaryColor="black" onClick={() => deletePreset(preset._id)}>
        Delete
        </SolidButton>
      </td>
    </tr>)
    // }
  })

  return (
    <LibraryContainer>
      <div>
        <Table size="sm" variant="dark" responsive="sm">
          <thead>
            <tr>
              <th>Title</th>
              <th>Load</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {presetsJsx}
          </tbody>
        </Table>
      </div>
    </LibraryContainer>
  )
}

export default UserLibrary
