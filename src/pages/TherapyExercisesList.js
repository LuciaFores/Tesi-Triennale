import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavbarPRLO";
import ExercisesTable from '../components/ExercisesTable';
import { clearExercisesList, clearExerciseInformationData, getExerciseInformation } from "../components/Utils";
import imgCard from '../img/imgCard.svg';

function Redirect(){
    return(
        <p>
            Vuoi tornare alla lista delle tipologie di esercizi? Clicca <Link to='/patientprofile/therapyExercisesTypeList' onClick={clearExercisesList}>qui</Link>
        </p>
    );
}

function DescriptionCard(){
    const exerciseDescription = localStorage.getItem('exerciseDescription');

    return(
        <div className="card mt-4 border-primary">
            <img className="card-img-top img-fluid" src={imgCard} alt="Card image cap"/>
            <hr/>
            <div className="card-body">
                <h1 className="card-text">
                    Descrizione dell'esercizio
                </h1>
                <p>
                    {exerciseDescription}
                </p>
            </div>
        </div>
    );
}

function ExecutionCard(){
    const exerciseExecution = localStorage.getItem('exerciseExecution');

    return(
        <div className="card mt-4 border-primary">
            <img className="card-img-top img-fluid" src={imgCard} alt="Card image cap"/>
            <hr/>
            <div className="card-body">
                <h1 className="card-text">
                    Modalità di esecuzione dell'esercizio
                </h1>
                <p>
                    {exerciseExecution}
                </p>
            </div>
        </div>
    );
}

function ResultAttendedCard(){
    const exerciseRes = localStorage.getItem('exerciseRes');

    return(
        <div className="card mt-4 border-primary">
            <img className="card-img-top img-fluid" src={imgCard} alt="Card image cap"/>
            <hr/>
            <div className="card-body">
                <h1 className="card-text">
                    Risultati attesi dall'esercizio
                </h1>
                <p>
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
                <div className="row">
                    <h1>Esercizi {exTypeChosen}</h1>
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
                <div className="row table-responsive">
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