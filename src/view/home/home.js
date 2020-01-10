import React from 'react';
import NavBar from '../../components/navbar/navbar';
import {Link} from 'react-router-dom'
import './home.css'
import Card from '../../components/card/card';


function Home(){
    return(
        <React.Fragment>
        <NavBar/>
        <Card />
        </React.Fragment>
    )
}

export default Home;