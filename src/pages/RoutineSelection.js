import React from 'react';
import { Link } from 'react-router-dom';
import AllExercisesTable from '../components/AllExercisesTable';
import Navbar from '../components/NavbarPRLO';
import {clearRoutine, saveRoutine} from '../components/Utils';

function Redirect(){
    return(
        <p>
            Vuoi tornare al profilo del paziente? Clicca <Link to='/patientprofile' onClick={clearRoutine}>qui</Link>!
        </p>
    );
}

function RoutineSelection(){
    if(localStorage.getItem('caregiverFiscalcode') === null){
        window.location.href = '/login';
    }
    if(localStorage.getItem('patientFiscalcode') === null){
        window.location.href = '/caregiverprofile';
    }

    const patientName = localStorage.getItem('patientName');
    localStorage.setItem('routine', "");
    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row mt-md-3'>
                    <h1>Benvenuto nella sezione per la creazione della routine di allenamento di {patientName}</h1>
                </div>
                <div className='row'>
                    <p>
                        Aggiungi alla routine tutti gli esercizi che desideri far eseguire al paziente!
                    </p>
                </div>
                <div className='row table-responsive'>
                <AllExercisesTable/>
                <div className='row'>
                    <div className='col-md-4 offset-md-7'>
                        <button className='btn btn-primary' onClick={saveRoutine}>Avvia la routine!</button>
                    </div>
                </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Redirect/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoutineSelection;