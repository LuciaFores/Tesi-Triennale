import React, {Component} from 'react';
import axios from 'axios';

class ContactForm extends Component{
    constructor(props){
        super(props);

        this.onChangeDescription = this.onChangeDescription.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            caregiver : localStorage.getItem('caregiverFiscalcode'),
            description : '',
        }
    }

    onChangeDescription(e){
        this.setState({
            description : e.target.value,
        });
    }

    onSubmit(e){
        e.preventDefault();

        const obj = {
            caregiver : this.state.caregiver,
            description : this.state.description
        }

        axios.post('http://localhost/tirocinio/newRequest.php', obj)
            .then(res => console.log(res.data),
            window.location.href = './contactForm/success')
            .catch(error => console.log('errore'))

        this.setState({
            caregiver : localStorage.getItem('caregiverFiscalcode'),
            description : '',
        })
    }

    render(){
        return(
            <div className='container-fluid col'>
                <form>
                <div className='form-row'>
                        <div className='form-group col mx-1'>
                            <label htmlFor='inputDescription'>Richiesta</label>
                            <textarea className='form-control' id='inputDescription' value={this.state.description} onChange={this.onChangeDescription}></textarea>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary mt-2 mb-2' onClick={this.onSubmit}>Effettua Richiesta!</button>
                </form>
            </div>
        )
    }
}

export default ContactForm;