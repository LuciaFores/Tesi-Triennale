import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarPRLO'
import imgHome from '../img/imgHome.svg';
import imgAbout from '../img/imgAbout.svg';
import imgFunc from '../img/imgFunc.svg';
import imgNext from '../img/imgNext.svg';

function Titolo(){
    return(
        <div className='d-flex justify-content-center'>
            <div className='row'>
                <h1>Benvenuto sulla piattaforma!</h1>
            </div>
        </div>
    );
}

function ImmagineHome(){
    return(
        <div className=''>
            <img src={imgHome} className='img-fluid d-block my-5'/>
        </div>
    )
}

function ImmagineAbout(){
    return(
        <div className=''>
            <img src={imgAbout} className='img-fluid d-block my-5'/>
        </div>
    )
}

function ImmagineFunc(){
    return(
        <div className=''>
            <img src={imgFunc} className='img-fluid d-block my-5'/>
        </div>
    )
}

function ImmagineNext(){
    return(
        <div className=''>
            <img src={imgNext} className='img-fluid d-block my-5'/>
        </div>
    )
}

function About(){
    return(
        <div className='container-fluid' id='about'>
            <h2>Chi siamo?</h2>
            <p>
                TheraGiver è una piattaforma il cui obiettivo è quello
                di aiutare bambini e caregiver nella fruizione e nell'erogazione di
                esercizi terapeutici.
            </p>
            <p>
                La piattaforma è pensata per essere utilizzata sia da caregiver professionisti 
                sia da caregiver non professionisti in modo tale da creare un portale di contatto
                tra questi.
            </p>
            <p>
                TheraGiver, oltre all'informatizzazione dei piani terapeutici dei bambini, mette
                anche a disposizione una sezione in cui i bambini possono eseguire gli esercizi
                normalmente effettuati durante la terapia in ogni momento.
            </p>
        </div>
    );
}

function Funzionalita(){
    return(
        <div className='container-fluid' id='funzionalita'>
            <h2>Cosa potrai fare su TheraGiver?</h2>
            <p>
                Una volta iscritto sulla piattaforma potrai:
            </p>
            <ul>
                <li>controllare i dati dei bambini che segui</li>
                <li>creare nuovi esercizi sulla linea di quelli che sono stati assegnati al bambino dal terapista
                per poi farli eseguire al bambino</li>
                <li>avviare una sessione di esercizio con il bambino</li>
                <li>inserire i dati di nuovi bambini nella piattaforma (funzionalità per i caregiver professionisti)</li>
                <li>consultare gli esiti delle esecuzioni degli esercizi da parte del bambino</li>
                <li>aggiornare i dati degli esercizi assegnati ad un paziente (funzionalità per caregiver professionisti)</li>
            </ul>
            <p>
                Da quali dispositivi potrai usufruire della piattaforma? <br/>
                Tutti! La piattaforma è pensata per essere fruibile su qualsiasi dispositivo desideri: computer desktop, laptop, cellulare, tablet, ...
            </p>
        </div>
    );
}

function Redirect(){
    return(
        <div className='container-fluid' id='redirect'>
            <h2>Prossimi passi</h2>
            <p>
                Non vedi l'ora di iniziare? <br/>
                Clicca <Link to='/signup'>qui</Link> per registrarti!
            </p>
            <p>
                Sei già iscritto su TheraGiver? <br/>
                Clicca <Link to='/login'>qui</Link> per autenticarti ed entrare nel tuo profilo!
            </p>
        </div>
    );
}

function HomeLO(){
    if(localStorage.getItem('caregiverFiscalcode') === null){
        window.location.href='/';
    }

    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-xs-12 col-sm-6 offset-md-3 mt-md-4 mb-md-5 mt-3'>
                        <Titolo/>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-xs-12 col-sm-6'>
                        <ImmagineAbout/>
                    </div>
                    <div className='col-xs-12 col-sm-6'>
                        <About/>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-xs-12 col-sm-6 order-2 order-md-1'>
                        <Funzionalita/>
                    </div>
                    <div className='col-xs-12 col-sm-6 order-1 order-md-2'>
                        <ImmagineFunc/>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-xs-12 col-sm-6'>
                        <ImmagineNext/>
                    </div>
                    <div className='col-xs-12 col-sm-6'>
                        <Redirect/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeLO;