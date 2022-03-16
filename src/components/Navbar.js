import React from "react";
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (

        <div className="flex flex-row md:flex-col justify-center">
            <Link to='/commands' className="">
                <i className="fas fa-regular fa-circle-play ui"></i>
                <span>Commands</span>
            </Link>
            <Link to='/groups' className="">
                <i className="fa-solid fa-users"></i> 
                <span>Groups</span>
            </Link>
            <Link to='users' className="">
                <i className="fa-solid fa-user"></i> 
                <span>Users</span>
            </Link>
        </div>
    );
}

export default NavBar;