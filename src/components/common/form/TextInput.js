import { useController } from "react-hook-form";
import InputContainer from "./InputContainer";

const TextInput = ({
    name,
    label,
    control,
    textArea
}) => {

    const {field} = useController({name, control, defaultValue: ''});

    const renderInput = () => {

        let classes = `
            text-xl p-5
            w-full
            rounded
            dark:bg-c-fg-dark
            dark:text-c-text-primary-dark text-c-text-primary-light
            border dark:border-c-fg-dark border-c-fg-light
        `;
        if(textArea) {
            return <textarea type="text"  {...field} className={classes} 
                rows={4}
            />
        } else {
            return <input type="text" {...field} className={classes} />
        }
    }

    return (
        <InputContainer {...{name, label}}>
            {renderInput()}
        </InputContainer>
    );
}

export default TextInput;