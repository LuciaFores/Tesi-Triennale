import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarPRLO';

function RoutineEnd(){
    if(localStorage.getItem('caregiverFiscalcode') === null){
        window.location.href = '/login';
    }

    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row mt-md-3'>
                    <h1>Fine della routine!</h1>
                </div>
                <div className='row'>
                    <p>La routine di esercizi è terminata!</p>
                    <p>Ora clicca <Link to='/patientProfile'>qui</Link> per tornare al profilo del paziente!</p>
                </div>
            </div>
        </div>
    )
}

export default RoutineEnd;