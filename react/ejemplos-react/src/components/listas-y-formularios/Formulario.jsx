import React, { Component } from 'react'

export default class Formulario extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const { email, password } = this.state;
    if (!email || !password) {
      alert('Rellena los campos...')
      return false;
    }
    console.log('Peticion para login...')
    console.log({email: email, password: password})
  }

  handleChange(event) {
    // console.dir(event.target.dataset)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" data-campo="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    )
  }
}
