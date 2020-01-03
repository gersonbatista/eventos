import React, {useState} from 'react';
import firebase  from '../config/firebase'
import {Link, Redirect} from 'react-router-dom'
import 'firebase/auth';
import './login.css'

import {useSelector, useDispatch} from 'react-redux';


function Login(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    const dispatch = useDispatch();

    function logar(){
        firebase.auth().signInWithEmailAndPassword(email, senha).then(retorno =>{
                setMsgTipo('sucesso');
                dispatch({type: 'LOG_IN', usuarioEmail: email});
            }).catch(erro =>{
                setMsgTipo('erro');
            });
    }

    return(
        <div className="login-content d-flex align-items-center">

            {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null}

            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <img className="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>

                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="email" autofocus />
                <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="senha" />
                
                <button className="btn btn-lg btn-login btn-block" type="button" onClick={logar}>Logar</button>
                
                <div className="msg-login text-white text-center my-4">
                    {msgTipo === 'sucesso' && <span><strong>conectado</strong></span>}
                    {msgTipo === 'erro' && <span><strong>verifique se a senha ou usuário estão corretos</strong></span>}
                </div>
                
                <div className="opcoes-login mt-5">
                    <a href="#" className="mx-2">Recuperar senha</a>
                    <Link to='novousuario' className="mx-2">Quero me cadastrar</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;
