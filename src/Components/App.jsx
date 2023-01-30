import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../assets/css/App.css';
import Login from './Login';
import Signup from './Signup';
import NavBar from './NavBar';
import PostOverview from './PostOverview';

function App() {
    return (
        <div className='app-bg'>
            <NavBar />
            <Router>
                <Routes>
                    <Route exact path='/' element={<Login />}></Route>
                    <Route exact path='/login' element={<Login />}></Route>
                    <Route exact path='/signup' element={<Signup />}></Route>
                    <Route exact path='/posts' element={<PostOverview />}></Route>
                </Routes>
            </Router>
        </div>
    )
};

export default App;