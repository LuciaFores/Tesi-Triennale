import React from 'react';
import Dictaphone from './Dictaphone';
import abilities from './Abilities';
import { } from './Utils';
import imgCheck from '../img/imgCheck.svg';
import imgWrong from '../img/imgWrong.svg';

function EserciziEspressivo(){
    var ex = localStorage.getItem('exToBePlayed').split(',');
    var id = parseInt(ex[2]);

    let correctAbility = abilities.find(ability => ability.id === id);

    return(
        <div>
            <div id='elements'>
                <div className='row mt-3'>
                    <h1>
                        Immagine da riconoscere
                    </h1>
                    <div className='offset-md-4 col-md-4 mb-5'>
                    <img src={correctAbility['img']} className='img-fluid'/>
                    </div>
                </div>
                <div className='row'>
                    <Dictaphone/>
                </div>
            </div>
            <div className='row d-none' id='check'>
                <div className='offset-md-4 col-md-4 mt-5 d-none' id='right'>
                    <img className='img-fluid' src={imgCheck}/>
                </div>
                <div className='offset-md-4 col-md-4 mt-5 d-none' id='wrong'>
                    <img className='img-fluid' src={imgWrong}/>
                </div>
            </div>
        </div>
    )
}

export default EserciziEspressivo;