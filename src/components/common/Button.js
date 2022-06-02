import React from "react";

const Button = ({children, onClick, callToAction}) => {

    let classes = `
        border border-c-primary rounded-lg
        whitespace-nowrap h-full
        px-4 py-2 md:px-4 md:py-2
        dark:hover:bg-c-primary-hover-dark
        dark:hover:text-c-text-primary-dark 
        hover:bg-c-primary-hover-light 
        hover:text-c-text-primary-dark
    `;

    if(callToAction) {
        classes += `
            bg-c-primary
        `;
    }

    return (
        <button 
            className={classes}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;