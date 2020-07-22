import React, { useState, useEffect } from 'react'

const Timer = () => {
  const [time, setTime] = useState(new Date().toTimeString())

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Timer...')
      setTime(new Date().toTimeString())
    }, 1000)

    // Se ejecuta al destruir el componente
    return () => {
      clearInterval(intervalId)
    }

  }, [])

  return (
    <div>
      <p>{time}</p>
    </div>
  )
}

export default Timer
