import React, {Component} from 'react';
import axios from 'axios';

class ContactForm extends Component{
    constructor(props){
        super(props);

        this.onChangeRequest = this.onChangeRequest.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            caregiver : localStorage.getItem('caregiverFiscalcode'),
            request : '',
        }
    }

    onChangeRequest(e){
        this.setState({
            request : e.target.value,
        });
    }

    onSubmit(e){
        e.preventDefault();

        const obj = {
            caregiver : this.state.caregiver,
            request : this.state.request
        }

        axios.post('http://localhost/tirocinio/newRequest.php', obj)
            .then(res => console.log(res.data))
            .catch(error => console.log('errore'))

        this.setState({
            caregiver : localStorage.getItem('caregiverFiscalcode'),
            request : '',
        })
    }

    render(){
        return(
            <div className='container-fluid col'>
                <form>
                <div className='form-row'>
                        <div className='form-group col mx-1'>
                            <label htmlFor='inputRequest'>Richiesta</label>
                            <textarea className='form-control' id='inputRequest' value={this.state.request} onChange={this.onChangeRequest}></textarea>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary mt-2 mb-2' onClick={this.onSubmit}>Effettua Richiesta!</button>
                </form>
            </div>
        )
    }
}

export default ContactForm;