import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Login.css';
import socialDesktop from '../assets/images/socialDesktop.png';

function Login() {
    return (
        <div className='container login-container'>
            <div className='row'>
                <div className='col-md-7'>
                    <img src={socialDesktop} className='w-100 h-100' alt='desktop-social' />
                </div>
                <div className='col-md-5'>
                    <div className="card shadow">
                        <div className="card-body px-5">
                            <h4 className="card-title text-center mt-3 fw-bold">Log In</h4>
                            <form>
                                <input type="email" className="p-2 mt-4 mb-2 form-control input-bg" placeholder='Phone number, username or e-mail' />
                                <input type="password" className="p-2 mb-2 form-control input-bg" placeholder='Password' />
                                <div className="mt-3 d-grid">
                                    <button className="custom-btn custom-btn-blue">Log In</button>
                                </div>
                                <div className='my-4'>
                                    <hr className='text-muted'/>
                                    <h5 className='text-muted text-center'>Or </h5>
                                    <hr className='text-muted'/>
                                </div>
                                <div className='mt-3 mb-5 d-grid'>
                                    <button className="custom-btn custom-btn-white">
                                        <span className='text-muted fs-6'>Don't have an account?</span>
                                        <Link to='/signup' className='ms-1 text-info fw-bold'>Sign Up</Link>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;