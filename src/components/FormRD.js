import React, {Component} from 'react';
import axios from 'axios';

class FormRD extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name : '',
            description : '',
        }
    }

    onChangeName(e){
        this.setState({
            name : e.target.value,
        });
    }

    onChangeDescription(e){
        this.setState({
            description : e.target.value,
        });
    }

    onSubmit(e){
        e.preventDefault();

        if(localStorage.getItem('caregiverRole') === 'nonProfessionale'){
            alert('La funzione è abilitata solo per caregiver professionali');
            this.setState({
                name : '',
                description : '',
            })
            return false;
        }

        const obj = {
            name : this.state.name,
            description : this.state.description,
        }
        

        //console.log(obj);
        axios.post('http://localhost/tirocinio/registerDisability.php', obj)
            .then(res => 
            window.location.href = '/registerDisability/success'
            )
            .catch(error => window.location.href = '/registerDisability/error'
            );
    }

    render(){
        return(
            <div className='container-fluid col-md-10 offset-md-1 mt-5'>
                <form>
                    <div className='form-row'>
                        <div className='form-group col-md-6'>
                            <label htmlFor='inputName'>Nome Disabilità</label>
                            <input type='text' className='form-control' id='inputName' placeholder='Inserire Nome Disabilità' onChange={this.onChangeName} required/>
                            <label htmlFor='inputDescription'>Descrizione Disabilità</label>
                            <textarea className='form-control' id='inputName' placeholder='Inserire Descrizione Disabilità' onChange={this.onChangeDescription} required/>
                        </div>
                    </div>
                </form>
                <button type='submit' className='btn btn-primary mt-3' onClick={this.onSubmit}>Registra Disabilità!</button>
            </div>
        );
    }
}

export default FormRD;