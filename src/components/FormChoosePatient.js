import React, {Component} from 'react';
import axios from 'axios';
import {fiscalCodeRE} from './Utils';
import { parsePath } from 'react-router-dom';

class ChoosePatientForm extends Component{
    constructor(props){
        super(props);

        this.onChangePatient = this.onChangePatient.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            patient  : '',
        }
    }

    onChangePatient(e){
        this.setState({
            patient : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const fiscalCodeValidity = fiscalCodeRE.test(this.state.patient);

        if(!fiscalCodeValidity){
            alert("Il codice fiscale inserito non è valido");
        }
        else{
            const obj = {
                patient : this.state.patient,
            }

            axios.post('http://localhost/tirocinio/patientSelection.php', obj)
                .then(res => //console.log(res.data)
                localStorage.setItem('patientData', res.data),
                window.location.href = '/patientProfile'
                )
                .catch(error => window.location.href = '/usernf'
                );


        }
    }

    

    render(){
        return(
            <div className='container-fluid col-md-10 offset-md-1 mt-5'>
                <form>
                    <div className='form-row'>
                        <div className='form-group col-md-6'>
                            <label htmlFor='inputUserName'>Codice Fiscale Paziente</label>
                            <input type='text' className='form-control' id='inputUserName' placeholder='Inserire Codice Fiscale' value={this.state.patient} onChange={this.onChangePatient} required/>
                        </div>
                    </div>
                </form>
                <button type='submit' className='btn btn-primary mt-3' onClick={this.onSubmit}>Vai alla pagina del bambino!</button>
            </div>
        );
    }
}

export default ChoosePatientForm;