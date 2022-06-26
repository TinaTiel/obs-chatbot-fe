import { useController } from "react-hook-form";
import InputContainer from "./InputContainer";

const BooleanInput = ({control, name, label}) => {

    const {field} = useController({name, control, defaultValue: false});

    const onChange = (e) => {
        field.onChange(e.target.checked);
    }

    const checkmarkClasses = `
        h-10 w-20
        ${field.value ? 'pt-1 pl-2' : 'pr-2'}
        absolute 
        -top-1 left-0 
        flex
        ${field.value ? 'justify-start' : 'justify-end'}`;

    const checkmarkTextClasses = `
        align-middle text-[2rem]
        ${field.value ? 'text-c-text-primary-dark' : 'dark:text-c-text-primary-dark text-c-text-primary-light'}`;

    return (
        <InputContainer {...{name, label}}>
            <label className="flex items-center cursor-pointer mb-4 relative w-20">
                 <input type="checkbox" 
                     checked={field.value}
                     onChange={onChange}
                     id={field.name}
                     className='h-0 w-0 opacity-0'
                 />
                 <div className="toggle-bg
                    h-10 w-20
                    dark:bg-c-fg-dark bg-white
                    border dark:border-c-fg-dark border-c-fg-light
                 " />
                 <div className={checkmarkClasses}>
                    <div className={checkmarkTextClasses}>{field.value ? '🗸' : '✕'}</div> 
                 </div>
            </label>
        </InputContainer>
    );
}

export default BooleanInput;