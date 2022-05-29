import React from 'react';
import Navbar from "../components/NavbarPRLO";
import EserciziAppaiamento from "../components/EserciziAppaiamento";
import { displayExercise } from '../components/Utils';
import imgInstr from "../img/imgInstr.svg"

function Instruction(){
    return(
        <div className="card mt-4 border-primary">
            <img className="card-img-top img-fluid" src={imgInstr} alt="Card image cap"/>
            <hr/>
            <div className="card-body">
                <p className="card-text">
                    <h5>Istruzioni per l'esecuzione dell'esercizio</h5>
                    <ol>
                        <li>Sullo schermo appaiono quattro immagini: una in alto e tre in basso</li>
                        <li>L'immagine in alto è quella da indovinare e il paziente può scegliere tra le tre immagini in basso</li>
                        <li>Senza fornire aiuti al paziente si aspetta che questo riconosca ed indichi l'immagine presentata</li>
                        <li>Dopo circa un minuto che non si riceve risposta dal paziente l'esercizio può essere considerato non eseguito e si può passare al successivo</li>
                    </ol>
                    <button className='btn btn-primary' onClick={displayExercise}>Iniziamo!</button>

                </p>
            </div>
        </div>
    );
}

function Appaiamento(){
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
                    <EserciziAppaiamento/>
                </div>
            </div>
        </div>
    )
}

export default Appaiamento;