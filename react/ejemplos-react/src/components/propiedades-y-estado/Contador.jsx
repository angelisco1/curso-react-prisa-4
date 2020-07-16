import React, { Component } from 'react'

export default class Contador extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cuenta: 10
    }
  }

  decrementar() {
    console.log('-1')
  }

  incrementar() {
    console.log('+1')
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.decrementar}>-</button>
        <span>Cuenta: {this.state.cuenta}</span>
        <button type="button" onClick={this.incrementar}>+</button>
      </div>
    )
  }
}


// const fn = () => {};
// document.getElementById('btn').addEventListener('click', fn)
// document.getElementById('btn').removeEventListener('click', fn)