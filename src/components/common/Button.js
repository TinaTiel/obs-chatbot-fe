import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({children, onClick}) => {
    return (
        <button 
            className="border border-c-primary rounded-lg
            dark:hover:bg-c-primary-hover-dark
            dark:hover:text-c-text-primary-dark 
            hover:bg-c-primary-hover-light 
            hover:text-c-text-primary-dark
            whitespace-nowrap h-full
            px-4 py-2 md:px-4 md:py-2"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;