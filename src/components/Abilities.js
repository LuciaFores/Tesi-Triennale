import imgCane from '../img/abilities_img/imgCane.svg';
import imgGatto from '../img/abilities_img/imgGatto.svg';
import imgElefante from '../img/abilities_img/imgElefante.svg';
import imgCavallo from '../img/abilities_img/imgCavallo.svg';
import imgMucca from '../img/abilities_img/imgMucca.svg';
import imgPecora from '../img/abilities_img/imgPecora.svg';


let abilities = [
    {
        id : 1,
        name : "Cane",
        img : imgCane
    },
    {
        id : 2, 
        name : "Gatto",
        img : imgGatto
    },
    {
        id : 3,
        name : "Elefante",
        img : imgElefante
    },
    {
        id : 4,
        name : "Cavallo",
        img : imgCavallo
    },
    {
        id : 5,
        name : "Mucca",
        img : imgMucca
    },
    {
        id : 6,
        name : "Pecora",
        img : imgPecora
    }
]

// Per recuperare una precisa abilità sapendo la caratteristica che serve, nel mio caso il nome
// let ability = abilities.find(ability => ability.name === nomeRichiesto)
// Poi per accedere ai campi dell'abilità si fa ability[nomeCampo]
// Poi per prendere tutti gli altri oggetti che non sono quello richiesto e sceglierne randomicamente
// due di questi si potrebbe fare una cosa del tipo
// let otherAbilities = abilities.filter(ability => ability.name != nomeRichiesto)
// questo ritorna tutte le abilità che non sono quella richiesta dall'esercizio
// a questo punto creo
// function getRandomIndex(min, max){
//      return Math.floor(Math.random() * (max-min)+1 ) + min   
// } 
// dove min è 0 e max è la otherAbilities.length()-1
// La funzione funziona perché Math.random torna sempre numeri più piccoli di 1 
// A questo punto prendo randomicamente due elementi dall'array delle abilità che non sono quelle richiesta
// const min = 0
// const max = otherAbilities.length()-1
// let index1 = getRandomIndex(min, max)
// let index2 = getRandomIndex(min, max)
// while(index1 == index2){
//      index2 = getRandomIndex(min, max)
// }
// let wrongAbility1 = otherAbilities[index1]
// let wrongAbility2 = otherAbilities[index2]

export default abilities;