import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Commands from './commands/Commands';
import Groups from './groups/Groups';
import Users from './users/Users';
import Splash from './Splash';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const App = () => {
    return (
        <div className="flex flex-col w-screen h-screen">
            <BrowserRouter>
                <Header className="" />
                <div className="flex basis-full">    
                    <Navbar />
                    <Content className="">
                        <Routes>
                            <Route path='/' exact element={<Splash />} />
                            <Route path='/commands' exact element={<Commands />} />
                            <Route path='/groups' exact element={<Groups />} />
                            <Route path='/users' exact element={<Users />} />
                        </Routes>
                    </Content>    
                </div>
                <Footer className=""/>
            </BrowserRouter>
        </div>
    );
};

export default App;