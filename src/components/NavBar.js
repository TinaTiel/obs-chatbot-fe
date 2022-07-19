import React from "react";
import NavItem from "./NavItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll, faUsers, faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (

        <div className="
        flex flex-row md:flex-col 
        justify-center
        ">
            {/* <NavItem location='/commands' text='Commands' icon='fas fa-solid fa-scroll' />
            <NavItem location='/groups' text='Groups' icon='fas fa-solid fa-users' />
            <NavItem location='/users' text='Users' icon='fas fa-regular fa-user' /> */}
            <NavItem location='/commands' text='Commands' icon={<FontAwesomeIcon icon={faScroll} size='xl' />} />
            <NavItem location='/groups' text='Groups' icon={<FontAwesomeIcon icon={faUsers} size='xl' />} />
            <NavItem location='/users' text='Users' icon={<FontAwesomeIcon icon={faUser} size='xl' />} />
        </div>
    );
}

export default NavBar;