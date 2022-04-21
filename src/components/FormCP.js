import React, {Component} from 'react';
import axios from 'axios';
import {passwordRE} from './Utils';


class CPForm extends Component{
    constructor(props){
        super(props);
        this.onChangeOldPw = this.onChangeOldPw.bind(this);
        this.onChangeNewPw = this.onChangeNewPw.bind(this);
        this.onChangeConfirmNewPw = this.onChangeConfirmNewPw.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user : localStorage.getItem('caregiverFiscalcode'),
            oldPw : '',
            newPw : '',
            confirmNewPw: '',
        }
    }

    onChangeOldPw(e){
        this.setState({
            oldPw : e.target.value
        });
    }

    onChangeNewPw(e){
        this.setState({
            newPw : e.target.value
        });
    }

    onChangeConfirmNewPw(e){
        this.setState({
            confirmNewPw : e.target.value
        });
    }

    /*onSubmit(e){
        e.preventDefault();
        const obj = {
            fiscalCode : localStorage.getItem('fiscalcode'),
            oldPw : this.state.oldPw,
            newPw : this.state.newPw,
        };
      
       console.log(obj);
    }*/

    onSubmit(e){
        e.preventDefault();

        const passwordValidity = passwordRE.test(this.state.newPw);

        const passwordConfirmed = this.state.newPw === this.state.confirmNewPw;

        if(!passwordValidity){
            alert("La nuova password inserita non è valida");
        }
        if(!passwordConfirmed){
            alert("La nuova password inserita non combacia con la password confermata");
        }
        if(passwordValidity && passwordConfirmed){
            const obj = {
                user : localStorage.getItem('caregiverFiscalcode'),
                oldPw : this.state.oldPw,
                newPw : this.state.newPw,
            };

            axios.post('http://localhost/tirocinio/changePassword.php', obj)
                .then(res => window.location.href = '/caregiverprofile')
                .catch(error => window.location.href = '/userae');

            this.setState({
                user : localStorage.getItem('caregiverFiscalcode'),
                oldPw : '',
                newPw : '',
                confirmNewPw: '',
            })
        }
    }

    render(){
        return(
            <div className='container-fluid col-md-6 offset-md-3'>
                <form>
                    <div className='form-row'>
                        <div className='form-group col-md-6 mx-1'>
                            <label htmlFor='inputOldPw'>Vecchia Password</label>
                            <input type='text' className='form-control' id='inputOldPw' placeholder='Inserire Vecchia Password' value={this.state.oldPw} onChange={this.onChangeOldPw} required/>
                        </div>
                        <div className='form-group col-md-6 mx-1'>
                            <label htmlFor='inputNewPw'>Nuova Password</label>
                            <input type='text' className='form-control' id='inputNewPw' placeholder='Inserire Nuova Password' value={this.state.newPw} onChange={this.onChangeNewPw} required/>
                            <small id='passwordHelp' className='form-text text-muted'>La password può essere lunga 8-16 caratteri e deve contenere almeno una lettera minuscola,
                            una lettera maiuscola, una cifra e un carattere speciale</small>
                        </div>
                        <div className='form-group col-md-6 mx-1'>
                            <label htmlFor='inputConfirmNewPw'>Confermare Nuova Password</label>
                            <input type='text' className='form-control' id='inputConfirmNewPw' placeholder='Confermare Nuova Password' value={this.state.confirmNewPw} onChange={this.onChangeConfirmNewPw} required/>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary mt-2 mb-2' onClick={this.onSubmit}>Cambia Password!</button>
                </form>
            </div>
        );
    }
}

export default CPForm;