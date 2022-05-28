import React, {useEffect, useState} from 'react';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import abilities from './Abilities';



const Dictaphone = () => {
    let correctAbility = abilities.find(ability => ability.name === 'Cavallo');

    const [message, setMessage] = useState('');


    const commands = [
        {
            command: "reset",
            callback: () => resetTranscript()
        }
    ]

    const {
        transcript,
        interimTranscript,
        finalTranscript,
        resetTranscript,
        listening,
    } = useSpeechRecognition({commands});

    /*useEffect(() => {
        if(finalTranscript !== ''){
            console.log('Got final result: ', finalTranscript);
        }
    }, [interimTranscript, finalTranscript]);*/
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
        if(transcript === correctAbility['name'].toLowerCase()){
            alert('corretto');
            resetTranscript();
        }
        else{
            alert('non corretto');
            resetTranscript();
        }
    }

    return (
        <div>
            <h1>Microfono</h1>
            <div>
                <span>
                    listening:
                    {' '}
                    {listening ? 'on' : 'off'}
                </span>
                <div>
                    <button type="button" onClick={resetTranscript}>Reset</button>
                    <button type="button" onClick={listenContinuously}>Listen</button>
                    <button type='button' onClick={SpeechRecognition.stopListening}>Stop</button>
                </div>
            </div>
            <div>
                {message}
            </div>
            <div>
                Risposta: 
                <span> {transcript}</span>
                <br/>
                <button type='button' onClick={inviaRisposta}>Invia Risposta</button>
            </div>
        </div>
    );
};

export default Dictaphone;