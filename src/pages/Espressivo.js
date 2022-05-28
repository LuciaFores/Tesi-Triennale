import React from 'react';
import Navbar from "../components/NavbarPRLO";
import EserciziEspressivo from '../components/EserciziEspressivo';

function Espressivo(){
    return(
        <div>
            <Navbar/>
            <div className='container'>
                <EserciziEspressivo/>
            </div>
        </div>
    )
}

export default Espressivo;