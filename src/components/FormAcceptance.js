import React, {Component} from 'react';
import axios from 'axios';
import {fiscalCodeRE} from './Utils';


class AcceptanceForm extends Component{
    constructor(props){
        super(props);
        this.onChangeCaregiverFiscalCode = this.onChangeCaregiverFiscalCode.bind(this);
        this.onChangePatientFiscalCode = this.onChangePatientFiscalCode.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            caregiver : "",
            patient : "",
        }
    }

    onChangeCaregiverFiscalCode(e){
        this.setState({
            caregiver : e.target.value
        });
    }

    onChangePatientFiscalCode(e){
        this.setState({
            patient : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const patientFiscalcodeValidity = fiscalCodeRE.test(this.state.patient);
        const caregiverFiscalcodeValidity = fiscalCodeRE.test(this.state.caregiver);


        if(!patientFiscalcodeValidity){
            alert("Il codice fiscale del paziente inserito non è valido");
        }

        if(!caregiverFiscalcodeValidity){
            alert("Il codice fiscale del caregiver inserito non è valido");
        }
        
        const obj = {
            caregiver : this.state.caregiver,
            patient : this.state.patient,
        };

        /*axios.post('http://localhost/tirocinio/acceptCaregiver.php', obj)
            .then(res => window.location.href = '/caregiverprofile')
            .catch(error => window.location.href = '/caregiverac');
        */

        this.setState({
            caregiver : "",
            patient : '',
        })
    }

    render(){
        return(
            <div className='container-fluid'>
                <form>
                    <div className='form-row'>
                        <div className='form-group mx-1'>
                            <label htmlFor='inputCaregiverFiscalCode'>Codice Fiscale Caregiver</label>
                            <input type='text' className='form-control' id='inputCaregiverFiscalCode' placeholder='Inserire Codice Fiscale del Caregiver' value={this.state.caregiver} onChange={this.onChangeCaregiverFiscalCode} required/>
                            <label htmlFor='inputPatientFiscalCode'>Codice Fiscale Paziente</label>
                            <input type='text' className='form-control' id='inputPatientFiscalCode' placeholder='Inserire Codice Fiscale del Paziente' value={this.state.patient} onChange={this.onChangePatientFiscalCode} required/>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary mt-2 mb-2' onClick={this.onSubmit}>Accetta il caregiver</button>
                </form>
            </div>
        );
    }
}

export default AcceptanceForm;