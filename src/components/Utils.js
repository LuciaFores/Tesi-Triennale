import axios from 'axios';
import abilities from './Abilities';

var RandExp = require('randexp');

export const passwordRE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;

export const emailRE = /^[a-zA-Z0-9.!#$%&'*+\/=?^ `{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const fiscalCodeRE = /[A-Z]{6}[\d]{2}[A-Z]{1}[\d]{2}[A-Z0-9]{4}[A-Z]{1}/;

export function clearUserData(){
    let data = localStorage.getItem('caregiverData');
    data = data.slice(25, (data.length)-1)
    data = data.replace(/"/g, '');
    const datas = data.split(',');
    const nameData= datas[0].split(':');
    const name = nameData[1]
    localStorage.setItem('caregiverName', name);
    const surnameData= datas[1].split(':');
    const surname = surnameData[1]
    localStorage.setItem('caregiverSurname', surname);
    const fiscalcodeData = datas[2].split(':');
    const fiscalcode = fiscalcodeData[1]
    localStorage.setItem('caregiverFiscalcode', fiscalcode);
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
    const birthDateData= datas[1].split(':');
    const birthDate = birthDateData[1]
    localStorage.setItem('patientBirthDate', birthDate);
    const exListNumData = datas[2].split(':');
    const exListNum = exListNumData[1];
    localStorage.setItem('patientExListNum', exListNum);
    const nameData = datas[3].split(':');
    const name = nameData[1];
    localStorage.setItem('patientName', name);
    const surnameData = datas[4].split(':');
    const surname = surnameData[1];
    localStorage.setItem('patientSurname', surname);
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

export function changeDateFormat(date){
    return date.split('-').reverse().join('-');
}

export function getTypes(){
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
        exercise.push(exercises[i])
        exercise.push(changeDateFormat(exercises[i+1]));
        exercise.push(exercises[i+2]);
        exercise.push(exercises[i+3]);
        exercise.push(exercises[i+4]);
        exercise.push(exercises[i+5]);
        let cod = exercises[i+6];
        let ability = translateTableAbility(cod);
        exercise.push(ability);
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
        const exTypes = localStorage.getItem('exTypes').split(',');
        if(exTypes.includes(exTypeChosen)){
            return true;
        }
        return false;
    }
    return true;
}

function translateTableAbility(cod){
    if(cod == 1){
        return 'Cane';
    }
    if(cod == 2){
        return 'Gatto';
    }
    if(cod == 3){
        return 'Elefante';
    }
    if(cod == 4){
        return 'Cavallo';
    }
    if(cod == 5){
        return 'Mucca';
    }
    if(cod == 6){
        return 'Pecora';
    }
}

export function unicodeToChar(text) {
    return text.replace(/\\u[\dA-F]{4}/gi, 
           function (match) {
                return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
           });
}

export function getRandomIndex(min, max){
    return Math.floor(Math.random() * (max-min)+1 ) + min;
}

export function fisherYatesShuffle(array){
    // La funzione, seguendo l'algoritmo di shuffling di Fisher-Yates nella versione di Durstenfeld e 
    // Knuth serve a mischiare le tre abilità nell'array così da disporle in modo sempre più o meno
    // diverso al bambino
    for(let i = array.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1));
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
}

export function getAllExercises(){
    const obj = {
        exListNum : localStorage.getItem('patientExListNum'),
    }
    //console.log(obj);
    axios.post('http://localhost/tirocinio/getAllExercises.php', obj)
        .then(res => localStorage.setItem('allExercisesData', res.data))
        .catch(error => console.log('errore'))
}

export function clearAllExercisesData(){
    let data = localStorage.getItem('allExercisesData');
    data = data.slice(25, (data.length)-1);
    data = data.replace(/"/g, '');
    localStorage.removeItem('allExercisesData');
    localStorage.setItem('allExercises', data);
}

export function rearrangeAllExercises(){
    let allExercises = localStorage.getItem('allExercises').split(',');
    let allExercisesList = [];
    for (var i = 0; i<allExercises.length; i+=8){
        let exercise = []
        exercise.push(allExercises[i])
        exercise.push(changeDateFormat(allExercises[i+1]));
        exercise.push(allExercises[i+2]);
        exercise.push(allExercises[i+3]);
        exercise.push(allExercises[i+4]);
        exercise.push(allExercises[i+5]);
        exercise.push(allExercises[i+6]);
        let cod = allExercises[i+7];
        let ability = translateTableAbility(cod);
        exercise.push(ability);
        allExercisesList.push(exercise);
    }
    return allExercisesList;
}

export function populateRoutine(exercise){
    var id = "#" + createId(exercise);
    var btn = document.querySelector(id);

    if(btn.innerText != "Aggiunto!"){
        btn.innerText = "";
        btn.innerText = "Aggiunto!";
        btn.className = "";
        btn.className = "btn btn-success";
        if(localStorage.getItem('routine') === null){
            localStorage.setItem('routine', '');
        }
        let routine = localStorage.getItem('routine');
        routine += exercise + ',';
        localStorage.setItem('routine', routine);
    }
    
}

export function clearRoutine(){
    localStorage.removeItem('routine');
}

export function createDisabilityOptions(){
    var values = localStorage.getItem('disabilities').split(',');

    const select = document.querySelector("#inputDisability");

    for(const val of values){
        var option = document.createElement("option");
        option.value = val;
        option.text = "Disabilità " + val.charAt(0).toUpperCase() + val.slice(1);
        select.options.add(option);
    }
}

export function clearDisabilitiesData(){
    let data = localStorage.getItem('disabilitiesData');
    data = data.slice(25, (data.length)-1);
    data = data.replace(/"/g, '');
    localStorage.setItem('disabilities', data);
}

export function createExerciseTypesOptions(){
    var values = localStorage.getItem('exerciseTypes').split(',');

    const select = document.querySelector("#inputExerciseType");

    for(const val of values){
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.options.add(option);
    }
}

export function clearExerciseTypesData(){
    let data = localStorage.getItem('exerciseTypesData');
    data = data.slice(25, (data.length)-1);
    data = data.replace(/"/g, '');
    localStorage.setItem('exerciseTypes', data);
}

export function createAbilitiesOptions(){
    var values = localStorage.getItem('abilities').split(',');

    const select = document.querySelector("#inputAbility");

    for(const val of values){
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.options.add(option);
    }
}

export function clearAbilititesData(){
    let data = localStorage.getItem('abilitiesData');
    data = data.slice(25, (data.length)-1);
    data = data.replace(/"/g, '');
    localStorage.setItem('abilities', data);
}

export function displayMessageBody(cgFiscalCode, cgName, cgSurname, ptFiscalCode, ptName, ptSurname, type){
    var div = document.getElementById('messageBody');
    div.textContent = "";

    if(type === 'richiesta'){
        const p1 = document.createElement('p');

        const h1 = document.createElement('h1');
        var title = document.createTextNode('Contenuto del messaggio')
        h1.appendChild(title);

        /*var body1 = document.createTextNode(
            "È stata inviata una richiesta di collegamento da parte del caregiver Paolo Bianchi, il cui codice fiscale è "
        );*/

        var body1 = document.createTextNode(
            "È stata inviata una richiesta di collegamento da parte del caregiver " + cgName + " " + cgSurname + ", il cui codice fiscale è "
        );

        const strong1 = document.createElement('strong');
        //var cf1 = document.createTextNode('BNCPLA85D08H501D')
        var cf1 = document.createTextNode(cgFiscalCode)
        strong1.appendChild(cf1);

        /*var body2 = document.createTextNode(
            " per diventare caregiver del bambino Mario Rossi, il cui codice fiscale è "
        );*/

        var body2 = document.createTextNode(
            ", per diventare caregiver del bambino " + ptName + " " +  ptSurname + ", il cui codice fiscale è "
        );

        const strong2 = document.createElement('strong');
        //var cf2 = document.createTextNode('RSSMRA11S11H501O')
        var cf2 = document.createTextNode(ptFiscalCode)
        strong2.appendChild(cf2);

        const p2 = document.createElement('p');
        var body3 = document.createTextNode('Vuoi accettare? ');

        const buttonYes = document.createElement('button');
        buttonYes.className = 'btn btn-success';
        var buttonYesText = document.createTextNode('Sì');
        buttonYes.appendChild(buttonYesText);
        buttonYes.addEventListener('click', () => openAcceptanceForm());

        const buttonNo = document.createElement('button');
        buttonNo.className = 'btn btn-danger ms-2';
        var buttonNoText = document.createTextNode('No');
        buttonNo.appendChild(buttonNoText);
        buttonNo.addEventListener('click', () => closeMessage());

        p1.appendChild(body1);
        p1.appendChild(strong1);
        p1.appendChild(body2);
        p1.appendChild(strong2);
        p2.appendChild(body3);
        p2.appendChild(buttonYes);
        p2.appendChild(buttonNo);
        div.appendChild(h1);
        div.appendChild(p1);
        div.appendChild(p2);
    }
    else{
        const p1 = document.createElement('p');

        const h1 = document.createElement('h1');
        var title = document.createTextNode('Contenuto del messaggio')
        h1.appendChild(title);

        /*var body1 = document.createTextNode(
            "È stata inviata una richiesta di collegamento da parte del caregiver Paolo Bianchi, il cui codice fiscale è "
        );*/

        var body1 = document.createTextNode(
            "La tua richiesta di collegamento inviata al tutore " + cgName + " " + cgSurname
        );

        var body2 = document.createTextNode(
            " del bambino " + ptName + " " +  ptSurname + " è stata accettata!"
        );

        const p2 = document.createElement('p');

        const buttonOk = document.createElement('button');
        buttonOk.className = 'btn btn-primary';
        var buttonOkText = document.createTextNode('Ok');
        buttonOk.appendChild(buttonOkText);
        buttonOk.addEventListener('click', () => closeMessage());

        p1.appendChild(body1);
        p1.appendChild(body2);
        p2.appendChild(buttonOk);
        div.appendChild(h1);
        div.appendChild(p1);
        div.appendChild(p2);
    }
    
}

function closeMessage(){
    var div = document.getElementById('messageBody');
    var form = document.getElementById('acceptanceForm');
    div.textContent = "";
    form.className = "";
    form.className = "d-none";
}

function openAcceptanceForm(){
    var form = document.getElementById('acceptanceForm');
    form.className = "";
}

export function confirmDelete(id){
    var form = document.getElementById('acceptanceForm');
    form.className = "";
    form.className = "d-none";

    var div = document.getElementById('messageBody');
    div.textContent = "";

    const p1 = document.createElement('p');

    const h1 = document.createElement('h1');
    var title = document.createTextNode('Vuoi cancellare il messaggio?')
    h1.appendChild(title);

    const buttonYes = document.createElement('button');
    buttonYes.className = 'btn btn-danger';
    var buttonYesText = document.createTextNode('Sì');
    buttonYes.appendChild(buttonYesText);
    buttonYes.addEventListener('click', () => deleteMessage(id));

    const buttonNo = document.createElement('button');
    buttonNo.className = 'btn btn-success ms-2';
    var buttonNoText = document.createTextNode('No');
    buttonNo.appendChild(buttonNoText);
    buttonNo.addEventListener('click', () => confirmNo());

    p1.appendChild(buttonYes);
    p1.appendChild(buttonNo);
    div.appendChild(h1);
    div.appendChild(p1);
    
}

function confirmNo(){
    var div = document.getElementById('messageBody');
    div.textContent = "";
}

export function clearNotificationsData(){
    let data = localStorage.getItem('notificationsData');
    data = data.slice(25, (data.length)-1);
    data = data.replace(/"/g, '');
    localStorage.setItem('notifications', data);
}

export function rearrangeNotifies(){
    let allNotifies = localStorage.getItem('notifications').split(',');
    
    let notifies = [];
    for (var i = 0; i<allNotifies.length; i+=8){
        let notify = []
        // id
        notify.push(allNotifies[i])
        // cgfiscalcode
        notify.push(allNotifies[i+1]);
        // ptfiscalcode
        notify.push(allNotifies[i+2]);
        // type
        notify.push(allNotifies[i+3]);
        // cgName
        notify.push(allNotifies[i+4]);
        // cgSurname
        notify.push(allNotifies[i+5]);
        // ptName
        notify.push(allNotifies[i+6]);
        // ptSurname
        notify.push(allNotifies[i+7]);
        notifies.push(notify);
    }
    return notifies;
}

export function createNotifyObject(cgName, cgSurname, ptName, ptSurname, type){
    let notifyObj;
    if(type === 'richiesta'){
        notifyObj = "Richiesta di approvazione caregiver " + cgName + " " + cgSurname;
    }
    else{
        notifyObj = "La tua richiesta è per diventare caregiver di " + ptName + " " + ptSurname + " stata accettata!";
    }
    return notifyObj;
}

function deleteMessage(id){
    const obj = {
        id : id,
    }

    axios.post('http://localhost/tirocinio/deleteNotification.php', obj)
        .then(res => 
            window.location.reload()
        )
        .catch(error => console.log(error))
}

export function gamePreparation(){
    var ex = localStorage.getItem('exToBePlayed').split(',');
    var id = parseInt(ex[2]);

    let chosenAbility = abilities.find(ability => ability.id === id);
    let otherAbilities = abilities.filter(ability => ability.id != id);

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

export function checkAppaiamento_Recettivo(chosenName){
    var ex = localStorage.getItem('exToBePlayed').split(',');
    var abilityId = parseInt(ex[2]);
    var exNum = parseInt(ex[0]);

    localStorage.removeItem('exToBePlayed');

    let chosenAbility = abilities.find(ability => ability.id === abilityId);

    let obj;
    
    var check = document.getElementById('check');
    check.className = "";
    check.className = "row";

    if(chosenName === chosenAbility['name']){
        var right = document.getElementById('right');
        right.className = "";
        right.className = "offset-md-4 col-md-4 mt-5";

        var wrong = document.getElementById('wrong');
        wrong.className = "";
        wrong.className = "offset-md-4 col-md-4 mt-5 d-none";

        var exercise = document.getElementById('images');
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

        var exercise = document.getElementById('images');
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

export function displayExercise(){
    var instruction = document.getElementById('instruction');
    instruction.className = "";
    instruction.className = "row d-none";

    var exercise = document.getElementById('exercise');
    exercise.className = "";
    exercise.className = "row"

    var check = document.getElementById('check');
    check.className = "";
    check.className = "row d-none";

    var right = document.getElementById('right');
    right.className = "";
    right.className = "offset-md-4 col-md-4 mt-5 d-none";

    var wrong = document.getElementById('wrong');
    wrong.className = "";
    wrong.className = "offset-md-4 col-md-4 mt-5 d-none";
}

export function saveRoutine(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hour = addZero(date.getHours());
    var minutes = addZero(date.getMinutes());
    var seconds = addZero(date.getSeconds());
    var time = hour + ":" + minutes + ":" + seconds; 
    var now = year + "-" + month + "-" + day + "_" + time;

    var percFisio = localStorage.getItem("patientExListNum")

    var routineName = percFisio + "_" + now;

    localStorage.setItem("routineName", routineName);

    const obj = {
        name : routineName,
        exListNum : percFisio
    }

    axios.post('http://localhost/tirocinio/newRoutine.php', obj)
        .then(res => 
            chooseExercise()
        )
        .catch(error => console.log(error))
}

export function chooseExercise(){
    var exercises = localStorage.getItem('routine').split(',');
    exercises.pop();
    localStorage.setItem('routine', exercises);
    //playExercises()
    window.location.href = "../patientProfile/exercises";
}

function addZero(i){
    if(i<10){
        i = "0" + i;
    }
    return i
}

export function playExercises(){
    var exercises = localStorage.getItem('routine').split(',');
    var exercise = exercises[0];

    const obj = {
        exNum : exercise,
    }
    axios.post('http://localhost/tirocinio/getExercise.php', obj)
    .then(res => 
        localStorage.setItem("exToBePlayedData", res.data),
        )
    .catch(error => console.log(error))
        
}

export function clearExToBePlayedData(){
    let data = localStorage.getItem('exToBePlayedData');
    data = data.slice(25, (data.length)-1)
    data = data.replace(/"/g, '');

    const datas = data.split(',');
    var exData = []

    const exIdData= datas[0].split(':');
    const exId = exIdData[1];
    exData.push(exId);
    const exTypeData= datas[1].split(':');
    const exType = exTypeData[1]
    exData.push(exType);
    const exAbilityData = datas[2].split(':');
    const exAbility = exAbilityData[1];
    exData.push(exAbility);
    
    localStorage.setItem('exToBePlayed', exData);
}

export function redirect(){
    var exData = localStorage.getItem('exToBePlayed').split(',');

    var type = exData[1];

    if(type === "Appaiamento 2D-2D"){
        window.location.href = "../patientProfile/exercises/appaiamento"
    }
    else if(type === "Esercizi Espressivo"){
        window.location.href = "../patientProfile/exercises/espressivo"
    }
    else if(type === "Esercizi Recettivo"){
        window.location.href = "../patientProfile/exercises/recettivo"
    }
}

export function createId(exercise){
    const btnName = "btn" + exercise;
    return btnName;
}

export function clearExerciseResultsData(){
    let data = localStorage.getItem('exerciseResultsData');
    data = data.slice(25, (data.length)-1);
    data = data.replace(/"/g, '');
    localStorage.setItem('exerciseResults', data);
}

export function rearrangeExerciseResults(){
    let exerciseResults = localStorage.getItem('exerciseResults').split(',');
    let exerciseResultsList = [];
    for (var i = 0; i<exerciseResults.length; i+=3){
        let exerciseResult = []
        exerciseResult.push(exerciseResults[i]);
        localStorage.setItem('ex', exerciseResults[i]);
        exerciseResult.push(exerciseResults[i+1]);
        exerciseResult.push(exerciseResults[i+2]);
        exerciseResultsList.push(exerciseResult);
    }
    return exerciseResultsList;
}

export function getData(data){
    const rout = data.split('_');
    const date = changeDateFormat(rout[1]);
    const time = rout[2];
    return date + " " + time;
}

export function clearExerciseResults(){
    localStorage.removeItem('exerciseResults');
}

export function getResults(exercise, ability){
    localStorage.setItem("abilityChosen", ability);
    const obj = {
        exNum : exercise,
    }

    axios.post('http://localhost/tirocinio/getExerciseResults.php', obj)
        .then(res => localStorage.setItem('exerciseResultsData', res.data))
        .catch(error => console.log('errore'))
}

export function updateExercise(id){
    const role = localStorage.getItem('caregiverRole')
    if(role === 'nonProfessionale'){
        alert("Non puoi aggiornare i dati dell'esercizio poiché sei un caregiver non professionale");
    }
    else{
        window.location.href = "/patientProfile/therapyExercisesTypeList/therapyExercisesList/exerciseResults/updateExerciseData"
    }
}

export function logout(){
    localStorage.clear();
    window.location.href = "/"
}