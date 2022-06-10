import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import abilities from './Abilities';

const Dictaphone = () => {
    var ex = localStorage.getItem('exToBePlayed').split(',');
    var abilityId = parseInt(ex[2]);
    var exNum = parseInt(ex[0]);

    let correctAbility = abilities.find(ability => ability.id === abilityId);

    const commands = [
        {
          command: 'reset',
          callback: () => resetTranscript()
        },
    ]

    const {
        transcript,
        resetTranscript,
        listening,
    } = useSpeechRecognition({commands});

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
        localStorage.removeItem('exToBePlayed');

        let obj;

        if(transcript === correctAbility['name'].toLowerCase()){
            var right = document.getElementById('right');
            right.className = "";
            right.className = "offset-md-4 col-md-4 mt-5";

            var wrong = document.getElementById('wrong');
            wrong.className = "";
            wrong.className = "offset-md-4 col-md-4 mt-5 d-none";

            var exercise = document.getElementById('elements');
            exercise.className = "";
            exercise.className = "row d-none"

            localStorage.removeItem("exToBePlayed");

            obj = {
                exNum : exNum,
                routine : localStorage.getItem('routineName'),
                esito : "corretto"
            }
        }
        else{
            var wrong = document.getElementById('wrong');
            wrong.className = "";
            wrong.className = "offset-md-4 col-md-4 mt-5";

            var right = document.getElementById('right');
            right.className = "";
            right.className = "offset-md-4 col-md-4 mt-5 d-none";

            var exercise = document.getElementById('elements');
            exercise.className = "";
            exercise.className = "row d-none"

            localStorage.removeItem("exToBePlayed");

            obj = {
                exNum : exNum,
                routine : localStorage.getItem('routineName'),
                esito : "errato"
            }
        }
        axios.post('http://localhost/tirocinio/saveResult.php', obj)
        .then(res => 
            window.location.href = '../exercises'
            )
        .catch(error => console.log(error))
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
                    <div className='col-md-4 col-xs-12 text-center pb-3'> 
                        <button className='btn btn-primary btn-lg' onClick={listenContinuously}>Ascolta</button>
                    </div>
                    <div className='col-md-4 col-xs-12 text-center pb-3'> 
                        <button className='btn btn-primary btn-lg' onClick={SpeechRecognition.stopListening}>Stop</button>
                    </div>
                    <div className='col-md-4 col-xs-12 text-center pb-3'> 
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