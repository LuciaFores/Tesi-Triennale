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
            <h1>Successo!</h1>
            <p>Abbiamo inviato una mail all'indirizzo specificato con la procedura per reimpostare la password!</p>
            <p>Ora clicca <Link to='/login'>qui</Link> per autenticarti!</p>
        </div>
    )
}

export default FPWSuccess;