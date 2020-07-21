import React from 'react'

const Meme = ({textoArriba, textoAbajo, imgUrl, color}) => {

  const textStyles = {
    color: color
  }

  return (
    <div className="contenedorMeme">
      <p className="textoMeme textoArriba" style={textStyles}>{textoArriba}</p>
      <img src={imgUrl} alt="Imagen del meme"/>
      <p className="textoMeme textoAbajo" style={textStyles}>{textoAbajo}</p>
    </div>
  )
}

export default Meme
