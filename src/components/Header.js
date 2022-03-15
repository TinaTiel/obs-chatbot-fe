import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    return (

        <div className="">
            <Link to='/' className="">
                OBS Chatbot
            </Link>
        </div>
    );
}

export default Header;