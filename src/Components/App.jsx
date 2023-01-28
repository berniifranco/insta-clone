import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import NavBar from './NavBar';

function App() {
    return (
        <div>
            <NavBar />
            <Router>
                <Routes>
                    <Route exact path='/' element={<Login />}></Route>
                    <Route exact path='/login' element={<Login />}></Route>
                    <Route exact path='/signup' element={<Signup />}></Route>
                </Routes>
            </Router>
        </div>
    )
};

export default App;