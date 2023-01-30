import React from 'react';
import '../assets/css/NavBar.css'
import logo from '../assets/images/logo.png';
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar bg-light shadow-sm">
            <div className="container-fluid">
                <NavLink className="navbar-brand ms-5" to='/'>
                    <img src={logo} alt="logo" height='45px' /> DarkGram
                </NavLink>
                <form className="d-flex me-5" role="search">
                    <input className="searchbox form-control text-muted me-2" type="search" placeholder="Buscar" />
                    <a className="nav-link text-dark fs-5" href="#"><i className="fa-solid fa-house" /></a>
                    <a className="nav-link text-dark fs-5" href="#"><i className="fa-regular fa-heart" /></a>
                    <NavLink className="nav-link text-dark fs-4" to="/myprofile"><i className="fa-solid fa-circle" /></NavLink>
                </form>
            </div>
        </nav>
    )
};

export default NavBar;