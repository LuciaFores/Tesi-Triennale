import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarPRLO';

function PasswordNotModified(){
    if(localStorage.getItem('caregiverFiscalcode') === null){
        window.location.href = '/login';
    }

    return(
        <div>
            <Navbar/>
            <h1>La richiesta di modifica della password non è andata a buon fine</h1>
            <p>Clicca <Link to='/caregiverprofile'>qui</Link> per tornare al tuo profilo </p>
            <p>Oppure clicca <Link to='/changepw'>qui</Link> per ripetere la procedura</p>
        </div>
    )
}

export default PasswordNotModified;