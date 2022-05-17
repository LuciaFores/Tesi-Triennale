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
            <div className='container'> 
                <div className='row mt-md-3'>
                    <h1>La richiesta di modifica della password non è andata a buon fine</h1>
                </div>
                <div className='row'>
                    <p>Clicca <Link to='/caregiverprofile'>qui</Link> per tornare al tuo profilo </p>
                    <p>Oppure clicca <Link to='/caregiverprofile/changepw'>qui</Link> per ripetere la procedura</p>
                </div>
            </div>
        </div>
    )
}

export default PasswordNotModified;