import React from 'react';

function FPWForm(){
    return(
        <div className='container-fluid col-md-10 offset-md-1 mt-5'>
            <form>
                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <label for='inputUserName'>Nome Utente</label>
                        <input type='text' className='form-control' id='inputUserName' placeholder='Inserire Nome Utente' required/>
                        <small id='userNameHelp' className='form-text text-muted'>Si ricorda che il nome utente può essere l'email con cui ci si è iscritti alla piattaforma, 
                        il proprio codice fiscale oppure il codice univoco ricevuto al momento della registrazione</small>
                    </div>
                </div>
            </form>
            <button type='submit' className='btn btn-primary'>Recupera password!</button>
        </div>
    );
}

export default FPWForm;