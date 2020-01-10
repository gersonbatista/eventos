import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './card.css'

function Card(){
    return(
        <div className='col-md-3 col-sm-12'>
            <img id='banner' src='https://via.placeholder.com/150' className='card-img-cartao' alt='Imagem do Evento' />

            <div className='card-body'>
                <h5>Título do Evento</h5>
                <p className='card-text text-justify'>Detalhes do Evento</p>

                <div className='row rodape-card d-flex align-items-center'>
                    
                    <div className='col-6'>
                        <Link to='/' className='btn-sm btn-detalhes'>+ detalhes</Link>
                    </div>

                    <div className='col-6 text-right'>
                        <i className='fas fa-eye'></i><span>10</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Card;