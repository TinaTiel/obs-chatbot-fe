import React from 'react';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Commands from './commands/Commands';
import Groups from './groups/Groups';
import Users from './users/Users';
import Splash from './Splash';
import Header from './Header';
import Content from './Content';

const App = () => {
    return (
        <BrowserRouter>
            <div className="h-screen flex flex-col 
            md:grid md:grid-cols-[20%_auto] md:grid-rows-[auto_1fr_auto]  bg-c-bg-light dark:bg-c-bg-dark
            font-mono text-c-text-primary dark:text-c-text-primary-dark
            ">
                <header id="header" className="col-span-2">
                    <Header />
                </header>
                <nav id="navbar" >
                    <NavBar />
                </nav>
                <main id="content" className="grow justify-center text-center md:text-left">
                    <Content >
                        <Routes>
                            <Route path='/' exact element={<Splash />} />
                            <Route path='/commands' exact element={<Commands />} />
                            <Route path='/groups' exact element={<Groups />} />
                            <Route path='/users' exact element={<Users />} />
                        </Routes>
                    </Content>    
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;