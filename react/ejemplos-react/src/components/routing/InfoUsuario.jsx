import React from 'react'

const InfoUsuario = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Usuario {props.match.params.id}</h2>
    </div>
  )
}

export default InfoUsuario
