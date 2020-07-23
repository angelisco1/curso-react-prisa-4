import React, { useReducer, useEffect } from 'react'

// {
//   posX: 100px
//   posY: 90px
// }

const reducer = (state, action) => {
  switch(action.type) {
    case 'ArrowUp':
      const newPosY = state.posY - 5 < 0 ? state.posY : state.posY - 5;
      return {...state, posY: newPosY}
    case 'ArrowDown':
      return {...state, posY: state.posY + 5}
    case 'ArrowLeft':
      return {...state, posX: state.posX - 5}
    case 'ArrowRight':
      return {...state, posX: state.posX + 5}
    default:
      return state;
  }
}


const Caja = () => {
  const [coords, dispatch] = useReducer(reducer, {posX: 0, posY: 0})

  useEffect(() => {
    const moverCaja = (e) => {
      const action = {
        type: e.key,
      }
      dispatch(action)
    }

    window.addEventListener('keydown', moverCaja)
    return () => {
      window.removeEventListener('keydown', moverCaja)
    }
  }, [])

  const styles = {
    width: '50px',
    height: '50px',
    position: 'absolute',
    backgroundColor: 'black',
    top: `${coords.posY}px`,
    left: `${coords.posX}px`,
  }

  return (
    <div style={styles}>
    </div>
  )
}

export default Caja
