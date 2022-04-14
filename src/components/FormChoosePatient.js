import React from 'react';

function FPWForm(){
    return(
        <div className='container-fluid col-md-10'>
            <form>
                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <label htmlFor='inputPatient'>Paziente</label>
                        <input type='text' className='form-control' id='inputPatient' placeholder='Inserire identificativo paziente' required/>
                        <small id='userNameHelp' className='form-text text-muted'>Si ricorda che l'identificativo del paziente è il codice fiscale del bambino</small>
                    </div>
                </div>
            </form>
            <button type='submit' className='btn btn-primary mt-3'>Vai alla pagina del bambino!</button>
        </div>
    );
}

export default FPWForm;