import React from 'react';
import NavBar from './NavBar';
import { HashRouter, Routes, Route } from 'react-router-dom'
import CommandsList from './commands/CommandsList';
import GroupsList from './groups/GroupsList';
import GroupsForm from './groups/GroupsForm';
import Users from './users/Users';
import Splash from './Splash';
import Logo from './Logo';
import Header from './Header';
import CommandForm from './commands/form/CommandForm';

const App = () => {
    return (
        <HashRouter>
            <div className="
            flex flex-col
            h-screen min-h-0
            bg-c-bg-light dark:bg-c-bg-dark
            font-mono 
            text-c-text-primary dark:text-c-text-primary-dark
            ">
                <header id="header" className="
                flex md:flex-row flex-col 
                items-center justify-between
                dark:bg-c-fg-dark
                border-y border-fg-light dark:border-fg-dark">
                    <Logo />
                    <Header/>
                </header>
                <div className="
                flex md:flex-row flex-col
                h-full min-h-0 
                w-full min-w-0">
                    <nav id="navbar" className="
                    md:basis-1/6
                    md:h-full md:min-h-0
                    w-screen
                    fixed bottom-0 left-0
                    md:static
                    dark:bg-c-fg-dark
                    md:border-r md:border-b-0 md:border-b md:border-c-fg-light md:dark:border-c-fg-dark/25" >
                        <NavBar />
                    </nav>
                    <main id="content" className="
                    h-full min-h-0
                    w-full min-w-0
                    justify-center
                    text-center md:text-left
                    ">
                        <Routes>
                            <Route path='/' 
                                exact 
                                element={<Splash />} 
                            />
                            <Route path='/commands' 
                                exact 
                                element={<CommandsList />} 
                            />
                            <Route path='/commands/create' 
                                exact 
                                element={<CommandForm />} 
                            />
                            <Route path='/commands/edit/:id' 
                                exact 
                                element={<CommandForm />} 
                            />
                            <Route path='/groups' 
                                exact 
                                element={<GroupsList />} 
                            />
                            <Route path='/groups/create' 
                                exact 
                                element={<GroupsForm />} 
                            />
                            <Route path='/groups/edit/:id' 
                                exact 
                                element={<GroupsForm />} 
                            />
                            <Route path='/users' 
                                exact 
                                element={<Users />} 
                            />
                        </Routes>
                    </main>
                </div>
            </div>
        </HashRouter>
    );
};

export default App;