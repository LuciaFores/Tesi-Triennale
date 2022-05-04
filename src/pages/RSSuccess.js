import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarPRLO';

function RSSuccess(){
    const patientName = localStorage.getItem('patientName');
    return(
        <div>
            <Navbar/>
            <h1>La richiesta è stata inviata con successo!</h1>
            <p>
                Ora puoi cliccare <Link to = '../patientProfile/therapyExercisesTypeList'>qui</Link> per tornare al percorso terapeutico di {patientName}
            </p>
        </div>
    )
}

export default RSSuccess;