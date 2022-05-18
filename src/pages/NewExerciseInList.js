import React from 'react';
import Navbar from '../components/NavbarPRLO';
import NEForm from '../components/FormNewExercise';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { createExerciseTypesOptions, clearExerciseTypesData, clearAbilititesData, createAbilitiesOptions } from '../components/Utils';

function Redirect(){
    return(
        <div>
            <p>
                Non trovi la tipologia di esercizio che vuoi inserire o l'abilità per l'esercizio?<br/>
                Clicca <Link to='./contactForm'>qui</Link> per metterti in contatto con un amministratore di sistema e spiegare
                cosa vorresti inserire nella piattaforma!
            </p>
            <p>
                Vuoi tornare al percorso terapeutico? Clicca <Link to='../patientProfile/therapyExercisesTypeList'>qui</Link>!
            </p>
        </div>
    );
}

function NewExerciseInList(){
    if(localStorage.getItem('exerciseTypesData') === null && localStorage.getItem('exerciseTypes') === null){
        axios.post('http://localhost/tirocinio/getExerciseTypes.php')
        .then(res => 
            localStorage.setItem('exerciseTypesData', res.data),
            window.location.reload()
        )
        .catch(error => console.log(error))
    }

    if(localStorage.getItem('exerciseTypesData') != null && localStorage.getItem('exerciseTypes') === null){
        clearExerciseTypesData();
        localStorage.removeItem('exerciseTypesData');
    }

    if(localStorage.getItem('abilitiesData') === null && localStorage.getItem('abilities') === null){
        axios.post('http://localhost/tirocinio/getAbilities.php')
        .then(res => 
            localStorage.setItem('abilitiesData', res.data),
            window.location.reload()
        )
        .catch(error => console.log(error))
    }

    if(localStorage.getItem('abilitiesData') != null && localStorage.getItem('abilities') === null){
        clearAbilititesData();
        localStorage.removeItem('abilitiesData');
    }


    window.onload = function(){
        createExerciseTypesOptions();
        createAbilitiesOptions();
        localStorage.removeItem('exerciseTypes');
        localStorage.removeItem('abilities');
    }

    const patientName = localStorage.getItem('patientName');
    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row mt-md-3'>
                    <h1>Inserisci un nuovo esercizio nel percorso terapeutico di {patientName}</h1>
                </div>
                <div className='row'>
                    <p>
                        In questa sezione potrai inserire un nuovo esercizio nel percorso terapeutico di {patientName}.
                    </p>
                    <p>
                        Nel caso in cui tu sia un caregiver <strong>professionista</strong> potrai inserire nel
                        percorso esercizi anche di nuove tipologie rispetto a quelli già presenti. <br/>
                        Nel caso in cui tu sia un caregiver <strong>non professionista</strong> allora potrai inserire
                        solo esercizi di tipologie già presenti nel percorso terapeutico. <br/>
                        Non preoccuparti di controllare tutti gli esercizi già inseriti nel percorso: nel caso in cui tu
                        richieda di inserire un esercizio che è già presente nel percorso l'inserimento verrà bloccato.
                    </p>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <NEForm/>
                    </div>
                </div>
                <div className='row'>
                    <Redirect/>
                </div>
            </div>
        </div>
    )
}

export default NewExerciseInList;