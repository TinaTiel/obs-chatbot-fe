import Select from "react-select";
import { useController } from "react-hook-form";
import InputContainer from "./InputContainer";

const SelectInput = ({name, label, control, options, defaultValue=null, isClearable=false}) => {

    const {field} = useController({name, control, defaultValue});

    const onChange = (change, fieldOnChange) => {
        fieldOnChange(change?.value)
    }

    const getValue = (fieldValue) => {
        return options.find(it => it.value === fieldValue)
    }

    return (
        <InputContainer {...{name, label}}>
            <Select 
                isClearable={isClearable}
                options={options}
                value={getValue(field.value)}
                onChange={change => onChange(change, field.onChange)}
                className='react-select-container'
                classNamePrefix='react-select-custom'
            />
        </InputContainer>

    );

}

export default SelectInput;