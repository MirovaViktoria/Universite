import React, { FC } from 'react';
import './index.css';

import { Routes, Route } from 'react-router';
import Home from './components/routing/Home';
import { Link } from 'react-router-dom';
import AddStudents from './components/routing/addStudents';
import AddTeacher from './components/routing/addTeachers';

const App: FC = () => {
    return (
        <div className='App'>
            <header>
                <li className='navbar-logo'>
                    <Link to=''>Universite</Link>
                </li>
                <ul className='navbar-menu'>
                    {/* <li>
                        <Link to=''>Главная</Link>
                    </li> */}
                    <li>
                        <Link to='/addStudent'>Зачислить</Link>
                    </li>
                    <li>
                        <Link to='/addTeacher'>Нанять учителя</Link>
                    </li>
                </ul>
            </header>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/addStudent' element={<AddStudents />} />
                <Route path='/addTeacher' element={<AddTeacher />} />
            </Routes>
        </div>
    );
};

export default App;
