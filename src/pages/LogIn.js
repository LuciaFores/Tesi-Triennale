import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import LIForm from '../components/FormLI';
import imgLI_1 from '../img/imgLI_1.svg';
import imgLI_2 from '../img/imgLI_2.svg';
import imgLI_3 from '../img/imgLI_3.svg';
import './LogIn.css';


function Titolo(){
    return(
        <div className='d-flex justify-content-center'>
            <div className='row'>
                <h1>Autenticati alla piattaforma!</h1>
            </div>
        </div>
    );
}

function Sottotitolo(){
    return(
        <div className='d-flex justify-content-center'>
            <div className='row'>
                <p>Inserisci qui sotto i dati con cui ti sei registrato alla piattaforma per entrare subito nel tuo account!</p>
            </div>
        </div>
    );
}

function Redirect(){
    return(
        <div className='row offset-md-2'>
            <p>
                Non possiedi ancora un account? Clicca <Link to='../signup'>qui</Link> per registrarti!
            </p>
        </div>
    );
}

function Immagine(){
    return(
        <div className=''>
            <img src={imgLI_3} className='img-fluid'/>
        </div>
    )
}

function LogIn(){
    return(
        <div className='container-fluid'>
            <Navbar/>
            <Titolo/>
            <Sottotitolo/>
            <div className='container'>
            <div className='row'>
                <div className='col-xs-12 col-sm-6'>
                    <LIForm/>
                </div>
                <div className='col-xs-12 col-sm-6'>
                    <Immagine/>
                </div>
            </div>
            </div>
            <Redirect/>
        </div>
    );
}

export default LogIn;