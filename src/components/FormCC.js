import React, {Component} from 'react';
import axios from 'axios';
import {fiscalCodeRE} from './Utils';


class CCForm extends Component{
    constructor(props){
        super(props);
        this.onChangePatientFiscalCode = this.onChangePatientFiscalCode.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            caregiver : localStorage.getItem('caregiverFiscalcode'),
            patient : "",
        }
    }

    onChangePatientFiscalCode(e){
        this.setState({
            patient : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const fiscalcodeValidity = fiscalCodeRE.test(this.state.patient);

        if(!fiscalcodeValidity){
            alert("Il codice fiscale inserito non è valido");
        }
        
        const obj = {
            caregiver : localStorage.getItem('caregiverFiscalcode'),
            patient : this.state.patient,
        };

        axios.post('http://localhost/tirocinio/connectCaregiver.php', obj)
            .then(res => window.location.href = '/caregiverprofile')
            .catch(error => window.location.href = '/caregiverac');

        this.setState({
            user : localStorage.getItem('caregiverFiscalcode'),
            patient : '',
        })
    }

    render(){
        return(
            <div className='container-fluid'>
                <form>
                    <div className='form-row'>
                        <div className='form-group mx-1'>
                            <label htmlFor='inputPatientFiscalCode'>Codice Fiscale Paziente</label>
                            <input type='text' className='form-control' id='inputPatientFiscalCode' placeholder='Inserire Codice Fiscale del Paziente' value={this.state.patient} onChange={this.onChangePatientFiscalCode} required/>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary mt-2 mb-2' onClick={this.onSubmit}>Collegati al paziente!</button>
                </form>
            </div>
        );
    }
}

export default CCForm;