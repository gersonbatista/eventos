import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './view/login/login';
import NovoUsuario from './view/usuario-novo/usuario-novo';
import Home from './view/home/home';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/novousuario' component={NovoUsuario} />
        <Route exact path='/login' component={Login} />
      </Router>
    );
  }
}

export default App;
