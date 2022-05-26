import React from 'react';
import Navbar from "../components/NavbarPRLO";
import EserciziRecettivo from '../components/EserciziRecettivo';

function Recettivo(){
    return(
        <div>
            <Navbar/>
            <div className='container'>
                <EserciziRecettivo/>
            </div>
        </div>
    )
}

export default Recettivo;