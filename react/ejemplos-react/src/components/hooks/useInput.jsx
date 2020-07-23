import { useState, useEffect } from 'react';

export const useInput = (initialValue, arrayRegExp = []) => {
  const [value, setValue] = useState(initialValue)
  const [isValid, setIsValid] = useState(true)
  const [errores, setErrores] = useState([])


  useEffect(() => {
    const valid = arrayRegExp.every((regExp) => {
      return value.match(regExp.r)
    })
    setIsValid(valid)
  }, [value])

  useEffect(() => {
    const errorMsgs = arrayRegExp.filter((regExp) => {
      return !value.match(regExp.r)
    }).map(err => err.msg)
    setErrores(errorMsgs)
  }, [value])


  return [
    value,
    (e) => setValue(e.target.value),
    isValid,
    errores
  ]
}