import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import HomeLO from './pages/HomeLO';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import ForgotPW from './pages/ForgotPW';
import reportWebVitals from './reportWebVitals';
import CaregiverProfile from './pages/CaregiverProfile';
import UserAlreadyExists from './pages/UserAlreadyExists';
import UserNotFound from './pages/UserNotFound';
import ChangePassword from './pages/ChangePassword';
import RegisterDisability from './pages/RegisterDisability';
import PatientProfile from './pages/PatientProfile';
import CaregiverAlreadyConnected from './pages/CaregiverAlreadyConnected';
import PatientNotFound from './pages/PatientNotFound';
import PasswordNotModified from './pages/PasswordNotModified';
import PasswordModified from './pages/PasswordModified';
import FPWSuccess from './pages/FPWSuccess';
import FPWError from './pages/FPWError';
import RDSuccess from './pages/RDSuccess';
import RDError from './pages/RDError';
import PatientAlreadyExists from './pages/PatientAlreadyExists';
import TherapyExercisesTypeList from './pages/TherapyExercisesTypeList';
import RoutineSelection from './pages/RoutineSelection';
import TherapyExercisesList from './pages/TherapyExercisesList';
import NewExerciseInList from './pages/NewExerciseInList';
import Contact from './pages/Contact';
import RSSuccess from './pages/RSSuccess';
import Appaiamento from './pages/Appaiamento';
import NESuccess from './pages/NESuccess';
import NEError from './pages/NEError';
import CCSuccess from './pages/CCSuccess';
import RequestSent from './pages/RequestSent';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/homelo' element={<HomeLO/>}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route path='login' element={<LogIn/>}/>
            <Route path='forgotpw' element={<ForgotPW/>}/>
            <Route path='forgotpw/success' element={<FPWSuccess/>}/>
            <Route path='forgotpw/error' element={<FPWError/>}/>
            <Route path='caregiverprofile' element={<CaregiverProfile/>}/>
            <Route path='caregiverprofile/success' element={<CCSuccess/>}/>
            <Route path='caregiverprofile/requestSent' element={<RequestSent/>}/>
            <Route path='caregiverprofile/changePW' element={<ChangePassword/>}/>
            <Route path='caregiverprofile/changePW/pwnm' element={<PasswordNotModified/>}/>
            <Route path='caregiverprofile/changePW/pwmd' element={<PasswordModified/>}/>
            <Route path='registerDisability' element={<RegisterDisability/>}/>
            <Route path='registerDisability/success' element={<RDSuccess/>}/>
            <Route path='registerDisability/error' element={<RDError/>}/>
            <Route path='patientProfile' element={<PatientProfile/>}/>
            <Route path='patientProfile/therapyExercisesTypeList' element={<TherapyExercisesTypeList/>}/>
            <Route path='patientProfile/therapyExercisesTypeList/newExercise' element={<NewExerciseInList/>}/>
            <Route path='patientProfile/therapyExercisesTypeList/newExercise/success' element={<NESuccess/>}/>
            <Route path='patientProfile/therapyExercisesTypeList/newExercise/error' element={<NEError/>}/>
            <Route path='patientProfile/therapyExercisesTypeList/newExercise/contactForm' element={<Contact/>}/>
            <Route path='patientProfile/therapyExercisesTypeList/newExercise/contactForm/success' element={<RSSuccess/>}/>
            <Route path='patientProfile/therapyExercisesTypeList/therapyExercisesList' element={<TherapyExercisesList/>}/>
            <Route path='patientProfile/routineSelection' element={<RoutineSelection/>}/>
            <Route path='patientProfile/exercises/appaiamento' element={<Appaiamento/>}/>
            <Route path='userae' element={<UserAlreadyExists/>}/>
            <Route path='usernf' element={<UserNotFound/>}/>
            <Route path='caregiverac' element={<CaregiverAlreadyConnected/>}/>
            <Route path='patientnf' element={<PatientNotFound/>}/>
            <Route path='patientae' element={<PatientAlreadyExists/>}/>
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
