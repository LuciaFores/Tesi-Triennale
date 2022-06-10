import React from 'react';
import { fisherYatesShuffle, gamePreparation, checkAppaiamento_Recettivo } from './Utils';
import imgCheck from '../img/imgCheck.svg';
import imgWrong from '../img/imgWrong.svg';

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
    window.speechSynthesis.onvoiceschanged = () => {
        voices = speechSynthesis.getVoices();
        speech.voice = voices[1];
    }

    speech.text = correctAbility['name'];
   
    return(
        <div>
            <div id='images'>
                <div className='row pb-2 mt-5'>
                    <div className='col-md-4 offset-md-4 col-xs-12 text-center'>
                        <button className='btn btn-primary btn-lg' onClick={() => window.speechSynthesis.speak(speech)}>Riproduci</button> 
                    </div>
                </div>
                <div className='row pt-5'>
                    <h1>Immagini tra cui scegliere</h1>
                    <div className='col-md-4 pb-3'>
                        <img src={pickedAbilities[0]['img']} className='img-fluid' onClick={() => checkAppaiamento_Recettivo(pickedAbilities[0]['name'])}/>
                    </div>
                    <div className='col-md-4 pb-3'>
                        <img src={pickedAbilities[1]['img']} className='img-fluid' onClick={() => checkAppaiamento_Recettivo(pickedAbilities[1]['name'])}/>
                    </div>
                    <div className='col-md-4 pb-3'>
                        <img src={pickedAbilities[2]['img']} className='img-fluid' onClick={() => checkAppaiamento_Recettivo(pickedAbilities[2]['name'])}/>
                    </div>
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

export default EserciziRecettivo;


