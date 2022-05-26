import React from 'react';
import { fisherYatesShuffle, gamePreparation, check } from './Utils';

function EserciziAppaiamento(){
    let abilities = gamePreparation();
    let correctAbility = abilities[0];
    let wrongAbility1 = abilities[1];
    let wrongAbility2 = abilities[2];
    let pickedAbilities = [correctAbility, wrongAbility1, wrongAbility2]
    fisherYatesShuffle(pickedAbilities)

    return(
        <div>
            <div className='row'>
                <h1>
                    Immagine da scegliere
                </h1>
                <div className='offset-md-4 col-md-4'>
                   <img src={correctAbility['img']} className='img-fluid'/>
                </div>
            </div>
            <div className='row'>
                <h1>Immagine tra cui scegliere</h1>
                <div className='col-md-4'>
                    <img src={pickedAbilities[0]['img']} className='img-fluid' onClick={() => check(pickedAbilities[0]['name'])}/>
                </div>
                <div className='col-md-4'>
                    <img src={pickedAbilities[1]['img']} className='img-fluid' onClick={() => check(pickedAbilities[1]['name'])}/>
                </div>
                <div className='col-md-4'>
                    <img src={pickedAbilities[2]['img']} className='img-fluid' onClick={() => check(pickedAbilities[2]['name'])}/>
                </div>
            </div>
        </div>
    )
}

export default EserciziAppaiamento;