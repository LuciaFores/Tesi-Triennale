import React from 'react';
import {clearExercisesData, rearrangeExercises, getResults} from '../components/Utils';
import { Link } from 'react-router-dom';

function ExercisesTable(){
    if(localStorage.getItem('exercisesData') === null && localStorage.getItem('exercises') === null){
        window.location.reload();
    }
    if(localStorage.getItem('exercisesData') != null && localStorage.getItem('exercises') === null){
        clearExercisesData();
    }
    

    const exercisesList = rearrangeExercises();

    const tableItems = exercisesList.map((exercise) => 
        <tr key={exercise[0]}>
            <td>{exercise[0]}</td>
            <td>{exercise[1]}</td>
            <td>{exercise[2]}</td>
            <td>{exercise[3]}</td>
            <td>{exercise[4]}</td>
            <td>{exercise[5]}</td>
            <td>{exercise[6]}</td>
            <td><button className='btn btn-primary' onClick={() => getResults(exercise[0], exercise[6])}><Link to='./exerciseResults' className='link-light text-decoration-none'>Consulta!</Link></button></td>
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
                        <th className=''>Risposta Accettata</th>
                        <th className=''>Data ripasso</th>
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

export default ExercisesTable;