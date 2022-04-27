import React from 'react';
import {clearExTypesData, createTable} from '../components/Utils';

function ExercisesTypeTable(){
    if(localStorage.getItem('exTypesData')!=null){
        clearExTypesData();
    }
    else{
        window.location.reload();
    }
    
    const types = localStorage.getItem('exTypes').split(',');
    return(
        <div>
            {createTable(types)}
        </div>
    )
}

export default ExercisesTypeTable;