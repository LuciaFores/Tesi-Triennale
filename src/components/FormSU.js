import React, {Component} from 'react';
import axios from 'axios';
import {passwordRE, emailRE, fiscalCodeRE} from './Utils';
import './FormSU.css';


class SUForm extends Component{
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeFiscalCode = this.onChangeFiscalCode.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name : "",
            surname : "",
            fiscalCode : "",
            email : "",
            password : "",
            confirmPassword : "",
            role : "",
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

    onChangeEmail(e){
        this.setState({
            email : e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password : e.target.value
        });
    }

    onChangeConfirmPassword(e){
        this.setState({
            confirmPassword : e.target.value
        });
    }

    onChangeRole(e){
        this.setState({
            role : e.target.value
        });
    }

    /*onSubmit(e){
        e.preventDefault();
        const obj = {
            name : this.state.name,
            surname : this.state.surname,
            fiscalCode : this.state.fiscalCode,
            email : this.state.email,
            password : this.state.password,
            role : this.state.role,
        };
      
       console.log(obj);
    }*/

    onSubmit(e){
        e.preventDefault();

        const passwordValidity = passwordRE.test(this.state.password);
        const emailValidity = emailRE.test(this.state.email);
        const fiscalCodeValidity = fiscalCodeRE.test(this.state.fiscalCode);

        const passwordConfirmed = this.state.password === this.state.confirmPassword;

        if(!passwordValidity){
            alert("La password inserita non è valida");
        }
        if(!emailValidity){
            alert("L'indirizzo email inserito non è valido");
        }
        if(!fiscalCodeValidity){
            alert("Il codice fiscale inserito non è valido");
        }
        if(!passwordConfirmed){
            alert("La password inserita non combacia con la password confermata");
        }
        if(passwordValidity && emailValidity && fiscalCodeValidity && passwordConfirmed){
            const obj = {
                name : this.state.name,
                surname : this.state.surname,
                fiscalCode : this.state.fiscalCode,
                email : this.state.email,
                password : this.state.password,
                role : this.state.role,
            };

            axios.post('http://localhost/tirocinio/userRegistration.php', obj)
                .then(res => window.location.href = '/login')
                .catch(error => window.location.href = '/userae');

            this.setState({
                name : "",
                surname : "",
                fiscalCode: "",
                email : "",
                password : "",
                confirmPassword : "",
                role : "",
            })
        }
    }

    render(){
        return(
            <div className='container-fluid col-md-6 offset-md-3'>
                <form>
                    <div className='form-row'>
                        <div className='form-group col-md-6 mx-1'>
                            <label htmlFor='inputName'>Nome</label>
                            <input type='text' className='form-control' id='inputName' placeholder='Inserire Nome' value={this.state.name} onChange={this.onChangeName} required/>
                        </div>
                        <div className='form-group col-md-6 mx-1'>
                            <label htmlFor='inputSurname'>Cognome</label>
                            <input type='text' className='form-control' id='inputSurname' placeholder='Inserire Cognome' value={this.state.surname} onChange={this.onChangeSurname} required/>
                        </div>
                        <div className='form-group col-md-6 mx-1'>
                            <label htmlFor='inputFC'>Codice Fiscale</label>
                            <input type='text' className='form-control' id='inputFC' placeholder='Inserire Codice Fiscale' value={this.state.fiscalCode} onChange={this.onChangeFiscalCode} required/>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-group col-md-6 mx-1'>
                            <label htmlFor='inputEmail'>Email</label>
                            <input type='email' className='form-control' id='inputEmail' placeholder='Inserire Email' value={this.state.email} onChange={this.onChangeEmail} required/>
                        </div>
                        <div className='form-group col-md-6 mx-1'>
                            <label htmlFor='inputPassword'>Password</label>
                            <input type='password' className='form-control' id='inputPassword' placeholder='Inserire Password' value={this.state.password} onChange={this.onChangePassword} required/>
                            <small id='passwordHelp' className='form-text text-muted'>La password può essere lunga 8-16 caratteri e deve contenere almeno una lettera minuscola,
                            una lettera maiuscola, una cifra e un carattere speciale</small>
                        </div>
                        <div className='form-group col-md-6 mx-1'>
                            <label htmlFor='inputConfirmPassword'>Confermare Password</label>
                            <input type='password' className='form-control' id='inputConfirmPassword' placeholder='Confermare Password' value={this.state.confirmPassword} onChange={this.onChangeConfirmPassword} required/>
                        </div>
                    </div>
                    <div className='form-row mt-2'>
                        <div className='form-group col-md-6 mx-1'>
                            <input className='form-check-input' type='radio' name='ruolo' id='ruoloProf' value='professionale' onChange={this.onChangeRole}/>
                            <label htmlFor='ruoloProf' className='ms-1'>
                                Caregiver Professionale
                            </label>
                        </div>
                        <div className='form-group col-md-6 mx-1'>
                            <input className='form-check-input' type='radio' name='ruolo' id='ruoloNonProf' value='nonProfessionale' onChange={this.onChangeRole}/>
                            <label htmlFor='ruoloNonProf' className='ms-1'>
                                Caregiver Non Professionale
                            </label>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary mt-2 mb-2' onClick={this.onSubmit}>Registrati!</button>
                </form>
            </div>
        );
    }
}

export default SUForm;