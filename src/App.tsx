import React, { FC } from 'react';
import './index.css';

import { Routes, Route } from 'react-router';
import Home from './components/routing/Home';

const App: FC = () => {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/addStudent' element = {< />}/> */}
            </Routes>
        </div>
    );
};

export default App;
