import React from 'react';
import Navbar from "../components/NavbarPRLO";
import EserciziRecettivo from '../components/EserciziRecettivo';
import imgInstr from '../img/imgInstr.svg';
import { displayExercise } from '../components/Utils';

function Instruction(){
    return(
        <div className="card mt-4 border-primary">
            <img className="card-img-top img-fluid" src={imgInstr} alt="Card image cap"/>
            <hr/>
            <div className="card-body">
                <p className="card-text">
                    <h5>Istruzioni per l'esecuzione dell'esercizio</h5>
                    <ol>
                        <li>Sullo schermo appaiono tre immagini</li>
                        <li>Il paziente deve riconoscere l'immagine associata alla parola</li>
                        <li>Il caregiver è tenuto a far ascoltare al bambino la parola associata all'immagine (cliccando sul pulsante "Riproduci")</li>
                        <li>Dopo aver ascoltato la parola il paziente deve indicare l'immagine associata</li>
                        <li>Dopo circa un minuto che non si riceve risposta dal paziente l'esercizio può essere considerato non eseguito e si può passare al successivo</li>
                    </ol>
                    <button className='btn btn-primary' onClick={displayExercise}>Iniziamo!</button>

                </p>
            </div>
        </div>
    );
}

function Recettivo(){
    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row' id='instruction'>
                    <div className='col-md-4 offset-md-4'>
                        <Instruction/>
                    </div>
                </div> 
                <div className='row d-none' id='exercise'>
                    <EserciziRecettivo/>
                </div>
            </div>
        </div>
    )
}

export default Recettivo;