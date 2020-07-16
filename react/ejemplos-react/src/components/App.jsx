import React, { Component } from 'react'
import TiposDeComponentes from './tipos-de-componentes/TiposDeComponentes';
import PropiedadesYEstado from './propiedades-y-estado/PropiedadesYEstado';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <h1>Hola mundo!</h1>
        <p>Un parrafo</p> */}
        {/* <TiposDeComponentes /> */}
        <PropiedadesYEstado />
      </div>
    )
  }
}

// return React.createElement(
//   'div',
//   null,
//   React.createElement(
//     'h1',
//     null,
//     'Hola mundo!'
//   ),
//   React.createElement(
//     'p',
//     null,
//     'Un parrafo'
//   )
// )