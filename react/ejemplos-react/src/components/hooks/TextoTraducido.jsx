import React, { useContext } from 'react'
import { ctxLang } from './Hooks';


const translate = (txt, lang = 'es') => {
  const traducciones = {
    es: {
      hola_mundo: 'Hola mundo'
    },
    en: {
      hola_mundo: 'Hello world'
    }
  }

  return traducciones[lang][txt]
}


const TextoTraducido = () => {
  const lang = useContext(ctxLang)

  return (
    <div>
      <p>{translate('hola_mundo', lang)}!</p>
    </div>
  )
}

export default TextoTraducido
