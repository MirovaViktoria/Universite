import React, { FC } from 'react';
import './index.css';

import { Routes, Route } from 'react-router';
import Home from './components/routing/Home';
import { Link } from 'react-router-dom';
import AddStudents from './components/routing/addStudents';

const App: FC = () => {
    return (
        <div className='App'>
            <header>
                <li>
                    <Link to=''>Home</Link>
                </li>
                <li>
                    <Link to='/addStudent'>AddStudent</Link>
                </li>
            </header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/addStudent' element={<AddStudents />} />
            </Routes>
        </div>
    );
};

export default App;
