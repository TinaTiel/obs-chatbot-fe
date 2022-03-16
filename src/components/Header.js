import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    return (

        <div className="text-center md:text-left
        text-c-primary 
        hover:text-c-primary-hover-light dark:hover:text-c-primary-hover-dark
        py-2 px-4">
            <Link to='/' className="flex flex-row items-center">
                <i className="fas fa-robot fa-xl pr-2"></i>
                <h1 className="font-bold">
                    OBS Chatbot
                </h1>
            </Link>
        </div>
    );
}

export default Header;