import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarPRLO';
import ExercisesTypeTable from '../components/ExercisesTypeTable';
import {clearExTypes} from '../components/Utils';

function Redirect(){
    return(
        <p>
            Vuoi tornare al profilo del paziente? Clicca <Link to='/patientprofile' onClick={clearExTypes}>qui</Link>
        </p>
    );
}

function TherapyExercisesList(){
    if(localStorage.getItem('caregiverFiscalcode') === null){
        window.location.href = '/login';
    }
    if(localStorage.getItem('patientFiscalcode') === null){
        window.location.href = '/caregiverprofile';
    }
    if(localStorage.getItem('exercises') != null){
        localStorage.removeItem('exercises');
    }
    if(localStorage.getItem('typeChosen') != null){
        localStorage.removeItem('typeChosen');
    }
    if(localStorage.getItem('exerciseName') != null){
        localStorage.removeItem('exerciseName');
    }
    if(localStorage.getItem('exerciseDescription') != null){
        localStorage.removeItem('exerciseDescription');
    }
    if(localStorage.getItem('exerciseExecution') != null){
        localStorage.removeItem('exerciseExecution');
    }
    if(localStorage.getItem('exerciseRes') != null){
        localStorage.removeItem('exerciseRes');
    }
    if(localStorage.getItem('exerciseInformationData') != null){
        localStorage.removeItem('exerciseInformationData');
    }
    if(localStorage.getItem('exercisesData') != null){
        localStorage.removeItem('exercisesData');
    }
    if(localStorage.getItem('abilityChosen') != null){
        localStorage.removeItem('abilityChosen');
    }
    

    const patientName = localStorage.getItem('patientName');
    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row mt-md-3'>
                    <h1>Benvenuto nel percorso terapeutico di {patientName}</h1>   
                </div>
                <div className='row'>
                    <p>
                    Qui troverai tutte le tipologie di esercizi assegnati a {patientName}: consultando le
                    singole tipologie troverai le informazioni sul tipo di esercizio e sulle diverse implementazioni
                    già assegnate.
                    </p>
                    <p>
                    Vuoi inserire un nuovo esercizio? Clicca <Link to='./newExercise'>qui</Link> per
                    scegliere la tipologia e l'abilità dell'esercizio.<br/>
                    Non preoccuparti di eventuali ripetizioni, in caso sia già stato assegnato un esercizio
                    uguale a {patientName} l'inserimento verrà bloccato.
                    </p>
                </div>
                <div className='row table-responsive'>
                    <ExercisesTypeTable/>
                </div>
                <div className='row'>
                    <Redirect/>
                </div>
            </div>
        </div>
    )
}

export default TherapyExercisesList;