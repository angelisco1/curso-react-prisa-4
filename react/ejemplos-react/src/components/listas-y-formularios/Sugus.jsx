import React from 'react'

const Sugus = ({sugus}) => {
  const styles = {
    backgroundColor: sugus.color,
    width: '70px',
    height: '70px',
  }

  return (
    <li style={styles}>
      {sugus.sabor}
    </li>
  )
}

export default Sugus
