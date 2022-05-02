import axios from 'axios';

var RandExp = require('randexp');

export const passwordRE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;

export const emailRE = /^[a-zA-Z0-9.!#$%&'*+\/=?^ `{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const fiscalCodeRE = /[A-Z]{6}[\d]{2}[A-Z]{1}[\d]{2}[A-Z0-9]{4}[A-Z]{1}/;

export function clearUserData(){
    let data = localStorage.getItem('caregiverData');
    data = data.slice(25, (data.length)-1)
    data = data.replace(/"/g, '');
    const datas = data.split(',');
    const fiscalcodeData= datas[0].split(':');
    const fiscalcode = fiscalcodeData[1]
    localStorage.setItem('caregiverFiscalcode', fiscalcode);
    const nameData= datas[1].split(':');
    const name = nameData[1]
    localStorage.setItem('caregiverName', name);
    const surnameData = datas[2].split(':');
    const surname = surnameData[1]
    localStorage.setItem('caregiverSurname', surname);
    const roleData = datas[5].split(':');
    const role = roleData[1]
    localStorage.setItem('caregiverRole', role);
}

export function clearPatientData(){
    let data = localStorage.getItem('patientData');
    data = data.slice(25, (data.length)-1)
    data = data.replace(/"/g, '');
    const datas = data.split(',');
    const fiscalcodeData= datas[0].split(':');
    const fiscalcode = fiscalcodeData[1]
    localStorage.setItem('patientFiscalcode', fiscalcode);
    const nameData= datas[1].split(':');
    const name = nameData[1]
    localStorage.setItem('patientName', name);
    const surnameData = datas[2].split(':');
    const surname = surnameData[1];
    localStorage.setItem('patientSurname', surname);
    const birthDateData = datas[3].split(':');
    const birthDate = birthDateData[1];
    localStorage.setItem('patientBirthDate', birthDate);
    const exListNumData = datas[4].split(':');
    const exListNum = exListNumData[1];
    localStorage.setItem('patientExListNum', exListNum);
    var disabilities = []
    for(var i = 5; i < datas.length; i++){
        var disabilityData = datas[i].split(':');
        var disability = disabilityData[1];
        disabilities.push(disability)
    }
    localStorage.setItem('patientDisabilities', disabilities);
}

export function changePatient(){
    localStorage.removeItem('patientFiscalcode');
    localStorage.removeItem('patientName');
    localStorage.removeItem('patientSurname');
    localStorage.removeItem('patientBirthDate');
    localStorage.removeItem('patientDisabilities');
    localStorage.removeItem('patientExListNum');

}

export function randPw(){
    var randPw = new RandExp(passwordRE).gen();
    return randPw;
}

export function calculateAge(birthdate){
    var today = new Date();
    var birthDate = new Date(birthdate);
    // calcolo gli anni
    var age = today.getFullYear() - birthDate.getFullYear();
    // potrei non aver ancora compiuto gli anni in un determinato anno se non è arrivato il mese
    // del compleanno oppure se è arrivato ma non è ancora arrivato il giorno del mio compleanno
    // quindi aggiusto l'età di conseguenza
    var m = today.getMonth() - birthDate.getMonth();
    if(m < 0 || (m === 0 && today.getDate() < birthDate.getDate())){
        age--;
    }
    return age;
}

export function prettifyDisString(disabilities){
    return disabilities.replace(/,/g, ', ');
}

export function changeDateFormat(birthdate){
    return birthdate.split('-').reverse().join('-');
}

export function getTypes(){
    //console.log('eseguita');
    const obj = {
        exListNum : localStorage.getItem('patientExListNum'),
    }

    axios.post('http://localhost/tirocinio/getTypeExercisesTable.php', obj)
        .then(res => localStorage.setItem('exTypesData', res.data))
        .catch(error => console.log('errore'))
}

export function clearExTypesData(){
    let data = localStorage.getItem('exTypesData');
    data = data.slice(25, (data.length)-1)
    data = data.replace(/"/g, '');
    localStorage.removeItem('exTypesData');
    localStorage.setItem('exTypes', data);
}

export function clearExTypes(){
    localStorage.removeItem('exTypes');
}

export function getExercises(type){
    localStorage.setItem('typeChosen', type);
    const obj = {
        exListNum : localStorage.getItem('patientExListNum'),
        exType : type,
    }
    //console.log(obj);
    axios.post('http://localhost/tirocinio/getExercisesList.php', obj)
        .then(res => localStorage.setItem('exercisesData', res.data))
        .catch(error => console.log('errore'))
}

export function clearExercisesData(){
    let data = localStorage.getItem('exercisesData');
    data = data.slice(25, (data.length)-1);
    data = data.replace(/"/g, '');
    localStorage.removeItem('exercisesData');
    localStorage.setItem('exercises', data);
}

export function rearrangeExercises(){
    let exercises = localStorage.getItem('exercises').split(',');
    let exercisesList = [];
    for (var i = 0; i<exercises.length; i+=7){
        let exercise = []
        exercise.push(exercises[i]);
        exercise.push(exercises[i+1]);
        exercise.push(exercises[i+2]);
        exercise.push(exercises[i+3]);
        exercise.push(exercises[i+4]);
        exercise.push(exercises[i+5]);
        exercise.push(exercises[i+6]);
        exercisesList.push(exercise);
    }
    return exercisesList;
}

export function clearExercisesList(){
    localStorage.removeItem('exercisesList');
    localStorage.removeItem('typeChosen');
}

export function getExerciseInformation(){
    const obj = {
        exType : localStorage.getItem('typeChosen'),
    }
    axios.post('http://localhost/tirocinio/getExerciseInformation.php', obj)
    .then(res => localStorage.setItem('exerciseInformationData', res.data))
    .catch(error => console.log('errore'))
}

export function clearExerciseInformationData(){
    let data = localStorage.getItem('exerciseInformationData');
    data = data.slice(25, (data.length)-1)
    data = data.replace(/"/g, '');
    const datas = data.split(',');
    const exerciseNameData= datas[0].split(':');
    const exerciseName = exerciseNameData[1]
    localStorage.setItem('exerciseName', exerciseName);
    const exerciseDescriptionData= datas[1].split(':');
    const exerciseDescription = exerciseDescriptionData[1]
    localStorage.setItem('exerciseDescription', exerciseDescription);
    const exerciseExecutionData = datas[2].split(':');
    const exerciseExecution = exerciseExecutionData[1];
    localStorage.setItem('exerciseExecution', exerciseExecution);
    const exerciseResData = datas[3].split(':');
    const exerciseRes = exerciseResData[1];
    localStorage.setItem('exerciseRes', exerciseRes);
}

export function validInsertion(caregiverRole, exTypeChosen){
    if(caregiverRole === 'nonProfessionale'){
        const exTypes = localStorage.getItem('exTypes');
        if(exTypeChosen in exTypes){
            return true;
        }
        return false;
    }
    return true;
}