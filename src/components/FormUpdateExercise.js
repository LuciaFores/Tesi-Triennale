import React, {Component} from 'react';
import axios from 'axios';

class UpdateExerciseForm extends Component{
    constructor(props){
        super(props);

        this.onChangeDeclaration = this.onChangeDeclaration.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            ex : '',
            declaration  : '',
            declarationDate : '',
        }
    }

    onChangeDeclaration(e){
        this.setState({
            declaration : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        var date = new Date();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var year = date.getFullYear();
        var declarationDate = year.toString() + '-' + month.toString() + '-' + day.toString();

        const obj = {
            exNum : localStorage.getItem('ex'),
            declaration : this.state.declaration,
            declarationDate : declarationDate,
        }

        axios.post('http://localhost/tirocinio/updateExerciseInformation.php', obj)
            .then(res => window.location.href = '/patientProfile/therapyExercisesTypeList/therapyExercisesList/exerciseResults/updateExerciseData/success'
            //window.location.href = '/caregiverprofile'
            )
            .catch(error => window.location.href = '/patientProfile/therapyExercisesTypeList/therapyExercisesList/exerciseResults/updateExerciseData/error'
            );
    }

    

    render(){
        return(
            <div className='container-fluid col-md-10 offset-md-1 mt-3'>
                <form>
                    <div className='form-row'>
                        Vuoi dichiarare che in data odierna l'esercizio è stato: 
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="declarationRadio" id="appreso" value="appreso" onChange={this.onChangeDeclaration}/>
                            <label className="form-check-label" htmlFor="appreso">
                                Appreso
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="declarationRadio" id="sospeso" value="sospeso" onChange={this.onChangeDeclaration}/>
                            <label className="form-check-label" htmlFor="sospeso">
                                Sospeso
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="declarationRadio" id="ripassato" value="ripassato" onChange={this.onChangeDeclaration}/>
                            <label className="form-check-label" htmlFor="ripassato">
                                Ripassato
                            </label>
                        </div>
                    </div>
                </form>
                <button type='submit' className='btn btn-primary mt-3' onClick={this.onSubmit}>Aggiorna!</button>
            </div>
        );
    }
}

export default UpdateExerciseForm;