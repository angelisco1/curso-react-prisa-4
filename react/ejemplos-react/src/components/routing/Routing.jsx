import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Inicio from './Inicio';
import NuevoUsuario from './NuevoUsuario';
import Header from './Header';
import InfoUsuario from './InfoUsuario';

const Routing = () => {
  return (
    <BrowserRouter>

      <Header />

      <Route path="/" exact component={Inicio} />
      <Route path="/nuevo-usuario" component={NuevoUsuario} />
      <Route path="/:id" component={InfoUsuario} />

    </BrowserRouter>
  )
}

export default Routing
