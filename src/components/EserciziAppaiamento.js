import React from 'react';
import abilities from './Abilities';
import { getRandomIndex, fisherYatesShuffle } from './Utils';

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

function check(id){
    let chosenAbility = abilities.find(ability => ability.name === 'Cavallo');
    if(id === chosenAbility['name']){
        alert('Corretto!');
    }
    else{
        alert('Non corretto :(');
    }
}

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