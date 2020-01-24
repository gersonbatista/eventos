import React, { useState } from 'react';
import firebase from '../config/firebase'
import { Link } from 'react-router-dom'
import './detalhes.css'
import { useSelector } from 'react-redux';
import NavBar from '../../components/navbar/navbar';



function eventoDetalhes() {
    return (
        <React.Fragment>
            <NavBar />
        </React.Fragment>
    )
}

export default eventoDetalhes;