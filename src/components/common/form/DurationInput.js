import { useController } from "react-hook-form";
import InputContainer from "./InputContainer";

const DurationInput = ({control, name, label, defaultValue=0}) => {

    const {field} = useController({name, control, defaultValue});

    return (
        <InputContainer {...{name, label}}>
            TODO: Duration Input
        </InputContainer>
    )
}

export default DurationInput;