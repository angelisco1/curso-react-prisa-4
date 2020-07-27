import React from 'react'
import { Link, Route } from 'react-router-dom'
import InfoUsuario from './InfoUsuario';
import InfoRuta from './InfoRuta';

const usuarios = [
  { id: 1, nombre: 'Angel'},
  { id: 56, nombre: 'Charly'},
  { id: 99, nombre: 'Falco'},
]

const Inicio = (props) => {
  const listaUsuarios = usuarios.map(u => (
    <li key={u.id}>
      <Link to={{
        pathname: `${props.match.path}/${u.id}`,
        state: { nombre: u.nombre },
        search: '?mostrar=true'
      }}>Usuario {u.nombre}</Link>
    </li>
  ))

  return (
    <div>
      <h1>Inicio</h1>
      <ul>
        {listaUsuarios}
      </ul>
      <InfoRuta />
      <hr/>
      <Route path={`${props.match.path}/:id`} component={InfoUsuario} />
    </div>
  )
}

export default Inicio
