import React, { useState, useEffect } from 'react'
import LibraryContainer from '../Styles/LibraryContainer'
import Table from 'react-bootstrap/Table'
import axios from 'axios'

import apiUrl from '../../apiConfig'

const UserLibrary = () => {
  const [presets, setPresets] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/presets`)
      .then(res => setPresets(res.data.presets))
      .catch(console.error)
  })

  const presetsJsx = presets.map(preset => (
    <tr key={preset.id}>
      <td>1</td>
      <td>{preset.title}</td>
      <td>Load</td>
      <td>Delete</td>
      <td>{preset.oscSettings.envelope.attack}</td>
    </tr>
  ))

  return (
    <LibraryContainer>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Load</th>
              <th>Delete</th>
              <th>test</th>
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
