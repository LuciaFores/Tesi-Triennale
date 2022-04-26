import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarPRLO';

function RDSuccess(){
    if(localStorage.getItem('caregiverFiscalcode') === null){
        window.location.href = '/login';
    }

    return(
        <div>
            <Navbar/>
            <h1>Successo!</h1>
            <p>Abbiamo inviato una mail ad un nostro amministratore per l'inserimento della disabilità nella
            lista per la registrazione del paziente!</p>
            <p>Ora clicca <Link to='/caregiverprofile'>qui</Link> per tornare al tuo profilo!</p>
        </div>
    )
}

export default RDSuccess;