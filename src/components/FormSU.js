import React from 'react';
import './FormSU.css';


function SUForm(){
    return(
        <div className='container-fluid col-md-6 offset-md-3'>
            <form>
                <div className='form-row'>
                    <div className='form-group col-md-6 mx-1'>
                        <label for='inputName'>Nome</label>
                        <input type='text' className='form-control' id='inputName' placeholder='Inserire Nome' required/>
                    </div>
                    <div className='form-group col-md-6 mx-1'>
                        <label for='inputSurname'>Cognome</label>
                        <input type='text' className='form-control' id='inputSurname' placeholder='Inserire Cognome' required/>
                    </div>
                    <div className='form-group col-md-6 mx-1'>
                        <label for='inputFC'>CodiceFiscale</label>
                        <input type='text' className='form-control' id='inputFC' placeholder='Inserire Codice Fiscale' required/>
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group col-md-6 mx-1'>
                        <label for='inputEmail'>Email</label>
                        <input type='email' className='form-control' id='inputEmail' placeholder='Inserire Email' required/>
                    </div>
                    <div className='form-group col-md-6 mx-1'>
                        <label for='inputPassword'>Password</label>
                        <input type='password' className='form-control' id='inputPassword' placeholder='Inserire Password' required/>
                        <small id='passwordHelp' className='form-text text-muted'>La password può essere lunga 8-16 caratteri e deve contenere almeno una lettera minuscola,
                        una lettera maiuscola, una cifra e un carattere speciale</small>
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group col-md-6 mx-1'>
                        <input className='form-check-input' type='radio' name='ruolo' id='ruoloProf' value='professionale'/>
                        <label for='ruoloProf' className='ms-1'>
                            Caregiver Professionale
                        </label>
                    </div>
                    <div className='form-group col-md-6 mx-1'>
                        <input className='form-check-input' type='radio' name='ruolo' id='ruoloNonProf' value='nonProfessionale'/>
                        <label for='ruoloNonProf' className='ms-1'>
                            Caregiver Non Professionale
                        </label>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary offset-4'>Registrati!</button>
            </form>
        </div>
    );
}

export default SUForm;