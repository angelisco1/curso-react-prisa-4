import React from 'react'
import Header from '../components/Header'

const MiApp = ({Component, pageProps}) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MiApp
