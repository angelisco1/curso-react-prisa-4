import React from 'react'

const Card = ({titulo, imgUrl, descripcion}) => {
  return (
    <div>
      <img width="150" src={imgUrl} alt={`Logo de ${titulo}`} />
      <h4>{titulo}</h4>
      <p>{descripcion}</p>
    </div>
  )
}

export default Card



// Imagen src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
// Imagen src=""
// Imagen src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"

// Titulo
// Parrafo