import React from "react";
import { clearExToBePlayedData, playExercises, redirect } from '../components/Utils';

function Exercises(){
    if(localStorage.getItem('routine') === ''){
        window.location.href = "/patientProfile/exercises/end"
    }
    else{
        if(localStorage.getItem("exToBePlayedData") === null && localStorage.getItem('exToBePlayed') === null){
            playExercises();
            window.location.reload()
        }
        if(localStorage.getItem("exToBePlayedData") != null && localStorage.getItem('exToBePlayed') === null){
            var exercises = localStorage.getItem('routine').split(',');
            exercises.shift();
            localStorage.setItem('routine', exercises);
            clearExToBePlayedData();
            localStorage.removeItem("exToBePlayedData");
        }
    }

    return(
        <div>
            <h1>Caricamento esercizio...</h1>
            {redirect()}
        </div>
    );
}

export default Exercises;