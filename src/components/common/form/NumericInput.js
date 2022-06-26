import { useController } from "react-hook-form";
import InputContainer from "./InputContainer";

const NumericInput = ({name, label, control, defaultValue=0}) => {

    const {field} = useController({name, control, defaultValue});

    return (
        <InputContainer {...{name, label}}>
            <input type="number" name={name} id={name} {...field} className="
                text-xl p-5
                w-full
                rounded
                dark:bg-c-fg-dark
                dark:text-c-text-primary-dark text-c-text-primary-light
                border dark:border-c-fg-dark border-c-fg-light
            "/>
        </InputContainer>
    );
}

export default NumericInput;