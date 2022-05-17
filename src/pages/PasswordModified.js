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
                    <h1>La tua password è stata correttamente modificata!</h1>
                </div>
                <div className='row'>
                    <p>Clicca <Link to='/caregiverprofile'>qui</Link> per tornare al tuo profilo </p>
                </div>
            </div>
        </div>
    )
}

export default PasswordNotModified;