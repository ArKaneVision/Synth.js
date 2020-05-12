import React from 'react'
import { Silver } from 'react-dial-knob'

const Evelope = ({ value, setter }) => {
  return (
    <div>
      <Silver
        diameter={50}
        min={1}
        max={10}
        step={1}
        value={value}
        theme={{
          donutColor: 'blue'
        }}
        onValueChange={setter}
        ariaLabelledBy={'my-label'}
      >
        <label id={'my-label'}>Some label</label>
      </Silver>
    </div>
    // <input value={value / 100} disabled={true}/>
  )
}

export default Evelope
