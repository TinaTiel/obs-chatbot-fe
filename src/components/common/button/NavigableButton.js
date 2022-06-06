import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router";

const NavigableButton = ({to, text, options, callToAction}) => {

    let navigate = useNavigate();

    const onClick = () => {
        navigate(to, options);
    }

    return (
        <Button onClick={onClick} callToAction={callToAction} >
            {text}
        </Button>
    );
};

export default NavigableButton;