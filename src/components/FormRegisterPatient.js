import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {fiscalCodeRE} from './Utils';
import './FormSU.css';

function Redirect(){
    return(
        <div className='row mt-3'>
            <p>
                Non trovi la disabilità del paziente? Clicca <Link to='/registerDisability'>qui</Link> per registrarla nella piattaforma!
            </p>
        </div>
    );
}

class RegisterPatientForm extends Component{
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeFiscalCode = this.onChangeFiscalCode.bind(this);
        this.onChangeDisabilities = this.onChangeDisabilities.bind(this);
        this.onChangeBirthDate = this.onChangeBirthDate.bind(this);
        this.onChangeTutor = this.onChangeTutor.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            caregiver : localStorage.getItem('caregiverFiscalcode'),
            name : "",
            surname : "",
            fiscalCode : "",
            disabilities : [],
            birthDate : "",
            tutor : "",
        }
    }

    onChangeName(e){
        this.setState({
            name : e.target.value
        });
    }

    onChangeSurname(e){
        this.setState({
            surname : e.target.value
        });
    }

    onChangeFiscalCode(e){
        this.setState({
            fiscalCode : e.target.value
        });
    }

    onChangeDisabilities(e){
        let disability = Array.from(
            e.target.selectedOptions,
            (option) => option.value
            );
        this.setState({
            disabilities : disability,
        });
    }

    onChangeBirthDate(e){
        this.setState({
            birthDate : e.target.value
        });
    }

    onChangeTutor(e){
        this.setState({
            tutor : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        if( localStorage.getItem('caregiverRole') === 'nonProfessionale'){
            alert('La funzione è abilitata solo per caregiver professionali');
            this.setState({
                caregiver : localStorage.getItem('caregiverFiscalcode'),
                name : "",
                surname : "",
                fiscalCode: "",
                disabilities : [],
                birthDate : "",
            })
            return false;
        }

        const patientfiscalCodeValidity = fiscalCodeRE.test(this.state.fiscalCode);
        const tutorFiscalCodeValidity = fiscalCodeRE.test(this.state.tutor);

        if(!patientfiscalCodeValidity){
            alert("Il codice fiscale del paziente inserito non è valido");
        }
        if(!tutorFiscalCodeValidity){
            alert("Il codice fiscale del tutor inserito non è valido");
        }
        else{
            const obj = {
                caregiver : localStorage.getItem('caregiverFiscalcode'),
                name : this.state.name,
                surname : this.state.surname,
                fiscalCode : this.state.fiscalCode,
                disabilities : this.state.disabilities,
                birthDate : this.state.birthDate,
                tutor : this.state.tutor,
            };

            axios.post('http://localhost/tirocinio/patientRegistration.php', obj)
                .then(res => window.location.href = '/caregiverprofile')
                .catch(error => window.location.href = '/patientae');
            
           //console.log(obj);
            this.setState({
                caregiver : localStorage.getItem('caregiverFiscalcode'),
                name : "",
                surname : "",
                fiscalCode: "",
                disabilities : [],
                birthDate : "",
                tutor : "",
            })
        }
    }



    render(){
        return(
            <div className='container-fluid col'>
                <form>
                    <div className='form-row'>
                        <div className='form-group col mx-1'>
                            <label htmlFor='inputName'>Nome</label>
                            <input type='text' className='form-control' id='inputName' placeholder='Inserire Nome' value={this.state.name} onChange={this.onChangeName} required/>
                        </div>
                        <div className='form-group col mx-1'>
                            <label htmlFor='inputSurname'>Cognome</label>
                            <input type='text' className='form-control' id='inputSurname' placeholder='Inserire Cognome' value={this.state.surname} onChange={this.onChangeSurname} required/>
                        </div>
                        <div className='form-group col mx-1'>
                            <label htmlFor='inputFC'>Codice Fiscale Paziente</label>
                            <input type='text' className='form-control' id='inputFC' placeholder='Inserire Codice Fiscale del Paziente' value={this.state.fiscalCode} onChange={this.onChangeFiscalCode} required/>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-group col mx-1'>
                            <label htmlFor='inputDisability'>Disabilità</label>
                            <select className='form-control' id='inputDisability' value={this.state.disabilities} onChange={this.onChangeDisabilities} multiple={true}>

                            </select>
                            <small className='text-muted' id='helpSelect'>Si ricorda che in caso si vogliano selezionare più
                            disabilità è necessario tenere premuto il tasto CTRL (su Windows) oppure il tasto Command ⌘ (su Mac)
                            durante la selezione</small>
                        </div>
                        <div className='form-group col mx-1'>
                            <label htmlFor='inputBirthDate'>Data di nascita</label>
                            <input type='date' className='form-control' id='inputBirthDate' value={this.state.birthDate} onChange={this.onChangeBirthDate} required/>
                        </div>
                        <div className='form-group col mx-1'>
                            <label htmlFor='inputTFC'>Codice Fiscale Tutore</label>
                            <input type='text' className='form-control' id='inputTFC' placeholder='Inserire Codice Fiscale del Tutore' value={this.state.tutor} onChange={this.onChangeTutor} required/>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary mt-2 mb-2' onClick={this.onSubmit}>Registra il paziente!</button>
                </form>
                <Redirect/>
            </div>
        );
    }
}

export default RegisterPatientForm;