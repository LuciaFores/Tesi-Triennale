import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarSULI';

function CCSuccess(){
    if(localStorage.getItem('caregiverFiscalcode') === null){
        window.location.href = '/login';
    }

    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row mt-md-3'>
                    <h1>Successo!</h1>
                </div>
                <div className='row'>
                    <p>La richiesta di collegamento del caregiver ha avuto successo!</p>
                    <p>Ora clicca <Link to='/caregiverprofile'>qui</Link> per tornare al tuo profilo!</p>
                </div>
            </div>
        </div>
    )
}

export default CCSuccess;