import React, { Component } from 'react'
import ListaSugus from './ListaSugus'
import Formulario from './Formulario'

export default class ListasYFormularios extends Component {
  render() {
    return (
      <div>
        <h1>Listas y Formularios</h1>
        <ListaSugus />
        <Formulario />
      </div>
    )
  }
}
