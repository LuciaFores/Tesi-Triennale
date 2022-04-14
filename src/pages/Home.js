import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarSULI'
import imgHome from '../img/imgHome.svg';

function Titolo(){
    return(
        <div className='d-flex justify-content-center'>
            <div className='row'>
                <h1>Benvenuto sulla piattaforma!</h1>
            </div>
        </div>
    );
}

function Immagine(){
    return(
        <div className=''>
            <img src={imgHome} className='img-fluid d-block my-5'/>
        </div>
    )
}

function About(){
    return(
        <div className='container-fluid' id='about'>
            <h2>Chi siamo?</h2>
            <p>
                La piattaforma è una piattaforma il cui obiettivo è quello
                di aiutare bambini e caregiver nella fruizione e nell'erogazione di
                esercizi terapeutici.
            </p>
            <p>
                La piattaforma è pensata per essere utilizzata sia da caregiver professionisti 
                sia da caregiver non professionisti in modo tale da creare un portale di contatto
                tra questi.
            </p>
            <p>
                La piattaforma, oltre all'informatizzazione dei piani terapeutici dei bambini, mette
                anche a disposizione una sezione in cui i bambini possono eseguire gli esercizi
                normalmente eseguiti durante la terapia in ogni momento.
            </p>
        </div>
    );
}

function Funzionalita(){
    return(
        <div className='container-fluid' id='funzionalita'>
            <h2>Cosa potrai fare sulla piattaforma?</h2>
            <p>
                Una volta iscritto sulla piattaforma potrai: <br/>
                - controllare i dati dei bambini che segui <br/>
                - creare nuovi esercizi sulla linea di quelli che sono stati assegnati al bambino dal terapista
                per poi farli eseguire al bambino <br/>
                - avviare una sessione di esercizio con il bambino <br/>
                - inserire i dati di nuovi bambini nella piattaforma (funzionalità per i caregiver professionisti) <br/>
                - consultare gli esiti delle esecuzioni degli esercizi da parte del bambino <br/>
                - aggiornare il piano terapeutico del bambino (funzionalità per caregiver professionisti)
            </p>
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
                Fai già parte della piattaforma? <br/>
                Clicca <Link to='/login'>qui</Link> per autenticarti ed entrare nel tuo profilo!
            </p>
        </div>
    );
}

function Contatti(){
    return(
        <div className='container-fluid' id='contatti'>
            <h1>Contatti</h1>
        </div>
    );
}

function PlaceHolder(){
    return(
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
    );
}


function Home(){
    return(
        <div className='container-fluid'>
            <Navbar/>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-xs-12 col-sm-6'>
                        <Titolo/>
                    </div>
                    <div className='col-xs-12 col-sm-6'>
                        <Immagine/>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-xs-12 col-sm-6'>
                        <Immagine/>
                    </div>
                    <div className='col-xs-12 col-sm-6'>
                        <About/>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-xs-12 col-sm-6'>
                        <Funzionalita/>
                    </div>
                    <div className='col-xs-12 col-sm-6'>
                        <Immagine/>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-xs-12 col-sm-6'>
                        <Immagine/>
                    </div>
                    <div className='col-xs-12 col-sm-6'>
                        <Redirect/>
                    </div>
                </div>
            </div>
            <Contatti/>
        </div>
    );
}

export default Home;