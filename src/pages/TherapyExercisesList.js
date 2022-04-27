import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarPRLO';

function TherapyExercisesList(){
    if(localStorage.getItem('caregiverFiscalcode') === null){
        window.location.href = '/login';
    }
    if(localStorage.getItem('patientFiscalcode') === null){
        window.location.href = '/caregiverprofile';
    }

    const patientName = localStorage.getItem('patientName');
    return(
        <div>
            <Navbar/>
            <h1>Benvenuto nel percorso terapeutico di {patientName}</h1>
        </div>
    )
}

export default TherapyExercisesList;