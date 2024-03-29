import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarSULI';

function FPWSuccess(){
    if(localStorage.getItem('caregiverFiscalcode') != null){
        window.location.href = '/caregiverprofile';
    }

    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row mt-md-3'>
                    <h1>Successo!</h1>
                </div>
                <div className='row'>
                    <p>Abbiamo inviato una mail all'indirizzo specificato con la procedura per reimpostare la password!</p>
                    <p>Ora clicca <Link to='/login'>qui</Link> per autenticarti!</p>
                </div>
            </div>
        </div>
    )
}

export default FPWSuccess;