import React from 'react';
import { Link } from 'react-router-dom';
import {clearExTypesData, getExercises} from '../components/Utils';

function ExercisesTypeTable(){
    if(localStorage.getItem('exTypesData')===null && localStorage.getItem('exTypes')===null){
        window.location.reload();
    }
    else if(localStorage.getItem('exTypesData')!=null && localStorage.getItem('exTypes')===null){
        clearExTypesData();
    }
    
    const types = localStorage.getItem('exTypes').split(',');
    const tableItems = types.map((type, index) => 
        <tr key={index}>
            <td>{index+1}</td>
            <td>{type}</td>
            <td><button className='btn btn-primary' onClick={() => getExercises(type)}><Link to='./therapyExercisesList' className='link-light text-decoration-none'>Consulta!</Link></button></td>
        </tr>
    ) 
    return(
        <div className='col-md-8'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th className=''>#</th>
                        <th className=''>Tipologia esercizio</th>
                    </tr>
                </thead>
                <tbody>
                    {tableItems}
                </tbody>
            </table>
        </div>
    );
}

export default ExercisesTypeTable;