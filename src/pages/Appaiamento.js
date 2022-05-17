import React from 'react';
import Navbar from "../components/NavbarPRLO";
import EserciziAppaiamento from "../components/EserciziAppaiamento";

function Appaiamento(){
    return(
        <div>
            <Navbar/>
            <div className='container'>
                <EserciziAppaiamento/>
            </div>
        </div>
    )
}

export default Appaiamento;