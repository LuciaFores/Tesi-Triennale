import React, {Component} from 'react';
import axios from 'axios';
import {passwordRE, emailRE, fiscalCodeRE} from './Utils';
import './FormLI.css'
import { parsePath } from 'react-router-dom';

class LIForm extends Component{
    constructor(props){
        super(props);

        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            user  : '',
            password : '',
        }
    }

    onChangeUser(e){
        this.setState({
            user : e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const passwordValidity = passwordRE.test(this.state.password);
        const fiscalCodeValidity = fiscalCodeRE.test(this.state.user);
        const emailValidity = emailRE.test(this.state.user);

        if(!passwordValidity){
            alert("La password inserita non è valida");
        }
        if(!fiscalCodeValidity && !emailValidity){
            alert("Il nome utente inserito non è valido");
        }
        if(passwordValidity && (fiscalCodeValidity || emailValidity)){
            const obj = {
                user : this.state.user,
                password : this.state.password,
            }

            axios.post('http://localhost/tirocinio/userAuthentication.php', obj)
                .then(res => 
                localStorage.setItem('data', res.data),
                window.location.href = '/caregiverprofile'
                )
                .catch(error => window.location.href = '/usernf'
                );


        }
    }

    

    render(){
        if(localStorage.getItem('fiscalcode') != null){
            window.location.href = '/caregiverprofile';
        }
        return(
            <div className='container-fluid col-md-10 offset-md-1 mt-5'>
                <form>
                    <div className='form-row'>
                        <div className='form-group col-md-6'>
                            <label htmlFor='inputUserName'>Nome Utente</label>
                            <input type='text' className='form-control' id='inputUserName' placeholder='Inserire Nome Utente' value={this.state.user} onChange={this.onChangeUser} required/>
                            <small id='userNameHelp' className='form-text text-muted'>Si ricorda che il nome utente può essere l'email con cui ci si è iscritti alla piattaforma oppure 
                            il proprio codice fiscale</small>
                        </div>
                        <div className='form-group col-md-6'>
                            <label htmlFor='inputPassword'>Password</label>
                            <input type='password' className='form-control' id='inputPassword' placeholder='Inserire Password' value={this.state.password} onChange={this.onChangePassword} required/>
                        </div>
                    </div>
                </form>
                <button type='submit' className='btn btn-primary mt-3' onClick={this.onSubmit}>Log In!</button>
            </div>
        );
    }
}

export default LIForm;