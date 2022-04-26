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
            <Route path='caregiverprofile/changePW' element={<ChangePassword/>}/>
            <Route path='caregiverprofile/changePW/pwnm' element={<PasswordNotModified/>}/>
            <Route path='caregiverprofile/changePW/pwmd' element={<PasswordModified/>}/>
            <Route path='registerDisability' element={<RegisterDisability/>}/>
            <Route path='registerDisability/success' element={<RDSuccess/>}/>
            <Route path='registerDisability/error' element={<RDError/>}/>
            <Route path='patientProfile' element={<PatientProfile/>}/>
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
