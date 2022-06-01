import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightToBracket, faUserPlus} from '@fortawesome/free-solid-svg-icons'

function Navbar(){
    const suIcon = <FontAwesomeIcon icon={faUserPlus}/>
    const liIcon = <FontAwesomeIcon icon={faArrowRightToBracket}/>
    return(
        <nav className='navbar navbar-light navbar-expand-lg sticky-top bg-light'>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand'>TheraGiver</Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                    <div className='navbar-nav'>
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                        <HashLink smooth className='nav-link' to='/#about'>About</HashLink>
                        <HashLink smooth className='nav-link' to='/#funzionalita'>Servizi</HashLink>
                        <HashLink smooth className='nav-link' to='/#redirect'>Prossimi passi</HashLink>
                        <HashLink smooth className='nav-link' to='/#contatti'>Contatti</HashLink>

                    </div>
                    <div className='navbar-nav ms-auto'>
                        <NavLink className='nav-link' to='/signup'>{suIcon} Sign Up</NavLink>
                        <NavLink className='nav-link' to='/login'>{liIcon} Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;