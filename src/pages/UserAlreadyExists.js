import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarSULI';

function UserAlreadyExists(){
    if(localStorage.getItem('fiscalcode') != null){
        window.location.href = '/caregiverprofile';
    }

    return(
        <div>
            <Navbar/>
            <h1>Ooops sembra che esista già un utente con i tuoi stessi dati!</h1>
            <p>Sei già registrato ma non ricordi i tuoi dati di accesso? Clicca <Link to='/forgotpw'>qui</Link> per recuperarli!</p>
        </div>
    )
}

export default UserAlreadyExists;