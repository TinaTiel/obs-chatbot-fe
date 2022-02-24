import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    return (

        <div className="ui menu">
            <Link to='/' className="item">
                OBS Chatbot
            </Link>
            <Link to='/commands' className="item">
                <i className="fas fa-regular fa-circle-play ui"></i>
                <span>Commands</span>
            </Link>
            <Link to='/groups' className="item">
                <i className="fa-solid fa-users"></i> 
                <span>Groups</span>
            </Link>
            <Link to='users' className="item">
                <i className="fa-solid fa-user"></i> 
                <span>Users</span>
            </Link>
        </div>
    );
}

export default Header;