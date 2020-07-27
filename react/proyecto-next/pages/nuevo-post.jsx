import React from 'react'
import Router from 'next/router'

const NuevoPost = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    Router.push('/posts')
  }

  return (
    <div>
      <h1>Nuevo post</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Crear post</button>
      </form>
    </div>
  )
}

export default NuevoPost
