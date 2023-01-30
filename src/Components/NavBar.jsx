import React from 'react';
import '../assets/css/NavBar.css'
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

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
                    <div className="dropdown ms-5">
                        <button className="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                            <img className='navbar-profile-pic' src="https://images.unsplash.com/photo-1530577912333-0edf2f7864f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" alt="profile pic" />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><NavLink className="dropdown-item nav-link mt-0" to="/myprofile">My Profile</NavLink></li>
                            <li><a className="dropdown-item" href="#">Logout</a></li>
                        </ul>
                    </div>
                </form>
            </div>
        </nav>
    )
};

export default NavBar;