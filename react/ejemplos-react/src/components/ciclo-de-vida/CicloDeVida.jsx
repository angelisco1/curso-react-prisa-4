import React, { Component } from 'react'
import Color from './Color'

export default class CicloDeVida extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      // num: e.target.value
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Ciclo de vida</h1>
        <input type="number" name="num" value={this.state.num} onChange={this.handleChange} />
        {this.state.num % 2 === 0 ? <Color num={this.state.num} /> : null}
        {/* <Color num={-2} /> */}
      </div>
    )
  }
}
