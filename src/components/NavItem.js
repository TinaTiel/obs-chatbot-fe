import React from "react";
import {NavLink} from 'react-router-dom';

const NavItem = (props) => {

    const baseClasses = `
        flex flex-row content-center items-center
        text-xl 
        text-c-text-primary-light dark:text-c-text-primary-dark 
        hover:text-c-text-secondary-light dark:hover:text-c-text-secondary-dark 
        hover:bg-c-primary-hover-light hover:bg-c-primary-hover-dark 
        py-6 px-6`;
    const activeClasses = 'bg-c-primary';

    return (
        <NavLink 
            to={props.location} 
            className={ ({isActive}) => 
                isActive ? `${baseClasses} ${activeClasses}` : baseClasses
            } >
            <i className={`${props.icon} fa-lg pr-2 basis-1/4`}></i>
            <span>{props.text}</span>
        </NavLink>
    );
};

export default NavItem;