import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarSULI';

function FPWError(){
    if(localStorage.getItem('caregiverFiscalcode') != null){
        window.location.href = '/caregiverprofile';
    }

    return(
        <div>
            <Navbar/>
            <h1>Errore</h1>
            <p>Non siamo riusciti a procedere con la richiesta per la password dimenticata.</p>
            <p>Clicca <Link to='/forgotPW'>qui</Link> per ripetere la procedura!</p>
            <p>Oppure clicca <Link to='/login'>qui</Link>per autenticarti.</p>
        </div>
    )
}

export default FPWError;