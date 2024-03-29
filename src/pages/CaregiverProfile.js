import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarPRLO';
import FormChoosePatient from '../components/FormChoosePatient';
import FormRegisterPatient from '../components/FormRegisterPatient';
import FormCC from '../components/FormCC';
import { clearUserData, changePatient, clearExTypes, createDisabilityOptions, clearDisabilitiesData, displayMessageBody, confirmDelete, clearNotificationsData, logout } from '../components/Utils';
import imgCard from '../img/imgCard.svg';
import imgCP from '../img/imgCP.svg';
import imgChoosePatient from '../img/imgChoosePatient.svg';
import imgAP from '../img/imgAP.svg';
import imgCC from '../img/imgCC.svg';
import imgLO from '../img/imgLO.svg';
import axios from 'axios';
import AcceptanceForm from '../components/FormAcceptance';
import NotifiesTable from '../components/NotifiesTable';

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
        <div className="card mt-4 border-primary h-100">
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
        <div className="card mt-4 border-primary">
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
        <div className="card mt-4 border-primary">
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
        <div className="card mt-4 border-primary">
            <img className="card-img-top img-fluid" src={imgCC} alt="Card image cap"/>
            <hr/>
            <div className="card-body">
                <p className="card-text">
                    Vuoi registrarti come caregiver di un paziente iscritto alla piattaforma? <br/>Compila il form qui sotto! 
                </p>
                <FormCC/>
            </div>
        </div>
    );
}

function Notifies(){
    return(
        <div className='card border border-primary'>
            <div className='card-body'>
                <div className='card-text'>
                    <h1>Nuove notifiche</h1>
                </div>
                <div className='card-text'>
                    <NotifiesTable/>
                </div>
                <div className='card-text' id='messageBody'>
                    
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='d-none' id='acceptanceForm'>
                            <h3>Compila il form con i campi richiesti per confermare</h3>
                            <AcceptanceForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function LogOutCard(){
    return(
        <div className="card mt-4 border-primary">
            <img className="card-img-top img-fluid" src={imgLO} alt="Card image cap"/>
            <div className="card-body text-center">
                <button className='btn btn-primary' onClick={() => logout()}>Esci da TheraGiver</button>
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

    if(localStorage.getItem('patientFiscalcode') != null){
        changePatient();
    }

    if(localStorage.getItem('exTypes') != null){
        clearExTypes();
    }

    if(localStorage.getItem('disabilitiesData') === null && localStorage.getItem('disabilities') === null){
        axios.post('http://localhost/tirocinio/getDisabilities.php')
        .then(res => 
            localStorage.setItem('disabilitiesData', res.data),
            window.location.reload()
        )
        .catch(error => console.log(error))
    }

    if(localStorage.getItem('disabilitiesData') != null && localStorage.getItem('disabilities') === null){
        clearDisabilitiesData();
        localStorage.removeItem('disabilitiesData');
    }

    if(localStorage.getItem('notificationsData') === null && localStorage.getItem('notifications') === null){
        const obj = {
            tutor : localStorage.getItem('caregiverFiscalcode'),
        }
        axios.post('http://localhost/tirocinio/getNotifications.php', obj)
        .then(res => 
            localStorage.setItem('notificationsData', res.data),
            window.location.reload()
        )
        .catch(error => console.log(error))
    }

    if(localStorage.getItem('notificationsData') != null && localStorage.getItem('notifications') === null){
        clearNotificationsData();
        localStorage.removeItem('notificationsData');
    }

    window.onload = function(){
        createDisabilityOptions();
        localStorage.removeItem('disabilities');
        localStorage.removeItem('notifications');
    }

    const name = localStorage.getItem('caregiverName');
    const surname = localStorage.getItem('caregiverSurname');

    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col'>
                        <h1>{name} {surname}, questo è il tuo profilo!</h1>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-md-12 col-xs-12'>
                        <Notifies/>
                    </div>
                </div>
                <div className='row justify-content-end'>
                    <div className='col-md-4 col-xs-12 mb-md-2'>
                        <RegisterPatient/>
                    </div>
                    <div className='col-md-4 col-xs-12'>
                        <ChoosePatient/>
                        <div className='row'>
                            <div className='col-md-12 col-xs-12'>
                                <ConnectCaregiver/>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-xs-12'>
                        <UserCard/>
                        <div className='row'>
                            <div className='col-md-12 col-xs-12'>
                                <ChangePasswordCard/>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-md-12 col-xs-12'>
                                <LogOutCard/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CaregiverProfile;