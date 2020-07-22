import React from 'react'
import { ctxDarkMode } from './TemasAvanzados';

export const withDarkMode = (CmpWrapped) => {
  // Return nuevo componente funcional
  return (props) => {
    // Return de la estructura del nuevo componente (render)
    return (
      <ctxDarkMode.Consumer>
        {
          (darkMode) => {
            // Return del consumidor
            return <CmpWrapped {...props} darkMode={darkMode} />
          }
        }
      </ctxDarkMode.Consumer>
    )
  }
}
