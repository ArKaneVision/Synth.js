import React, { useState, useEffect } from 'react'
import LibraryContainer from '../Styles/LibraryContainer'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import SolidButton from '../Styles/SolidButton'

import apiUrl from '../../apiConfig'

const UserLibrary = ({ user, setPreset, watcher, setWatcher }) => {
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
      .then(res => setPreset(res.data.preset))
      .catch(console.error)
  }

  const deletePreset = (id) => {
    setWatcher(watcher + 1)
    axios({
      url: `${apiUrl}/presets/${id}`,
      headers: {
        Authorization: 'Token token=' + user.token
      },
      method: 'DELETE'
    })
  }

  const presetsJsx = presets.map(preset => (
    <tr key={preset._id}>
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
    </tr>
  ))

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
