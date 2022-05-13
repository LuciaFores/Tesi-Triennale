import React from 'react';
import {clearAllExercisesData, populateRoutine, rearrangeAllExercises} from '../components/Utils';

function AllExercisesTable(){
    if(localStorage.getItem('allExercisesData') === null && localStorage.getItem('allExercises') === null){
        window.location.reload();
    }
    if(localStorage.getItem('allExercisesData') != null && localStorage.getItem('allExercises') === null){
        clearAllExercisesData();
        localStorage.removeItem('allExercisesData');
    }
    

    const allExercisesList = rearrangeAllExercises();

    const tableItems = allExercisesList.map((exercise, index) => 
        <tr key={index}>
            <td>{index+1}</td>
            <td>{exercise[0]}</td>
            <td>{exercise[1]}</td>
            <td>{exercise[2]}</td>
            <td>{exercise[3]}</td>
            <td>{exercise[4]}</td>
            <td>{exercise[5]}</td>
            <td>{exercise[6]}</td>
            <td>{exercise[7]}</td>
            <td><button className='btn btn-primary' onClick={() => populateRoutine([exercise[6], exercise[7]])}>Aggiungi!</button></td>
        </tr>
    ) 
    return(
        <div className='col-md-8 col-xs-12'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th className=''>#</th>
                        <th className=''>Data inserimento</th>
                        <th className=''>Data apprendimento</th>
                        <th className=''>Data sospensione</th>
                        <th className=''>Concluso</th>
                        <th className=''>Risposta Accettata</th>
                        <th className=''>Data ripasso</th>
                        <th className=''>Tipologia Esercizio</th>
                        <th className=''>Abilità insegnata</th>
                    </tr>
                </thead>
                <tbody>
                    {tableItems}
                </tbody>
            </table>
        </div>
    );
}

export default AllExercisesTable;