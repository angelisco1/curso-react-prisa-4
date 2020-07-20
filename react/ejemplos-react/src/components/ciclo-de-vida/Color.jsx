import React, { Component } from 'react'

export default class Color extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: null
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      color: props.num < 0 ? 'red' : 'green'
    }
  }

  render() {
    const styles = {
      width: '100px',
      height: '100px',
      backgroundColor: this.state.color,
    }

    return (
      <div style={styles}>

      </div>
    )
  }
}
