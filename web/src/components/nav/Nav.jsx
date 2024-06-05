import React from 'react';
import { Link } from "react-router-dom";
import Logo from './logo.png';
import './Nav.css';

const Nav = () => {
    return (
        <nav className='nav'>
            <ul className='nav-lista'>
                <li><Link to="/"><img className='nav-logo' alt="tripguide logo" src={Logo} /></Link></li>
                <div className="nav-links">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                    <Link to="/signup" className="nav-link">
                        Inscreva-se
                    </Link>
                </div>
            </ul>
        </nav>
    );
};

export default Nav;
