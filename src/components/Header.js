import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    return (

        <div className="text-center md:text-left">
            <Link to='/' className="">
                <h1 className="text-c-primary 
                hover:text-c-primary-hover-light dark:hover:text-c-primary-hover-dark">
                    OBS Chatbot
                </h1>
            </Link>
        </div>
    );
}

export default Header;