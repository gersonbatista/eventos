import React, {useState, useEffect} from 'react';
import NavBar from '../../components/navbar/navbar';
import {Link} from 'react-router-dom'
import './home.css'
import Card from '../../components/card/card';
import firebase  from '../config/firebase'
import { useSelector } from 'react-redux';


function Home({match}){
    const [eventos, setEventos] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    const usuarioEmail =  useSelector(state => state.usuarioEmail);
    let listaEventos = [];

    useEffect(() => {
        let acesso = firebase.firestore().collection('eventos');

        if (match.params.parametro) {
            acesso.where('usuario','=', usuarioEmail).get().then(async (resultado) => {
                await resultado.docs.forEach(doc => {
                    if (doc.data().titulo.indexOf(pesquisa) >= 0) {
                        listaEventos.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    }
                })
                setEventos(listaEventos);
            })

        } else {
            acesso.get().then(async (resultado) => {
                await resultado.docs.forEach(doc => {
                    if (doc.data().titulo.indexOf(pesquisa) >= 0) {
                        listaEventos.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    }
                })
                setEventos(listaEventos);
            })
        }
    });

    return(
        <React.Fragment>
        <NavBar/>

        <div className="row p-3">
            <h2 className="mx-auto p-4">Eventos</h2>
            <input onChange={(e) => setPesquisa(e.target.value)} type='text' className='form-control text-center' placeholder='Pesquisar Evento pelo título'/>
        </div>

        <div className="row p-3">
           {/* {eventos.map(item => <Card/>)} */}
           {eventos.map(item => <Card key={item.id} id={item.id} img={item.foto} titulo={item.titulo} detalhes={item.detalhes} visualizacoes={item.visualizacoes}/>)}

        </div>
        </React.Fragment>
    )
}

export default Home;