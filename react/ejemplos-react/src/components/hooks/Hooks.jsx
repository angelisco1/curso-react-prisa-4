import React, { useState, useMemo } from 'react'
import Autocomplete from './Autocomplete'
import Timer from './Timer'
import TextoTraducido from './TextoTraducido';
import AudioPlayer from './AudioPlayer';
import Caja from './Caja';
import { useInput } from './useInput';

export const ctxLang = React.createContext('es');

const Hooks = () => {
  const [mostrarTimer, setMostrarTimer] = useState(true)
  const [lang, setLang] = useState('es')
  // const [nombre, setNombre] = useState('')
  const [nombre, setNombre, nombreValid, erroresNombre] = useInput('', [
    {r: /^a.*/i, msg: 'El nombre tiene que empezar por la A'},
    {r: /[a-zA-Z]{3,}/, msg: 'El nombre tiene que tener 3 o más letras'}
  ])
  const [apellido, setApellido] = useState('')

  // const getNombreCompleto = () => {
    // console.log('Pasa por el nombreCompleto')
    // return `${nombre} ${apellido}`
  // }

  const nombreCompleto = useMemo(() => {
    // console.log('Pasa por el nombreCompleto')
    return `${nombre} ${apellido}`
  }, [nombre, apellido])

  const nombreCompletoConPrefijo = useMemo(() => {
    console.log('Pasa por el prefijo')
    const prefijo = ['a', 'i', 'e'].includes(nombre[nombre.length-1]) ? 'Sra' : 'Sr';
    return `${prefijo} ${nombreCompleto}`
  }, [nombre])

  const handleSelect = (e) => {
    setLang(e.target.value)
  }

  return (
    <div>
      <h1>React Hooks</h1>

      {/* <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} /> */}
      <input type="text" value={nombre} onChange={setNombre} />
      {!nombreValid ? <span>Error, el campo es invalido</span> : null}
      {erroresNombre.map((err, pos) => <li key={pos}>{err}</li>)}


      <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      {/* <p>Me llamo {getNombreCompleto()}</p> */}
      <p>Me llamo {nombreCompleto}</p>
      <p>{nombreCompletoConPrefijo}</p>

      <Autocomplete />
      <button
        type="button"
        onClick={() => setMostrarTimer(!mostrarTimer)}
      >Toggle Timer</button>
      {mostrarTimer ? <Timer /> : null}

      <select name="lang" id="lang" value={lang} onChange={handleSelect}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>

      <ctxLang.Provider value={lang}>
        <TextoTraducido />
      </ctxLang.Provider>

      <AudioPlayer />

      <Caja />
    </div>
  )
}

export default Hooks
