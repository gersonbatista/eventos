import React, {useState} from 'react';
import firebase  from '../config/firebase'
import {Link} from 'react-router-dom'
import 'firebase/auth';
import './login.css'


function Login(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    function logar(){
        firebase.auth().signInWithEmailAndPassword(email, senha).then(retorno =>{

            }).catch(erro =>{
                
            });
    }

    return(
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <img className="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>

                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="email" autofocus />
                <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="senha" />
                
                <button className="btn btn-lg btn-login btn-block" type="button" onClick={logar}>Logar</button>
                
                <div className="msg-login text-white text-center my-4">
                    <span><strong> conectado</strong></span>
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
