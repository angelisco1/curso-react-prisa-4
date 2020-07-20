import React, { Component } from 'react'
import Sugus from './Sugus'

export default class ListaSugus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listaSugus: [
        { id: 0, color: 'yellow', sabor: 'limón' },
        { id: 1, color: 'orange', sabor: 'naranja' },
        { id: 2, color: 'blue', sabor: 'piña' },
      ]
    }
  }

  render() {
    const componentesSugus = this.state.listaSugus.map((sugus, pos) => {
      return (
        <Sugus sugus={sugus} key={sugus.id} />
      )
    })

    return (
      <div>
        <h2>Lista sugus</h2>
        <ul>
          {componentesSugus}
        </ul>
      </div>
    )
  }
}
