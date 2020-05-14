import React from 'react'
import Form from 'react-bootstrap/Form'

const Oscillator = ({ setPreset, preset }) => {
  const handleChange = (event) => {
    console.log(event.target.value)
    setPreset({ ...preset, oscSettings: { ...preset.oscSettings, oscillator: { ...preset.oscSettings.oscillator, type: event.target.value } } })
    console.log(preset)
  }
  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Wave Form</Form.Label>
          <Form.Control as="select" onChange={handleChange} value={preset.oscSettings.oscillator.modulationType}>
            <option>sine</option>
            <option>sawtooth</option>
            <option>square</option>
            <option>triangle</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Oscillator
