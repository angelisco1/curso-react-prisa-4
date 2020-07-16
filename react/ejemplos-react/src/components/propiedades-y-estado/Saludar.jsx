import React from 'react'

const Saludar = (props) => {
  // const nombre = 'Angel'
  console.log(props)

  return (
    <div>
      <p>Hola {props.nombre}</p>
    </div>
  )
}

export default Saludar
