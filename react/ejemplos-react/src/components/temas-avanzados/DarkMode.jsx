import React, { Component, Fragment } from 'react'
import { ctxDarkMode } from './TemasAvanzados';

export default class DarkMode extends Component {
  render() {

    const styles = {
      color: this.props.darkMode ? 'white' : 'black',
      backgroundColor: this.props.darkMode ? 'black' : 'white',
    }

    return (
      <Fragment>
        <h2 style={styles}>Componente con Fragment de React y Context API</h2>
      </Fragment>
    )
  }
}
