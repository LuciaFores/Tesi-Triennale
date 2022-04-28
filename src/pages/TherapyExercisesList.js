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

    const patientName = localStorage.getItem('patientName');
    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row'>
                    <h1>Benvenuto nel percorso terapeutico di {patientName}</h1>   
                </div>
                <div className='row'>
                    <p>
                    Qui troverai tutte le tipologie di esercizi assegnati a {patientName}: consultando le
                    singole tipologie troverai le informazioni sul tipo di esercizio e sulle diverse implementazioni
                    già assegnate. <br/>
                    Vuoi inserire un nuovo esercizio? Clicca <Link to='patientProfile/therapyExercisesList/newExercise'>qui</Link> per
                    scegliere la tipologia e l'abilità dell'esercizio.<br/>
                    Non preoccuparti di eventuali ripetizioni, in caso sia già stato assegnato un esercizio
                    uguale a {patientName} l'inserimento verrà bloccato.
                    </p>
                </div>
                <div className='row'>
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