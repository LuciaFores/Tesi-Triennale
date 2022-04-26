import React, {Component} from 'react';
import axios from 'axios';
import { randPw, emailRE, fiscalCodeRE, passwordRE } from './Utils';

class FPWForm extends Component{
    constructor(props){
        super(props);

        this.onChangeUser = this.onChangeUser.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user : '',
            randPw : '',
        }
    }

    onChangeUser(e){
        this.setState({
            user : e.target.value,
        });
    }

    onSubmit(e){
        e.preventDefault();

        var randomPw = randPw();

        const emailValidity = emailRE.test(this.state.user);
        const fiscalCodeValidity = fiscalCodeRE.test(this.state.user);
        var passwordValidity = passwordRE.test(randomPw);

        while(!passwordValidity){
            randomPw = randPw();
            passwordValidity = passwordRE.test(randomPw);
        }

        if(!fiscalCodeValidity && !emailValidity){
            alert("L'email o il codice fiscale inserito non è valido");
        }
        if(passwordValidity && (emailValidity || fiscalCodeValidity)){
            const obj = {
                user : this.state.user,
                randPw : randomPw,
            }

            //console.log(obj);
            axios.post('http://localhost/tirocinio/forgotPassword.php', obj)
                .then(res => window.location.href = '/forgotpw/success')
                .catch(error => window.location.href = '/forgotpw/error');
        }
    }

    render(){
        return(
            <div className='container-fluid col-md-10 offset-md-1 mt-5'>
                <form>
                    <div className='form-row'>
                        <div className='form-group col-md-6'>
                            <label htmlFor='inputUserName'>Email o Codice Fiscale</label>
                            <input type='text' className='form-control' id='inputUserName' placeholder='Inserire Email o Codice Fiscale' onChange={this.onChangeUser} required/>
                        </div>
                    </div>
                </form>
                <button type='submit' className='btn btn-primary mt-3' onClick={this.onSubmit}>Recupera password!</button>
            </div>
        );
    }
}

export default FPWForm;