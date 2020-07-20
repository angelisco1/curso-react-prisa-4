import React, { Component } from 'react'
import TiposDeComponentes from './tipos-de-componentes/TiposDeComponentes';
import PropiedadesYEstado from './propiedades-y-estado/PropiedadesYEstado';
import ListasYFormularios from './listas-y-formularios/ListasYFormularios';
import CicloDeVida from './ciclo-de-vida/CicloDeVida';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <h1>Hola mundo!</h1>
        <p>Un parrafo</p> */}
        {/* <TiposDeComponentes /> */}
        {/* <PropiedadesYEstado /> */}
        {/* <ListasYFormularios /> */}
        <CicloDeVida />
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