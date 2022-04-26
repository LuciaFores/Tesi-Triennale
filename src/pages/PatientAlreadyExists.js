import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarPRLO';

function PatientAlreadyExists(){
    if(localStorage.getItem('patientFiscalcode') != null){
        window.location.href = '/patientprofile';
    }

    return(
        <div>
            <Navbar/>
            <h1>Ooops sembra che esista già un paziente con gli stessi dati inseriti!</h1>
            <p>Clicca <Link to='/caregiverprofile'>qui</Link> per accedere al tuo profilo, in questo
            modo potrai accedere alla pagina del paziente inserendo i dati richiesti nell'apposita sezione
            oppure potrai collegarti come suo caregiver in caso tu non lo sia già!</p>
        </div>
    )
}

export default PatientAlreadyExists;