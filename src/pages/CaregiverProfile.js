import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarPRLO';
import FormChoosePatient from '../components/FormChoosePatient';
import { clearUserData } from '../components/Utils';
import imgCard from '../img/imgCard.svg';
import imgCP from '../img/imgCP.svg';
import imgChoosePatient from '../img/imgChoosePatient.svg'
import './CaregiverProfile.css'; 

function UserCard(){
    const fiscalcode = localStorage.getItem('fiscalcode');
    const name = localStorage.getItem('name');
    const surname = localStorage.getItem('surname');
    const role = localStorage.getItem('role');
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
                    <ul>
                        <li>Nome: {name}</li>
                        <li>Cognome: {surname}</li>
                        <li>Codice Fiscale: {fiscalcode}</li>
                        <li>Ruolo: {caregiverRole}</li>
                    </ul>
                </p>
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


function CaregiverProfile(){
    if((localStorage.getItem('data') === null) && (localStorage.getItem('fiscalcode') === null)){
        window.location.href = '/login';
    }
    
    if(localStorage.getItem('data') != null){
        clearUserData();
        localStorage.removeItem('data');
    }

    const name = localStorage.getItem('name');
    const surname = localStorage.getItem('surname');

    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row mt-4'>
                    <div className='col'>
                        <h1>{name} {surname}, questo è il tuo profilo!</h1>
                    </div>
                </div>
                <div className='row justify-content-end'>
                    <div className='col-md-9 col-xs-12 mt-2'>
                        <ChoosePatient/>
                    </div>
                    <div className='col-md-3 col-xs-12'>
                        <UserCard/>
                        <div className='row'>
                            <div className='col-md-12 mt-md-4 col-xs-12'>
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