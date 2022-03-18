import React from "react";
import {Link} from 'react-router-dom';
import NavItem from "./NavItem";

const NavBar = () => {
    return (

        <div className="flex flex-row md:flex-col justify-center">
            <NavItem location='/commands' text='Commands' icon='fas fa-solid fa-circle-play' />
            <NavItem location='/groups' text='Groups' icon='fas fa-solid fa-users' />
            <NavItem location='/users' text='Users' icon='fas fa-regular fa-user' />
        </div>
    );
}

export default NavBar;