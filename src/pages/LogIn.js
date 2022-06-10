import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/NavbarSULI';
import LIForm from '../components/FormLI';
import imgLI_3 from '../img/imgLI_3.svg';


function Titolo(){
    return(
        <div className='d-flex justify-content-center'>
            <div className='row'>
                <h1>Autenticati su TheraGiver!</h1>
            </div>
        </div>
    );
}

function Sottotitolo(){
    return(
        <div className='d-flex justify-content-center'>
            <div className='row'>
                <p>Inserisci qui sotto i dati con cui ti sei registrato per entrare subito nel tuo account!</p>
            </div>
        </div>
    );
}

function Redirect(){
    return(
        <div className='row offset-md-1 mt-3'>
            <p>
                Non possiedi ancora un account? Clicca <Link to='/signup'>qui</Link> per registrarti!
                <br/>
                Hai dimenticato la password? Clicca <Link to='/forgotpw'>qui</Link> per recuperarla!
            </p>
        </div>
    );
}

function Immagine(){
    return(
        <div className=''>
            <img src={imgLI_3} className='img-fluid d-block my-3'/>
        </div>
    )
}

function LogIn(){
    if(localStorage.getItem('caregiverFiscalcode') != null){
        window.location.href = '/caregiverprofile';
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
            </div>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-xs-12 col-sm-6'>
                        <Immagine/>
                    </div>
                    <div className='col-xs-12 col-sm-6'>
                        <LIForm/>
                        <Redirect/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;