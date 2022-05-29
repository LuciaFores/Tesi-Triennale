import React from 'react';
import Dictaphone from './Dictaphone';
import abilities from './Abilities';
import { } from './Utils';

function EserciziEspressivo(){
    let correctAbility = abilities.find(ability => ability.name === 'Cavallo');

    return(
        <div>
            <div className='row'>
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
    )
}

export default EserciziEspressivo;