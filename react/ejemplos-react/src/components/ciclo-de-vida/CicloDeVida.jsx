import React, { Component } from 'react'
import Color from './Color'

export default class CicloDeVida extends Component {

  render() {
    return (
      <div>
        <h1>Ciclo de vida</h1>
        <Color num={3} />
        <Color num={-2} />
      </div>
    )
  }
}
