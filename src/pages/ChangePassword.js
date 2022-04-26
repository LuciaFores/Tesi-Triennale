import React from "react";
import NavbarPRLO from '../components/NavbarPRLO';
import { Link } from "react-router-dom";
import CPForm from '../components/FormCP';
import imgChangePw from '../img/imgChangePw.svg';

function Titolo(){
    return(
        <div className='d-flex justify-content-center'>
            <div className='row'>
            <h1>Cambia la tua password</h1>
            </div>
        </div>
    );
}

function Sottotitolo(){
    return(
        <div className='d-flex justify-content-center'>
            <div className='row'>
                <p>
                    Compila il form qui di seguito per modificare la tua password di accesso!
                </p>
            </div>
        </div>
    )
}

function Redirect(){
    return(
        <div className='d-flex justify-content-center'>
            <p>
               Vuoi tornare al tuo profilo senza effettuare cambiamenti? Clicca <Link to='../login'>qui</Link>!
            </p>
        </div>
    );
}

function Immagine(){
    return(
        <div className=''>
            <img src={imgChangePw} className='img-fluid d-block my-5'/>
        </div>
    )
}

function ChangePassword(){
    if(localStorage.getItem('caregiverFiscalcode') === null){
        window.location.href='/login';
    }

    return(
        <div className='container-fluid'>
            <NavbarPRLO/>
            <Titolo/>
            <Sottotitolo/>
            <div className='container'>
            <div className='row align-items-center'>
                <div className='col-xs-12 col-sm-6'>
                    <Immagine/>
                </div>
                <div className='col-xs-12 col-sm-6'>
                    <CPForm/>
                    <Redirect/>
                </div>
            </div>
            </div>
            

        </div>
    );
}

export default ChangePassword;