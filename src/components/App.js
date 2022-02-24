import React from 'react';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Commands from './commands/Commands';
import Groups from './groups/Groups';
import Users from './users/Users';
import Splash from './Splash';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' exact element={<Splash />} />
                    <Route path='/commands' exact element={<Commands />} />
                    <Route path='/groups' exact element={<Groups />} />
                    <Route path='/users' exact element={<Users />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;