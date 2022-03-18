import React from 'react';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Commands from './commands/Commands';
import Groups from './groups/Groups';
import Users from './users/Users';
import Splash from './Splash';
import Logo from './Logo';
import Header from './Header';

const App = () => {
    return (
        <BrowserRouter>
            <div className="h-screen w-screen flex flex-col 
            overflow-hidden
            bg-c-bg-light dark:bg-c-bg-dark
            font-mono 
            text-c-text-primary dark:text-c-text-primary-dark
            ">
                <header id="header" className="
                flex md:flex-row flex-col items-center justify-between
                border-y border-fg-light dark:border-fg-dark">
                    <Logo />
                    <Header/>
                </header>
                <div className="
                grow
                flex md:flex-row flex-col w-full
                overflow-hidden">
                    <nav id="navbar" className="
                    basis-1/6
                    md:border-r md:border-b-0 border-b border-fg-light dark:border-fg-dark/25" >
                        <NavBar />
                    </nav>
                    <main id="content" className="
                    justify-center grow
                    overflow-y-scroll
                    text-center md:text-left
                    py-7 px-10">
                        <Routes>
                            <Route path='/' exact element={<Splash />} />
                            <Route path='/commands' exact element={<Commands />} />
                            <Route path='/groups' exact element={<Groups />} />
                            <Route path='/users' exact element={<Users />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;