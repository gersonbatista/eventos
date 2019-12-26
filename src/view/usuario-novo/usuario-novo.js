import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import firebase  from '../config/firebase'
import 'firebase/auth';
import './usuario-novo.css';


function NovoUsuario(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] =  useState();
    const [carregando, setCarregando] = useState();

    function cadastrar(){

            setCarregando(1);
            setMsgTipo(null);

            if(!email || !senha ){
                setMsgTipo('erro');
                setCarregando(0);
                setMsg('Informe o email e a senha');
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email, senha).then(result =>{
                setCarregando(0);
                setMsgTipo('sucesso')
            
            }).catch(erro =>{
                setCarregando(0);
                setMsgTipo('erro');
                switch(erro){
                    case 'Password should be at least 6 characters':
                        setMsg('Senha deve ter pelo menos 6 caracteres')
                        break;
                    case 'The email address os badly formatted.':
                        setMsg('Email inválido.')
                        break;
                    case 'The email address is already in use by another account.':
                        setMsg('O email informado já está cadastrado para outro usuário.')
                        break;
                    default:
                        setMsg('Não foi possível cadastrar. Tente novamente mais tarde.')
                        break;
                }
            })
    }

    return(
        <div className="cadastro">
            <form className="text-center form-login mx-auto mt-5">
                 <h1 className="h3 mb-3 text-white font-weight-blod">Cadastro</h1>                 

                 <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="email" />
                 <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="senha" />

                 {
                     carregando ? <div class="spinner-border text-warning" role="status"><span className="sr-only">Carregando...</span></div>
                     :<button onClick={cadastrar} type="button" className="btn tbn-lg btn-block mt-3 mb-5 btn-cadastro">Cadastrar</button>
                 }

                 <div className="msg-login text-black text-center my-5">
                    {msgTipo === 'sucesso' && <span><strong>Usuário cadastrado com sucesso</strong></span>} 
                    {msgTipo === 'erro' && <span><strong></strong>{msg}</span>} 
                 </div>

                 <div className="opcoes-login mt-5">
                    <Link to='login' className="mx-2">Voltar</Link>
                </div>
                 
            </form>

        </div>
    )
}

export default NovoUsuario;