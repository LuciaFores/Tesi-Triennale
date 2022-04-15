import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightFromBracket, faUser} from '@fortawesome/free-solid-svg-icons'

function Navbar(){
    const uprIcon = <FontAwesomeIcon icon={faUser}/>
    const loIcon = <FontAwesomeIcon icon={faArrowRightFromBracket}/>
    return(
        <nav className='navbar navbar-light navbar-expand-lg sticky-top bg-light'>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand'>Tirocinio</Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                    <div className='navbar-nav'>
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                        <HashLink smooth className='nav-link' to='/homelo#about'>About</HashLink>
                        <HashLink smooth className='nav-link' to='/homelo#funzionalita'>Servizi</HashLink>
                        <HashLink smooth className='nav-link' to='/homelo#redirect'>Prossimi passi</HashLink>
                        <HashLink smooth className='nav-link' to='/homelo#contatti'>Contatti</HashLink>
                    </div>
                    <div className='navbar-nav ms-auto'>
                        <NavLink className='nav-link' to='/caregiverprofile'>{uprIcon} Profile</NavLink>
                        <NavLink className='nav-link' to='/' onClick={() => localStorage.clear()}>{loIcon} Logout</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;