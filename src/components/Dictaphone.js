import React, {useEffect, useState} from 'react';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import abilities from './Abilities';

const Dictaphone = () => {
    let correctAbility = abilities.find(ability => ability.name === 'Cavallo');

    const commands = [
        {
            command: "reset",
            callback: () => resetTranscript()
        }
    ]

    const {
        transcript,
        resetTranscript,
        listening,
    } = useSpeechRecognition({commands});

    
    if(!SpeechRecognition.browserSupportsSpeechRecognition()){
        return null;
    }

    if(!SpeechRecognition.browserSupportsSpeechRecognition()){
        console.log("Your browser does not support speech recognition software! Try Chrome desktop maybe?");
    }

    const listenContinuously = () => {
        SpeechRecognition.startListening({
            continuous: true,
            language: 'it-IT',
        });
    };

    function inviaRisposta(){
        var check = document.getElementById('check');
        check.className = "";
        check.className = "row";

        if(transcript === correctAbility['name'].toLowerCase()){
            var right = document.getElementById('right');
            right.className = "";
            right.className = "col text-center";

            var wrong = document.getElementById('wrong');
            wrong.className = "";
            wrong.className = "col d-none";

            var exercise = document.getElementById('elements');
            exercise.className = "";
            exercise.className = "row d-none"
        }
        else{
            var wrong = document.getElementById('wrong');
            wrong.className = "";
            wrong.className = "col text-center";

            var right = document.getElementById('right');
            right.className = "";
            right.className = "col d-none";

            var exercise = document.getElementById('elements');
            exercise.className = "";
            exercise.className = "row d-none"
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <p>
                            Il microfono è in ascolto?
                            {' '}
                            <h3> {listening ? 'Sì' : 'No'} </h3>
                        </p>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-md-4 col-xs-12 text-center'> 
                        <button className='btn btn-primary btn-lg' onClick={listenContinuously}>Ascolta</button>
                    </div>
                    <div className='col-md-4 col-xs-12 text-center'> 
                        <button className='btn btn-primary btn-lg' onClick={SpeechRecognition.stopListening}>Stop</button>
                    </div>
                    <div className='col-md-4 col-xs-12 text-center'> 
                        <button className='btn btn-primary btn-lg' onClick={resetTranscript}>Reset</button>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col'>
                        <p>
                            Risposta: 
                            <span><h3> {transcript}</h3></span>
                        </p>
                        <button className='btn btn-primary btn-lg' onClick={inviaRisposta}>Invia Risposta</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dictaphone;