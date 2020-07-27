import React from 'react'

const NuevoUsuario = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Guardando...')
    setTimeout(() => {
      props.history.push('/usuarios')
    }, 1000)
  }

  return (
    <div>
      <h1>Nuevo usuario</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Guardar</button>
      </form>
    </div>
  )
}

export default NuevoUsuario
