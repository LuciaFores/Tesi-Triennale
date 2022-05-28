import React from 'react';
import { fisherYatesShuffle, gamePreparation, checkAppaiamento_Recettivo } from './Utils';

function EserciziRecettivo(){
    let abilities = gamePreparation();
    let correctAbility = abilities[0];
    let wrongAbility1 = abilities[1];
    let wrongAbility2 = abilities[2];
    let pickedAbilities = [correctAbility, wrongAbility1, wrongAbility2]
    fisherYatesShuffle(pickedAbilities)

    let speech = new SpeechSynthesisUtterance();

    speech.lang = 'it';
        
    let voices = [];
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[1];

    speech.text = correctAbility['name'];

    // TODO: crea selettore delle voci

    return(
        <div>
            <div className='row'>
                <p>
                    <button onClick={() => window.speechSynthesis.speak(speech)}>play</button> 
                </p>
                <p>
                    <button onClick={() => window.speechSynthesis.pause()}>pause</button>
                </p>
                <p>
                    <button onClick={() => window.speechSynthesis.resume()}>resume</button>
                </p>
                <h1>Immagine tra cui scegliere</h1>
                <div className='col-md-4'>
                    <img src={pickedAbilities[0]['img']} className='img-fluid' onClick={() => checkAppaiamento_Recettivo(pickedAbilities[0]['name'])}/>
                </div>
                <div className='col-md-4'>
                    <img src={pickedAbilities[1]['img']} className='img-fluid' onClick={() => checkAppaiamento_Recettivo(pickedAbilities[1]['name'])}/>
                </div>
                <div className='col-md-4'>
                    <img src={pickedAbilities[2]['img']} className='img-fluid' onClick={() => checkAppaiamento_Recettivo(pickedAbilities[2]['name'])}/>
                </div>
            </div>
        </div>
    )
}

export default EserciziRecettivo;


