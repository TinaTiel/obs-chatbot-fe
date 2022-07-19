import SelectInput from "../../../../common/form/SelectInput";
import { useSelector } from "react-redux";
import { useFindAllCommandsQuery } from "../../../../../services/commands";

const ExecuteSequenceForm = ({prefix, control}) => {

    const {data, error, isLoading} = useFindAllCommandsQuery();

    let options = [];
    if(data) {
        options.push(...data.map(command => {
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