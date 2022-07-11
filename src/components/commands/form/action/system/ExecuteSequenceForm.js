import SelectInput from "../../../../common/form/SelectInput";
import { useSelector } from "react-redux";

const ExecuteSequenceForm = ({prefix, control}) => {

    const {list} = useSelector((state) => state.commandsState);

    let options = [];
    if(list) {
        options.push(...list.map(command => {
            return {
                label: command.name,
                value: command.id
            }
        }));
    }

    return (
        <div>
            <SelectInput
                control={control}
                name={`${prefix}.commandId`}
                label='Command'
                options={options}
            />
        </div>
    )
}

export default ExecuteSequenceForm;