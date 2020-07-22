import React, { useState } from 'react'
import Autocomplete from './Autocomplete'
import Timer from './Timer'

const Hooks = () => {
  const [mostrarTimer, setMostrarTimer] = useState(true)

  return (
    <div>
      <h1>React Hooks</h1>
      <Autocomplete />
      <button
        type="button"
        onClick={() => setMostrarTimer(!mostrarTimer)}
      >Toggle Timer</button>
      {mostrarTimer ? <Timer /> : null}
    </div>
  )
}

export default Hooks
