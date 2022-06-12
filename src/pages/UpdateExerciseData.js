import React from 'react';
import Navbar from '../components/NavbarPRLO';
import UpdateExerciseForm from '../components/FormUpdateExercise';
import { Link } from 'react-router-dom';

function Redirect(){
    return(
        <div>
            <p>
                Vuoi tornare alla pagina di consultazione dei risultati? Clicca <Link to='/patientProfile/therapyExercisesTypeList/therapyExercisesList/exerciseResults'>qui</Link>!
            </p>
        </div>
    );
}

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
                <div className='row'>
                    <Redirect/>
                </div>
            </div>
        </div>
    )
}

export default UpdateExerciseData;