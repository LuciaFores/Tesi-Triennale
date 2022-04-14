import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import ForgotPW from './pages/ForgotPW';
import reportWebVitals from './reportWebVitals';
import CaregiverProfile from './pages/CaregiverProfile';
import UserAlreadyExists from './pages/UserAlreadyExists';
import UserNotFound from './pages/UserNotFound';
import ChangePassword from './pages/ChangePassword';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route path='login' element={<LogIn/>}/>
            <Route path='forgotpw' element={<ForgotPW/>}/>
            <Route path='caregiverprofile' element={<CaregiverProfile/>}/>
            <Route path='caregiverprofile/changePW' element={<ChangePassword/>}/>
            <Route path='userae' element={<UserAlreadyExists/>}/>
            <Route path='usernf' element={<UserNotFound/>}/>
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
