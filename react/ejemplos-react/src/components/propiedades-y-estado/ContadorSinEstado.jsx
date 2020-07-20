import React, { Component } from 'react'

// const ContadorSinEstado = (props) => {
const ContadorSinEstado = ({cuenta, onIncrement, onDecrement}) => {

  return (
    <div>
      <button type="button" onClick={onDecrement}>-</button>
      <span>Cuenta: {cuenta}</span>
      <button type="button" onClick={onIncrement}>+</button>
    </div>
  )
}

export default ContadorSinEstado