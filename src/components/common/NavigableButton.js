import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { useNavigate } from "react-router";

const NavigableButton = ({to, text, options}) => {

    let navigate = useNavigate();

    const onClick = () => {
        navigate(to, options);
    }

    return (
        <Button onClick={onClick}>
            {text}
        </Button>
    );
};

export default NavigableButton;