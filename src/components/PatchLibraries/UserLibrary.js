import React, { useState, useEffect } from 'react'
import LibraryContainer from '../Styles/LibraryContainer'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import SolidButton from '../Styles/SolidButton'

import apiUrl from '../../apiConfig'

const UserLibrary = ({ user, setPatch, watcher, setWatcher, msgAlert }) => {
  const [patches, setPatchs] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/patches`)
      .then(res => setPatchs(res.data.patches))
      .catch(console.error)
  }, [watcher])

  const loadPatch = (id) => {
    axios({
      url: `${apiUrl}/patches/${id}`,
      headers: {
        Authorization: 'Token token=' + user.token
      },
      method: 'GET'
    })
      .then(res => setPatch(res.data.patch))
      .then(() => msgAlert({
        heading: 'Load Patch Success',
        message: 'Your settings have been adjusted',
        variant: 'success'
      }))
      .then(() => {
        setWatcher(watcher + 1)
      })
      .catch(error => {
        msgAlert({
          heading: 'Failed to Load Patch with error: ' + error.message,
          message: '',
          variant: 'danger'
        })
      })
  }

  const deletePatch = (id) => {
    axios({
      url: `${apiUrl}/patches/${id}`,
      headers: {
        Authorization: 'Token token=' + user.token
      },
      method: 'DELETE'
    })
      .then(() => msgAlert({
        heading: 'Patch Deleted',
        message: '',
        variant: 'warning'
      }))
      .then(() => {
        setWatcher(watcher + 1)
      })
  }

  const patchesJsx = patches.map(patch => {
    // if (patch.owner === user._id) {
    return (<tr key={patch._id}>
      <td>{patch.title}</td>
      <td>
        <SolidButton primaryColor='green' secondaryColor="black" onClick={() => loadPatch(patch._id)}>
        Load
        </SolidButton>
      </td>
      <td>
        <SolidButton primaryColor='red' secondaryColor="black" onClick={() => deletePatch(patch._id)}>
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
            {patchesJsx}
          </tbody>
        </Table>
      </div>
    </LibraryContainer>
  )
}

export default UserLibrary
