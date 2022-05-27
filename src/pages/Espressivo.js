import React from 'react';
import Navbar from "../components/NavbarPRLO";
import Dictaphone from '../components/Dictaphone';

function Espressivo(){
    return(
        <div>
            <Navbar/>
            <div className='container'>
                <Dictaphone/>
            </div>
        </div>
    )
}

export default Espressivo;