import React from 'react';
import {clearExerciseResultsData, rearrangeExerciseResults, getData} from '../components/Utils';

function ResultTable(){
    if(localStorage.getItem('exerciseResultsData') === null && localStorage.getItem('exerciseResults') === null){
        window.location.reload();
    }
    if(localStorage.getItem('exerciseResultsData') != null && localStorage.getItem('exerciseResults') === null){
        clearExerciseResultsData();
        localStorage.removeItem('exerciseResultsData');
    }
    

    const exerciseResults = rearrangeExerciseResults();

    let tableItems 
    if(exerciseResults[0][0] === ""){
         tableItems = <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    }
    else{
        tableItems = exerciseResults.map((exercise) => 
        <tr key={exercise[0]}>
            <td>{getData(exercise[1])}</td>
            <td>{exercise[2]}</td>
        </tr>
    ) 
    }
    
    return(
        <div className='col-md-8 col-xs-12'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th className=''>Data esecuzione</th>
                        <th className=''>Esito</th>
                    </tr>
                </thead>
                <tbody>
                    {tableItems}
                </tbody>
            </table>
        </div>
    );
}

export default ResultTable;