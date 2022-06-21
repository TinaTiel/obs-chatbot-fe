import Select from "react-select";
import { useController } from "react-hook-form";

const SelectInput = ({name, label, options, control}) => {

    const {field} = useController({name, control});

    const onChange = (change, fieldOnChange) => {
        fieldOnChange(change.value)
    }

    const getValue = (fieldValue) => {
        return options.find(it => it.value === fieldValue)
    }

    return (
        <div>
            <label className="
                block
                pb-5
            ">{label}</label>
            <Select 
                options={options}
                value={getValue(field.value)}
                onChange={change => onChange(change, field.onChange)}
                className='react-select-container'
                classNamePrefix='react-select-custom'
            />
        </div>

    );

}

export default SelectInput;