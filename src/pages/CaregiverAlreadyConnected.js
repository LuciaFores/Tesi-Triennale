import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarPRLO';

function CaregiverAlreadyConnected(){
    if(localStorage.getItem('caregiverFiscalcode') === null){
        window.location.href = '/login';
    }

    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row mt-md-3'>
                    <h1>Sei già connesso al paziente indicato!</h1>
                </div>
                <div className='row'>
                    <p>Se vuoi lavorare con lui clicca <Link to='/caregiverprofile'>qui</Link> ed inserisci i suoi
                    dati nell'apposita sezione per accedere alla sua pagina</p>
                </div>
            </div>
        </div>
    )
}

export default CaregiverAlreadyConnected;