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
            <h1>Non è stato possibile accedere alla pagina del paziente</h1>
            <p>
                Questo potrebbe voler dire che hai provato ad accedere al profilo di un paziente non ancora registrato nella piattaforma
                oppure che non ti sei ancora collegato al profilo del paziente come suo caregiver. <br/>
                Clicca <Link to='/caregiverprofile'>qui</Link> per tornare al tuo profilo e inserire nuovamente
                i dati del paziente per la ricerca, per procedere alla registrazione di un nuovo paziente oppure per registrarti come suo caregiver.
            </p>
        </div>
    )
}

export default PatientNotFound;