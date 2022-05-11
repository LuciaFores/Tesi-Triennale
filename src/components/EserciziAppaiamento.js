import React from 'react';
import abilities from './Abilities';
import { getRandomIndex } from './Utils';

function gamePreparation(){
    // Per ora le cambio da codice ma poi verrà parametrizzata prendendo quella scelta dal caregiver
    let chosenAbility = abilities.find(ability => ability.name === 'Cavallo');
    let otherAbilities = abilities.filter(ability => ability.name != chosenAbility['name']);

    const min = -1;
    const max = otherAbilities.length - 1;

    let index1 = getRandomIndex(min, max);
    let index2 = getRandomIndex(min, max);

    while(index1 === index2){
        index2 = getRandomIndex(min, max);
    }

    let wrongAbility1 = otherAbilities[index1];
    let wrongAbility2 = otherAbilities[index2];

    return [chosenAbility, wrongAbility1, wrongAbility2];
}

function EserciziAppaiamento(){
    let abilities = gamePreparation();
    let correctAbility = abilities[0];
    let wrongAbility1 = abilities[1];
    let wrongAbility2 = abilities[2];

    return(
        <div>
            <div className='row'>
                <h1>
                    Abilità corretta
                </h1>
                <div className='col'>
                    Nome : {correctAbility['name']} <br/>
                    Immagine : <img src={correctAbility['img']} className='img-fluid'/>
                </div>
            </div>
            <div className='col'>
                <h1>Abilità tra cui scegliere</h1>
                <div className='col'>
                    Nome : {correctAbility['name']} <br/>
                    Immagine : <img src={correctAbility['img']} className='img-fluid'/>
                </div>
                <div className='col'>
                    Nome : {wrongAbility1['name']} <br/>
                    Immagine : <img src={wrongAbility1['img']} className='img-fluid'/>
                </div>
                <div className='col'>
                    Nome : {wrongAbility2['name']} <br/>
                    Immagine : <img src={wrongAbility2['img']} className='img-fluid'/>
                </div>
            </div>
        </div>
    )
}

export default EserciziAppaiamento;