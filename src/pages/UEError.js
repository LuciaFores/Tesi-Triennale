import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarPRLO';

function UEError(){
    const patientName = localStorage.getItem('patientName');
    return(
        <div>
            <Navbar/>
            <h1>Esercizio non aggiornato</h1>
            <p>
                Ora puoi cliccare <Link to = '../patientProfile/therapyExercisesTypeList'>qui</Link> per tornare al percorso terapeutico di {patientName}
            </p>
        </div>
    )
}

export default UEError;