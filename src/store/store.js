import {createStore} from 'redux';
import usuarioReducer from './usuarioReducer.js'

const store = createStore(usuarioReducer);

export default store;