import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavbarPRLO";
import { clearExerciseResults } from "../components/Utils";

import ResultTable from "../components/ResultTable";

function Redirect(){
    return(
        <p>
            Vuoi tornare alla lista degli esercizi? Clicca <Link to='/patientProfile/therapyExercisesTypeList/therapyExercisesList' onClick={clearExerciseResults}>qui</Link>
        </p>
    );
}

function ExerciseResults(){
    const exTypeChosen = localStorage.getItem('typeChosen');
    const abilityChosen = localStorage.getItem('abilityChosen');
    const patientName = localStorage.getItem('patientName');
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="row mt-md-3">
                    <h1>{exTypeChosen} {abilityChosen}</h1>
                    <p>
                        Nella tabella qui di seguito sono riportati gli esiti delle esecuzioni dell'esercizio <strong>{exTypeChosen}</strong> per l'abilità <strong>{abilityChosen}</strong> effettuate da <strong>{patientName}</strong>. <br/>
                        Nella prima colonna della tabella è riportata la data in cui è stato eseguito l'esercizio e nella seconda l'esito che ha avuto l'esecuzione.
                    </p>
                    <p>
                        Un <strong>caregiver professionale</strong> può modificare le date di apprendimento, sospensione o ripasso cliccando sul pulsante "Aggiorna dati esercizio!"
                    </p>
                    <p>
                        Se la tabella è <strong>vuota</strong> vuol dire che l'esercizio non è mai stato eseguito e di conseguenza non può essere aggiornato
                    </p>
                </div>
                <div className="row table-responsive mt-md-5 mt-xs-3">
                    <ResultTable/>
                </div>
                <div className="row">
                    <div className="col-4 offset-5 text-center">
                        <button className='btn btn-primary' id='' onClick=''>Aggiorna Esercizio!</button>
                    </div>
                </div>
                <div className="row">
                    <Redirect/>
                </div>
            </div>
        </div>
    )
}

export default ExerciseResults;