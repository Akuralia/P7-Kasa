import React from "react";
import {Link} from 'react-router-dom';
import Navbar from '../components/Navigation';
import Footer from '../components/Footer';

export default function NotFound(){
    return(
        <>
            <Navbar />
            <div className='notfound_main'>
                <h1>404</h1>
                <p>Oups! La page que <br/>vous demandez n'existe pas.</p>
                <Link to="/">
                    <span>Retourner sur la page d'accueil</span>
                </Link>
            </div>
            <Footer /> 
        </>
    )
}