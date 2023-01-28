import React from 'react';
import '../assets/css/NavBar.css'
import logo from '../assets/images/logo.png';
function NavBar() {
    return (
        <nav className="navbar bg-light shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand ms-5">
                    <img src={logo} alt="logo" height='45px' /> DarkGram
                </a>
                <form className="d-flex me-5" role="search">
                    <input className="searchbox form-control text-muted me-2" type="search" placeholder="Buscar" />
                    <a className="nav-link text-dark fs-5" href="#"><i className="fa-solid fa-house" /></a>
                    <a className="nav-link text-dark fs-5" href="#"><i className="fa-regular fa-heart" /></a>
                    <a className="nav-link text-dark fs-5" href="#"><i className="fa-solid fa-circle" /></a>
                </form>
            </div>
        </nav>
    )
};

export default NavBar;