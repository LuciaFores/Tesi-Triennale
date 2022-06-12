import React from 'react'
import Navbar from '../components/NavbarPRLO';
import RDForm from '../components/FormRD';
import imgRD from '../img/imgRD.svg';
import {Link} from 'react-router-dom';

function Titolo(){
    return(
        <div className='d-flex justify-content-center'>
            <div className='row'>
                <h1>Registra una nuova disabilità!</h1>
            </div>
        </div>
    );
}

function Sottotitolo(){
    return(
        <div className='d-flex justify-content-center'>
            <div className='row'>
                <p>Inserisci qui sotto il nome e la descrizione della disabilità: questa verrà subito registrata
                nel sistema e sarà immediatamente disponibile per la selezione durante la registrazione di un nuovo paziente! <br/>
                Funzione abilitata solo per <strong>caregiver professionisti</strong>.</p>
            </div>
        </div>
    );
}

function Immagine(){
    return(
        <div className=''>
            <img src={imgRD} className='img-fluid d-block my-2'/>
        </div>
    )
}

function Redirect(){
    return(
        <div className='row offset-md-1 mt-3'>
            <p>
                Vuoi tornare al tuo profilo?
                Clicca <Link to='/caregiverprofile'>qui</Link>!
            </p>
        </div>
    );
}

function RegisterDisability(){
    if(localStorage.getItem('caregiverFiscalcode') === null){
        window.location.href='/login';
    }
    
    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row mt-md-3'>
                <Titolo/>
                </div>
                <div className='row'>
                <Sottotitolo/>
                </div>
                <div className='row align-items-center'>
                    <div className='col-xs-12 col-sm-6'>
                        <Immagine/>
                    </div>
                    <div className='col-xs-12 col-sm-6'>
                        <RDForm/>
                        <Redirect/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterDisability;