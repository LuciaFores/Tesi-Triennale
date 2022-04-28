import React from 'react';
import Navbar from '../components/NavbarSULI'
import SUForm from '../components/FormSU'
import { Link } from 'react-router-dom';
import imgSU from '../img/imgSU.svg'

function Titolo(){
    return(
        <div className='d-flex justify-content-center'>
            <div className='row'>
                <h1>Registrati alla piattaforma!</h1>
            </div>
        </div>
    );
}

function Sottotitolo(){
    return(
        <div className='d-flex justify-content-center'>
            <div className='row'>
                <p>Basta compilare il form qui sotto e in pochi secondi potrai iniziare ad utilizzare il tuo account!</p>
            </div>
        </div>
    )
}

function Redirect(){
    return(
        <div className='d-flex justify-content-center'>
            <p>
                Hai già un account? Clicca <Link to='/login'>qui</Link> per autenticarti!
            </p>
        </div>
    );
}

function Immagine(){
    return(
        <div className=''>
            <img src={imgSU} className='img-fluid d-block my-5'/>
        </div>
    )
}

function SignUp(){
    if(localStorage.getItem('caregiverFiscalcode') != null){
        window.location.href = '/caregiverprofile';
    }

    return(
        <div className='container-fluid'>
            <Navbar/>
            <Titolo/>
            <Sottotitolo/>
            <div className='container'>
            <div className='row'>
                <div className='col-xs-12 col-sm-6'>
                    <Immagine/>
                </div>
                <div className='col-xs-12 col-sm-6'>
                    <SUForm/>
                    <Redirect/>
                </div>
            </div>
            </div>
            

        </div>
    );
}

export default SignUp;