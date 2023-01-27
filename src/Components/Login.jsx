import React from 'react';
import '../assets/css/Login.css';
import socialDesktop from '../assets/images/socialDesktop.png';

function Login() {
    return (
        <div className='container login-container'>
            <div className='row'>
                <div className='col-md-7'>
                    <img src={socialDesktop} className='w-100' alt='desktop-social' />
                </div>
                <div className='col-md-5'>
                    <div className="card shadow">
                        <div className="card-body">
                            <h4 className="card-title text-center mt-3 fw-bold">Log In</h4>
                            <form>
                                <div className="mb-3">
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;