import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Inicio from './Inicio';
import NuevoUsuario from './NuevoUsuario';
import Header from './Header';
import InfoUsuario from './InfoUsuario';
import Error from './Error';

const Routing = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <BrowserRouter>

      <Header />

      <button
        type="button"
        onClick={() => setLoggedIn(!loggedIn)}
      >{loggedIn ? 'Logout' : 'Login'}</button>

      <Switch>
        <Route path="/usuarios" component={Inicio} />

        {
          loggedIn
          ?
          <Route path="/nuevo-usuario" component={NuevoUsuario} />
          :
          null
        }


        {/* <Route path="/:id" component={InfoUsuario} /> */}
        <Redirect from="/" exact to="/usuarios" />
        <Route path="*" component={Error} />
      </Switch>

    </BrowserRouter>
  )
}

export default Routing
