import React from "react";
import { Link } from "react-router-dom";
import NavbarPRLO from '../components/NavbarPRLO';
import {clearPatientData, changePatient, calculateAge, prettifyDisString, changeDateFormat, getTypes, clearExTypes, getAllExercises} from '../components/Utils';
import imgPatientCard from '../img/imgPatientCard.svg';
import imgExList from '../img/imgExList.svg';
import imgRoutine from '../img/imgRoutine.svg';

function GoBack(){
    return(
        <div>
            <div className="container">
                <div className="row mt-4">
                   <button className="btn btn-primary"><Link className="link-light text-decoration-none" to='/caregiverprofile' onClick={changePatient}>Torna alla selezione dei pazienti</Link></button> 
                </div>
                
            </div>
        </div>
    )
}

function PatientCard(){
    const fiscalcode = localStorage.getItem('patientFiscalcode');
    const name = localStorage.getItem('patientName');
    const surname = localStorage.getItem('patientSurname');
    var birthdate = localStorage.getItem('patientBirthDate');
    const age = calculateAge(birthdate);
    birthdate = changeDateFormat(birthdate);
    const exListNum = localStorage.getItem('patientExListNum');
    const disabilities = prettifyDisString(localStorage.getItem('patientDisabilities'));

    return(
        <div className="card mt-4 h-100 border-info">
            <img className="card-img-top img-fluid" src={imgPatientCard} alt="Card image cap"/>
            <hr/>
            <div className="card-body">
                <p className="card-text">
                    Dati del paziente:
                </p>
                <ul>
                    <li>Nome: {name}</li>
                    <li>Cognome: {surname}</li>
                    <li>Codice Fiscale: {fiscalcode}</li>
                    <li>Data di nascita: {birthdate}</li>
                    <li>Età: {age} anni</li>
                    <li>Identificativo percorso terapeutico: {exListNum}</li>
                    <li>Disabilità: {disabilities}</li>
                </ul>
            </div>
        </div>
    );
}

function TherapyExercisesListCard(){
    const name = localStorage.getItem('patientName');
    return(
        <div className="card mt-4 h-100 border-info">
            <img className="card-img-top img-fluid" src={imgExList} alt='Card image cap'/>
            <hr/>
            <div className="card-body">
                <p className="card-text">
                    Vuoi consultare il percorso terapeutico del paziente?<br/>
                    Nella sezione relativa al percorso terapeutico potrai consultare gli esercizi assegnati al
                    paziente, creare nuove implementazioni di esercizi già assegnati e controllare gli
                    esiti delle esecuzioni degli esercizi da parte del paziente.
                </p>
                <button className="btn btn-primary col-7 mt-5 offset-2"><Link to='/patientProfile/therapyExercisesTypeList' onClick={getTypes} className='link-light text-decoration-none'>Vai al percorso terapeutico di {name}</Link></button>
            </div>
        </div>
    );
}

function TherapyRoutineExecutionCard(){
    const name = localStorage.getItem('patientName');
    return(
        <div className="card mt-4 h-100 border-info">
            <img className="card-img-top img-fluid" src={imgRoutine} alt='Card image cap'/>
            <hr/>
            <div className="card-body">
                <p className="card-text">
                    Vuoi avviare una sessione di allenamento con {name}?
                    Potrai scegliere quali degli esercizi disponibili nel percorso terapeutico di {name} far 
                    eseguire e poi iniziare l'allenamento.
                </p>
                <button className="btn btn-primary col-7 mt-5 offset-2"><Link to='/patientProfile/routineSelection' onClick={getAllExercises} className='link-light text-decoration-none'>Inizia ad allenarti con {name}!</Link></button>
            </div>
        </div>
    )
}

function PatientProfile(){
    if(localStorage.getItem('caregiverFiscalcode') === null){
        window.location.href='/login';
    }
    
    if((localStorage.getItem('patientData') === null) && (localStorage.getItem('patientFiscalcode') === null)){
        window.location.href = '/caregiverprofile';
    }
    
    if(localStorage.getItem('patientData') != null){
        clearPatientData();
        localStorage.removeItem('patientData');
    }

    if(localStorage.getItem('exTypes') != null){
        clearExTypes();
    }

    if(localStorage.getItem('routine') != null){
        localStorage.removeItem('routine');
    }

    if(localStorage.getItem('allExercises') != null){
        localStorage.removeItem('allExercises');
    }

    if(localStorage.getItem('allExercisesData') != null){
        localStorage.removeItem('allExercisesData');
    }

    if(localStorage.getItem('exToBePlayed') != null){
        localStorage.removeItem('exToBePlayed');
    }

    if(localStorage.getItem('exToBePlayedData') != null){
        localStorage.removeItem('exToBePlayedData');
    }

    if(localStorage.getItem('routineName') != null){
        localStorage.removeItem('routineName');
    }
    
    const name = localStorage.getItem('patientName');
    const surname = localStorage.getItem('patientSurname');

    return(
        <div>
            <NavbarPRLO/>
            <div className="container">
                <div className="row mt-3">
                    <div className="col">
                        <h1>Questa è la pagina del paziente {name} {surname}!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-xs-12 pb-3">
                        <PatientCard/>
                    </div> 
                    <div className="col-md-5 col-xs-12 pb-3">
                        <TherapyExercisesListCard/>
                    </div>
                    <div className="col-md-4 col-xs-12 pb-3">
                        <TherapyRoutineExecutionCard/>
                    </div>
                </div>
                <div className="row mt-md-3">
                    <div className="col-md-3 col-xs-12">
                        <GoBack/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientProfile;