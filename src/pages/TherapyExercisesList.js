import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavbarPRLO";
import ExercisesTable from '../components/ExercisesTable';
import { clearExercisesList, clearExerciseInformationData, getExerciseInformation, unicodeToChar } from "../components/Utils";
import imgDescription from '../img/imgDescription.svg';
import imgResults from '../img/imgResults.svg';
import imgExecution from '../img/imgExecution.svg';

function Redirect(){
    return(
        <p>
            Vuoi tornare alla lista delle tipologie di esercizi? Clicca <Link to='/patientprofile/therapyExercisesTypeList' onClick={clearExercisesList}>qui</Link>
        </p>
    );
}

function DescriptionCard(){
    let exerciseDescription = localStorage.getItem('exerciseDescription');
    exerciseDescription = unicodeToChar(exerciseDescription);

    return(
        <div className="card mt-4 border-primary">
            <img className="card-img-top img-fluid" src={imgDescription} alt="Card image cap"/>
            <hr/>
            <div className="card-body">
                <h2 className="card-text">
                    Descrizione dell'esercizio
                </h2>
                <p className="mb-md-4">
                    {exerciseDescription}
                </p>
            </div>
        </div>
    );
}

function ExecutionCard(){
    let exerciseExecution = localStorage.getItem('exerciseExecution');
    exerciseExecution = unicodeToChar(exerciseExecution);

    return(
        <div className="card mt-4 border-primary">
            <img className="card-img-top img-fluid" src={imgExecution} alt="Card image cap"/>
            <hr/>
            <div className="card-body">
                <h2 className="card-text">
                    Modalità di esecuzione
                </h2>
                <p className="mb-md-5">
                    {exerciseExecution}
                </p>
            </div>
        </div>
    );
}

function ResultAttendedCard(){
    let exerciseRes = localStorage.getItem('exerciseRes');
    exerciseRes = unicodeToChar(exerciseRes);

    return(
        <div className="card mt-4 border-primary">
            <img className="card-img-top img-fluid" src={imgResults} alt="Card image cap"/>
            <hr/>
            <div className="card-body">
                <h2 className="card-text">
                    Risultati attesi
                </h2>
                <p className="mb-md-4">
                    {exerciseRes}
                </p>
            </div>
        </div>
    );
}


function TherapyExercisesList(){
    if(localStorage.getItem('exercises') != null){
        getExerciseInformation();
        if(localStorage.getItem('exerciseInformationData')===null && localStorage.getItem('exerciseName')===null){
            window.location.reload();
        }
        else{
            clearExerciseInformationData();
        }
    }
    else{
        window.location.reload();
    }
   
    const exTypeChosen = localStorage.getItem('typeChosen');
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="row mt-md-3">
                    <h1>{exTypeChosen}</h1>
                </div>
                <div className="row">
                    <div className="col-md-4 col-xs-12">
                        <DescriptionCard/>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <ExecutionCard/>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <ResultAttendedCard/>
                    </div>
                </div>
                <div className="row table-responsive mt-md-5 mt-xs-3">
                    <ExercisesTable/>
                </div>

                <div className="row">
                    <Redirect/>
                </div>
            </div>
        </div>
    )
}

export default TherapyExercisesList;