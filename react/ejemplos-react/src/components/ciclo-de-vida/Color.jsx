import React, { Component } from 'react'

export default class Color extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: null,
      intervalId: null
    }
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      console.log('Intervalo...')
    }, 1000)

    this.setState({
      intervalId: intervalId
    })
  }

  componentWillUnmount() {
    console.log('Se va a eliminar...')
    clearInterval(this.state.intervalId)
  }

  static getDerivedStateFromProps(props, state) {
    return {
      color: props.num < 0 ? 'red' : 'green'
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.color !== this.state.color;
  }

  render() {
    console.log('Se pinta');

    const styles = {
      width: '100px',
      height: '100px',
      backgroundColor: this.state.color
    }

    return (
      <div style={styles}>

      </div>
    )
  }
}
