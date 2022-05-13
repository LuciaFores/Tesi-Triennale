import React, {Component} from 'react';
import {validInsertion} from '../components/Utils';
import axios from 'axios';

class NEForm extends Component{
    constructor(props){
        super(props);

        this.onChangeExType = this.onChangeExType.bind(this);
        this.onChangeAbility = this.onChangeAbility.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            caregiver : localStorage.getItem('caregiverFiscalcode'),
            exListNum : localStorage.getItem('patientExListNum'),
            exType : '',
            ability : '',
            insertionDate : '',
        }
    }

    onChangeExType(e){
        this.setState({
            exType : e.target.value,
        });
    }

    onChangeAbility(e){
        this.setState({
            ability : e.target.value,
        });
    }

    onSubmit(e){
        e.preventDefault();

        const typeChosen = this.state.exType;
        const caregiverRole = localStorage.getItem('caregiverRole');

        if(validInsertion(caregiverRole, typeChosen)){
            var date = new Date();
            var month = date.getMonth()+1;
            var day = date.getDate();
            var year = date.getFullYear();
            var insertion = year.toString() + '-' + month.toString() + '-' + day.toString();
            //console.log(insertion);

            const obj = {
                caregiver : this.state.caregiver,
                exListNum : this.state.exListNum,
                exType : this.state.exType,
                ability : this.state.ability,
                insertionDate : insertion,
            }

            axios.post('http://localhost/tirocinio/newExerciseInList.php', obj)
                .then(res => console.log(res.data))
                .catch(error => console.log(error))

            this.setState({
                caregiver : localStorage.getItem('caregiverFiscalcode'),
                exListNum : this.state.exListNum,
                exType : '',
                ability : '',
                insertionDate : '',
            })
        }
        else{
            alert("Puoi inserire solo esercizi di tipologie già presenti nel percorso terapeutico")
        }
    }

    render(){
        return(
            <div className='container-fluid col'>
                <form>
                    <div className='form-row'>
                        <div className='form-group col mx-1'>
                            <label htmlFor='inputExerciseType'>Tipologia Esercizio</label>
                            <select className='form-control' id='inputExerciseType' value={this.state.exType} onChange={this.onChangeExType}>
                                <option></option>
                                <option value='Appaiamento 2D-2D'>Appaiamento 2D-2D</option>
                                <option value='Esercizi Recettivo'>Esercizi in Recettivo</option>
                                <option value='Esercizi Espressivo'>Esercizi in Espressivo</option>
                            </select>
                            <label htmlFor='inputAbility'>Abilità Esercizio</label>
                            <select className='form-control' id='inputAbility' value={this.state.ability} onChange={this.onChangeAbility}>
                                <option></option>
                                <option value='Cane'>Cane</option>
                                <option value='Gatto'>Gatto</option>
                                <option value='Elefante'>Elefante</option>
                                <option value='Cavallo'>Cavallo</option>
                                <option value='Mucca'>Mucca</option>
                            </select>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary mt-2 mb-2' onClick={this.onSubmit}>Inserisci Esercizio!</button>
                </form>
            </div>
        );
    }
}

export default NEForm;