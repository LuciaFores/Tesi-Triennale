import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarPRLO';

function RDError(){
    if(localStorage.getItem('caregiverFiscalcode') === null){
        window.location.href = '/login';
    }

    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row mt-md-3'>
                    <h1>Errore</h1>
                </div>
                <div className='row'>
                    <p>Non siamo riusciti a procedere con la richiesta per la registrazione di una nuova disabilità.</p>
                    <p>Clicca <Link to='/registerDisability'>qui</Link> per ripetere la procedura!</p>
                    <p>Oppure clicca <Link to='/caregiverprofile'>qui</Link> per tornare al tuo profilo.</p>
                </div>
            </div>
        </div>
    )
}

export default RDError;