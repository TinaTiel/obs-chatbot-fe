import React from "react";
import {NavLink} from 'react-router-dom';

const NavItem = (props) => {

    const baseClasses = `
        flex flex-col md:flex-row 
        place-items-center md:content-center md:items-center
        gap-4
        w-full
        text-sm md:text-xl 
        text-c-text-primary-light dark:text-c-text-primary-dark 
        hover:text-c-text-secondary-light dark:hover:text-c-text-secondary-dark 
        hover:bg-c-primary-hover-light hover:bg-c-primary-hover-dark 
        py-4 pb-2 md:py-6 md:px-6`;
    const activeClasses = 'bg-c-primary';

    return (
        <NavLink 
            to={props.location} 
            className={ ({isActive}) => 
                isActive ? `${baseClasses} ${activeClasses}` : baseClasses
            } >
            <div className="h-2 md:w-6 md:h-full">
                <i className={`${props.icon} fa-lg md:pr-2 md:basis-1/4`}></i>
            </div>
            <span>{props.text}</span>
        </NavLink>
    );
};

export default NavItem;