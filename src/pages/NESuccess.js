import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarSULI';

function NESuccess(){
    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row mt-md-3'>
                    <h1>Successo!</h1>
                </div>
                <div className='row'>
                    <p>È stato inserito l'esercizio richiesto nel percorso terapeutico del paziente</p>
                    <p>Ora clicca <Link to='/patientProfile/therapyExercisesTypeList'>qui</Link> per accedere al percorso terapeutico!</p>
                </div>
            </div>
        </div>
    )
}

export default NESuccess;