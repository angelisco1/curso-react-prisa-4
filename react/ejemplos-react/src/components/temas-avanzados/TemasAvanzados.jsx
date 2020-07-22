import React, { Component } from 'react'
import DarkMode from './DarkMode'
import { withHover } from './withHover';
import Sugus from '../listas-y-formularios/Sugus';
import Card from '../propiedades-y-estado/Card';
import { withDarkMode } from './withDarkMode';

export const ctxDarkMode = React.createContext(false);

export default class TemasAvanzados extends Component {
  constructor(props) {
    super(props)
    this.state = {
      darkMode: false
    }
    this.toggleDarkMode = this.toggleDarkMode.bind(this)
  }

  toggleDarkMode() {
    this.setState({
      darkMode: !this.state.darkMode
    })
  }

  render() {

    const SugusHovered = withHover(Sugus)
    const CardHovered = withHover(Card)
    const DarkModeWithConsumer = withDarkMode(DarkMode)
    const CardHoveredWithDarkMode = withDarkMode(CardHovered)

    return (
      <div className="clase1">
        <h1>Temas avanzados</h1>
        <button type="button" onClick={this.toggleDarkMode}>Toggle DarkMode</button>

        <ctxDarkMode.Provider value={this.state.darkMode}>
          <DarkModeWithConsumer />

          <CardHoveredWithDarkMode titulo="Un card" imgUrl="" descripcion="bla bla bla..." />
        </ctxDarkMode.Provider>

        <SugusHovered sugus={{color: 'yellow', sabor: 'limón'}} />

        <CardHovered titulo="Un card" imgUrl="" descripcion="bla bla bla..." />

      </div>
    )
  }
}
