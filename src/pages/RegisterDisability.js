import React from 'react'
import Navbar from '../components/NavbarSULI';
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
                nel sistema e un amministratore proovederà al più presto a renderla disponibile nella sezione di
                scelta della disabilità durante la registrazione del paziente! <br/>
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
                Clicca <Link to='../caregiverprofile'>qui</Link>!
            </p>
        </div>
    );
}

function RegisterDisability(){
    if(localStorage.getItem('caregiverFiscalcode') === null){
        window.location.href='/login';
    }
    
    return(
        <div className='container-fluid'>
            <Navbar/>
            <Titolo/>
            <Sottotitolo/>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-xs-12 col-sm-6'>
                        <RDForm/>
                        <Redirect/>
                    </div>
                    <div className='col-xs-12 col-sm-6'>
                        <Immagine/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterDisability;