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

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route path='login' element={<LogIn/>}/>
            <Route path='forgotpw' element={<ForgotPW/>}/>
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
