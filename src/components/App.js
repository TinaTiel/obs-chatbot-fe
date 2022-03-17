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
            <div className="h-screen flex flex-col 
            md:grid md:grid-cols-[max-content_auto] md:grid-rows-[auto_1fr_auto] md:auto-cols-fr bg-c-bg-light dark:bg-c-bg-dark
            font-mono text-c-text-primary dark:text-c-text-primary-dark
            ">
                <header id="header" className="
                border-y border-fg-light dark:border-fg-dark">
                    <Logo />
                </header>
                <div className="border-y border-fg-light dark:border-fg-dark">
                    <Header />
                </div>
                <nav id="navbar" className="border-r border-fg-light dark:border-fg-dark/25" >
                    <NavBar />
                </nav>
                <main id="content" className="grow justify-center text-center md:text-left
                py-7 px-10">
                    <Routes>
                        <Route path='/' exact element={<Splash />} />
                        <Route path='/commands' exact element={<Commands />} />
                        <Route path='/groups' exact element={<Groups />} />
                        <Route path='/users' exact element={<Users />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;