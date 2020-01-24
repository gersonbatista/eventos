import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import store from '../src/store/store';
import {Provider} from 'react-redux';

import Login from './view/login/login';
import NovoUsuario from './view/usuario-novo/usuario-novo';
import EventoCadastro from './view/cadastro/cadastro';
import Home from './view/home/home';
import EventoDetalhes from './view/detalhes/detalhes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/eventos/:parametro' component={Home} />
          <Route exact path='/novousuario' component={NovoUsuario} />
          <Route exact path='/cadastro' component={EventoCadastro} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/detalhes' component={EventoDetalhes} />
        </Router>
      </Provider>
    );
  }
}

export default App;
