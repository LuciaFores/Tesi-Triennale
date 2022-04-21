import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarPRLO';
import FormChoosePatient from '../components/FormChoosePatient';
import FormRegisterPatient from '../components/FormRegisterPatient';
import FormCC from '../components/FormCC';
import { clearUserData } from '../components/Utils';
import imgCard from '../img/imgCard.svg';
import imgCP from '../img/imgCP.svg';
import imgChoosePatient from '../img/imgChoosePatient.svg';
import imgAP from '../img/imgAP.svg';
import imgCC from '../img/imgCC.svg';
import './CaregiverProfile.css'; 

function UserCard(){
    const fiscalcode = localStorage.getItem('caregiverFiscalcode');
    const name = localStorage.getItem('caregiverName');
    const surname = localStorage.getItem('caregiverSurname');
    const role = localStorage.getItem('caregiverRole');
    var caregiverRole = 'professionale';
    if(role == 'nonProfessionale'){
        caregiverRole = 'non professionale'
    }

    return(
        <div className="card mt-4 border-primary">
            <img className="card-img-top img-fluid" src={imgCard} alt="Card image cap"/>
            <hr/>
            <div className="card-body">
                <p className="card-text">
                    Dati dell'utente:
                </p>
                <ul>
                    <li>Nome: {name}</li>
                    <li>Cognome: {surname}</li>
                    <li>Codice Fiscale: {fiscalcode}</li>
                    <li>Ruolo: {caregiverRole}</li>
                </ul>
            </div>
        </div>
    );
}

function ChangePasswordCard(){
    return(
        <div className="card mt-4 border-primary">
            <img className="card-img-top img-fluid" src={imgCP} alt="Card image cap"/>
            <hr/>
            <div className="card-body">
                <p className="card-text">
                    Vuoi modificare la tua password?<br/>
                    Clicca <Link to='/caregiverprofile/changePW'>qui</Link> per cambiarla!
                </p>
            </div>
        </div>
    );
}

function ChoosePatient(){
    return(
        <div className="card mt-4 border-primary md-long-card">
            <img className="card-img-top img-fluid" src={imgChoosePatient} alt="Card image cap"/>
            <hr/>
            <div className="card-body">
                <p className="card-text">
                    Con quale dei bambini di cui ti occupi vuoi lavorare?
                </p>
                <FormChoosePatient/>
            </div>
        </div>
    );
}

function RegisterPatient(){
    return(
        <div className="card mt-4 border-primary md-long-card">
            <img className="card-img-top img-fluid" src={imgAP} alt="Card image cap"/>
            <hr/>
            <div className="card-body">
                <p className="card-text">
                    Vuoi registrare un nuovo paziente nella piattaforma? Inserisci qui sotto i suoi dati! <br/>
                    Funzione abilitata solo per <strong>caregiver professionisti</strong>.
                </p>
                <FormRegisterPatient/>
            </div>
        </div>
    );
}

function ConnectCaregiver(){
    return(
        <div className="card mt-4 border-primary md-long-card">
            <img className="card-img-top img-fluid" src={imgCC} alt="Card image cap"/>
            <hr/>
            <div className="card-body">
                <p className="card-text">
                    Sei caregiver di un bambino già iscritto alla piattaforma ma non risulti esserlo?
                    Inserisci qui sotto il codice fiscale del bambino per poter iniziare subito a lavorare con lui!  
                </p>
                <FormCC/>
            </div>
        </div>
    );
}


function CaregiverProfile(){
    if((localStorage.getItem('caregiverData') === null) && (localStorage.getItem('caregiverFiscalcode') === null)){
        window.location.href = '/login';
    }
    
    if(localStorage.getItem('caregiverData') != null){
        clearUserData();
        localStorage.removeItem('caregiverData');
    }

    const name = localStorage.getItem('caregiverName');
    const surname = localStorage.getItem('caregiverSurname');

    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col'>
                        <h1>{name} {surname}, questo è il tuo profilo!</h1>
                    </div>
                </div>
                <div className='row justify-content-end'>
                    <div className='col-md-4 col-xs-12 mb-md-2'>
                        <RegisterPatient/>
                    </div>
                    <div className='col-md-5 col-xs-12'>
                        <ChoosePatient/>
                        <div className='row'>
                            <div className='col-md-12 col-xs-12'>
                                <ConnectCaregiver/>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-xs-12'>
                        <UserCard/>
                        <div className='row'>
                            <div className='col-md-12 col-xs-12'>
                                <ChangePasswordCard/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CaregiverProfile;