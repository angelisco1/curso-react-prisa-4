import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/nuevo-usuario">Nuevo usuario</Link>
      </li>
      <li>
        <Link to="/8">Usuario 8</Link>
      </li>
      <li>
        <Link to="/32">Usuario 32</Link>
      </li>
    </ul>
  )
}

export default Header
