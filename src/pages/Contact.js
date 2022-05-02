import React from 'react';
import Navbar from '../components/NavbarPRLO';
import ContactForm from '../components/ContactForm.js';
import { Link } from 'react-router-dom';

function Redirect(){
    return(
        <div>
            <p>
                Vuoi tornare all'inserimento di un nuovo esercizio?
                Clicca <Link to='../patientProfile/therapyExercisesTypeList/newExercise'>qui</Link>!
            </p>
        </div>
    )
}

function Contact(){
    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row'>
                    <h1>Contattaci!</h1>
                </div>
                <div className='row'>
                    <p>
                        Scrivi nel box sottostante la tipologia di esercizio o l'abilità che ti piacerebbe venisse
                        inserita nella piattaforma; un amministratore di sistema provvederà al più presto a prendere 
                        in considerazione la richiesta e a mettersi in contatto con te per avere ulteriori informazioni!
                    </p>
                    <p>
                        Nel caso in cui tu stia effettuando la richiesta per l'inserimento di una nuova tipologia di esercizio
                        ti preghiamo di descrivere sia il ruolo del caregiver nella preparazione e nello svolgimento dell'esercizio
                        sia la modalità di esecuzione dell'esercizio da parte del paziente.
                    </p>
                </div>
                <div className='row'>
                    <ContactForm/>
                </div>
                <div className='row'>
                    <Redirect/>
                </div>
            </div>
        </div>
    )
}

export default Contact;