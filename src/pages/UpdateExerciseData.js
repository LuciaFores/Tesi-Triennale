import React from 'react';
import Navbar from '../components/NavbarPRLO';
import UpdateExerciseForm from '../components/FormUpdateExercise';

function UpdateExerciseData(){
    if(localStorage.getItem('caregiverFiscalcode') === null){
        window.location.href = '/login';
    }
    const exType = localStorage.getItem('typeChosen');
    const ability = localStorage.getItem('abilityChosen');

    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col'>
                        <h1>Aggiorna dati dell'esercizio {exType} per l'abilità {ability}</h1>
                    </div>
                </div>
                <div>
                    <UpdateExerciseForm/>
                </div>
            </div>
        </div>
    )
}

export default UpdateExerciseData;