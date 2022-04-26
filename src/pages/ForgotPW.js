import React from 'react'
import Navbar from '../components/NavbarSULI';
import FPWForm from '../components/FormFPW';
import imgFPW from '../img/imgFPW.svg';
import {Link} from 'react-router-dom';

function Titolo(){
    return(
        <div className='d-flex justify-content-center'>
            <div className='row'>
                <h1>Recupera la tua password!</h1>
            </div>
        </div>
    );
}

function Sottotitolo(){
    return(
        <div className='d-flex justify-content-center'>
            <div className='row'>
                <p>Inserisci qui sotto il tuo nome utente e ti verrà recapitata una mail all'indirizzo email usato
                in fase di registrazione per resettare la password!</p>
            </div>
        </div>
    );
}

function Immagine(){
    return(
        <div className=''>
            <img src={imgFPW} className='img-fluid d-block my-2'/>
        </div>
    )
}

function Redirect(){
    return(
        <div className='row offset-md-1 mt-3'>
            <p>
                Ricordi le tue credenziali e vuoi accedere all'account?
                Clicca <Link to='../login'>qui</Link> per autenticarti!
            </p>
        </div>
    );
}

function ForgotPW(){
    if(localStorage.getItem('caregiverFiscalcode') != null){
        window.location.href = '/caregiverprofile';
    }

    return(
        <div className='container-fluid'>
            <Navbar/>
            <Titolo/>
            <Sottotitolo/>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-xs-12 col-sm-6'>
                        <FPWForm/>
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

export default ForgotPW;