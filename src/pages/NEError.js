import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarSULI';

function NEError(){
    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row mt-md-3'>
                    <h1>Errore</h1>
                </div>
                <div className='row'>
                    <p>
                        Non è stato possibile inserire l'esercizio nel percorso terapeutico del paziente.<br/>
                        Questo può voler dire che l'esercizio è già presente nel percorso terapeutico.
                    </p>
                    <p>Ora clicca <Link to='/patientProfile/therapyExercisesTypeList'>qui</Link> per accedere al percorso terapeutico!</p>
                </div>
            </div>
        </div>
    )
}

export default NEError;