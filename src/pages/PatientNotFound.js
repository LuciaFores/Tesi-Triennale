import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarPRLO';

function PatientNotFound(){
    if(localStorage.getItem('patientFiscalcode') != null){
        window.location.href = '/patientprofile';
    }

    return(
        <div>
            <Navbar/>
            <h1>Non siamo riusciti a trovare un paziente con i dati inseriti</h1>
            <p>Clicca <Link to='caregiverprofile'>qui</Link> per tornare al tuo profilo e inserire nuovamente
            i dati del paziente per la ricerca oppure per procedere alla registrazione di un nuovo paziente</p>
        </div>
    )
}

export default PatientNotFound;