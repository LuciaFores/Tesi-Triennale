import React, {Component} from 'react';
import axios from 'axios';
import {fiscalCodeRE} from './Utils';
import './FormSU.css';


class RegisterPatientForm extends Component{
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeFiscalCode = this.onChangeFiscalCode.bind(this);
        this.onChangeDisabilities = this.onChangeDisabilities.bind(this);
        this.onChangeBirthDate = this.onChangeBirthDate.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name : "",
            surname : "",
            fiscalCode : "",
            disabilities : [],
            birthDate : "",
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
        //console.log("disability", disability);
        this.setState({
            disabilities : disability,
        });
        //console.log(this.state.disabilities);
    }

    onChangeBirthDate(e){
        this.setState({
            birthDate : e.target.value
        });
    }

    /*onSubmit(e){
        e.preventDefault();
        const obj = {
            name : this.state.name,
            surname : this.state.surname,
            fiscalCode : this.state.fiscalCode,
            disability : this.state.disability,
            birthDate : this.state.birthDate,
        };
      
       console.log(obj);
    }*/

    /*onSubmit(e){
       let text = 'Hai selezionato ';
       for(var i = 0; i < this.state.disabilities.length; i++){
        text += this.state.disabilities[i];
        text += ', ';
       }
       text = text.slice(0, -2);
       alert(text);
        
        e.preventDefault();
        
        /*console.log(this.state.disabilities);
        e.preventDefault();
        
    }
    */

    onSubmit(e){
        e.preventDefault();

        if(localStorage.getItem('role') === 'nonProfessionale'){
            alert('La funzione è abilitata solo per caregiver professionali');
            this.setState({
                name : "",
                surname : "",
                fiscalCode: "",
                disabilities : [],
                birthDate : "",
            })
            return false;
        }

        const fiscalCodeValidity = fiscalCodeRE.test(this.state.fiscalCode);

        if(!fiscalCodeValidity){
            alert("Il codice fiscale inserito non è valido");
        }
        else{
            const obj = {
                name : this.state.name,
                surname : this.state.surname,
                fiscalCode : this.state.fiscalCode,
                disabilities : this.state.disabilities,
                birthDate : this.state.birthDate,
            };

            axios.post('http://localhost/tirocinio/patientRegistration.php', obj)
                .then(res => window.location.href = '/caregiverprofile')
                .catch(error => window.location.href = '/userae');

            this.setState({
                name : "",
                surname : "",
                fiscalCode: "",
                disabilities : [],
                birthDate : "",
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
                            <label htmlFor='inputFC'>Codice Fiscale</label>
                            <input type='text' className='form-control' id='inputFC' placeholder='Inserire Codice Fiscale' value={this.state.fiscalCode} onChange={this.onChangeFiscalCode} required/>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-group col mx-1'>
                            <label htmlFor='inputDisability'>Disabilità</label>
                            <select className='form-control' id='inputDisability' value={this.state.disabilities} onChange={this.onChangeDisabilities} multiple={true}>
                                <option value='Disabilità Psico Motoria'>Disabilità Psico Motoria</option>
                                <option value='Disabilità Motoria'>Disabilità Motoria</option>
                                <option value='Disabilità Cognitiva'>Disabilità Cognitiva</option>
                            </select>
                            <small className='text-muted' id='helpSelect'>Si ricorda che in caso si vogliano selezionare più
                            disabilità è necessario tenere premuto il tasto CTRL (su Windows) oppure il tasto Command ⌘ (su Mac)
                            durante la selezione</small>
                        </div>
                        <div className='form-group col mx-1'>
                            <label htmlFor='inputBirthDate'>Data di nascita</label>
                            <input type='date' className='form-control' id='inputBirthDate' value={this.state.birthDate} onChange={this.onChangeBirthDate} required/>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary mt-2 mb-2' onClick={this.onSubmit}>Registra il paziente!</button>
                </form>
            </div>
        );
    }
}

export default RegisterPatientForm;