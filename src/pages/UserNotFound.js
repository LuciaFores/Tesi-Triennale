import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarSULI';

function UserNotFound(){
    if(localStorage.getItem('caregiverFiscalcode') != null){
        window.location.href = '/caregiverprofile';
    }

    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row mt-md-3'>
                    <h1>Ooops sembra che qualcosa sia andato storto con la tua autenticazione!</h1>
                </div>
                <div className='row'>
                    <p>Sei già registrato ma non ricordi i tuoi dati di accesso? Clicca <Link to='/forgotpw'>qui</Link> per recuperarli!</p>
                    <p>Ricordi tutto e vuoi provare nuovamente ad autenticarti? Clicca <Link to='/login'>qui</Link> per farlo!</p>
                </div>
            </div>
        </div>
    )
}

export default UserNotFound;