import React from 'react';
import Navbar from "../components/NavbarPRLO";
import EserciziEspressivo from '../components/EserciziEspressivo';
import imgInstr from "../img/imgInstr.svg";
import {displayExercise} from '../components/Utils';


function Instruction(){
    return(
        <div className="card mt-4 border-primary">
            <img className="card-img-top img-fluid" src={imgInstr} alt="Card image cap"/>
            <hr/>
            <div className="card-body">
                <p className="card-text">
                    <h5>Istruzioni per l'esecuzione dell'esercizio</h5>
                    <ol>
                        <li>Sullo schermo appare un immagine</li>
                        <li>Il paziente deve pronunciare la parola associata all'immagine</li>
                        <li>Il caregiver è tenuto ad aprire il microfono (cliccando sul pulsante "Ascolta") per premettere al bambino di pronunciare la parola associata all'immagine: una volta aperto il microfono il caregiver non deve più parlare al bambino</li>
                        <li>Le parole pronunciate dal paziente vengono mostrate nella pagina: quando si vuole inviare la risposta si blocca il microfono (cliccando sul pulsante "Stop") e si invia la risposta (cliccando sul pulsante "Invia Risposta")</li>
                        <li>Nel caso in cui sia necessario resettare la risposta data prima dell'invio si può cliccare sul pulsante "Reset"</li>
                        <li>Dopo circa un minuto che non si riceve risposta dal paziente l'esercizio può essere considerato non eseguito e si può passare al successivo</li>
                    </ol>
                    <button className='btn btn-primary' onClick={displayExercise}>Iniziamo!</button>

                </p>
            </div>
        </div>
    );
}

function Espressivo(){
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
                    <EserciziEspressivo/>
                </div>
            </div>
        </div>
    )
}

export default Espressivo;