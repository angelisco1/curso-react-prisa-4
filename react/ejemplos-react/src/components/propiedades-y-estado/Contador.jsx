import React, { Component } from 'react'


export default class Contador extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cuenta: 0
    }
    this.decrementar = this.decrementar.bind(this);
    this.incrementar = this.incrementar.bind(this);
  }

  decrementar() {
    // this = undefined

    // Asi NO se cambia el estado
    // this.state.cuenta = this.state.cuenta - 1
    // this.state.cuenta--

    // Asi SI se cambia el estado
    const nuevaCuenta = this.state.cuenta - 1
    this.setState({
      cuenta: nuevaCuenta,
    })
  }

  incrementar() {
    // console.log(this.state)
    this.setState({
      cuenta: this.state.cuenta + 1
    })
  }

  render() {
    // if (this.state.cuenta >= -1) {
    //   this.incrementar()
    // }

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