import React from "react";
import { Link } from "react-router-dom";
import NavbarPRLO from '../components/NavbarPRLO';
import {clearPatientData, changePatient} from '../components/Utils';

function GoBack(){
    return(
        <div>
            <p>
                Vuoi tornare alla selezione dei pazienti? <br/>
                Clicca <Link to='/caregiverprofile' onClick={changePatient}>qui</Link>!
            </p> 
        </div>
    )
}

function PatientProfile(){
    if((localStorage.getItem('patientData') === null) && (localStorage.getItem('patientFiscalcode') === null)){
        window.location.href = '/login';
    }
    
    if(localStorage.getItem('patientData') != null){
        clearPatientData();
        localStorage.removeItem('patientData');
    }

    const name = localStorage.getItem('patientName');
    const surname = localStorage.getItem('patientSurname');
    const fiscalCode = localStorage.getItem('patientFiscalcode');

    return(
        <div>
            <NavbarPRLO/>
            <h1>Benvenuto nella pagina relativa al paziente {name} {surname}, il cui codice fiscale
            è {fiscalCode}</h1>
            <GoBack/>
        </div>
    )
}

export default PatientProfile;