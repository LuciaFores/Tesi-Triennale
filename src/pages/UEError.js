import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarPRLO';

function UEError(){
    const patientName = localStorage.getItem('patientName');
    return(
        <div>
            <Navbar/>
            <div className='container'> 
                <div className='row mt-3'>
                    <h1>Esercizio non aggiornato</h1>
                </div>
                <div className='row'>
                    <p>
                        Ora puoi cliccare <Link to = '../patientProfile/therapyExercisesTypeList'>qui</Link> per tornare al percorso terapeutico di {patientName}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UEError;