import InputGroup from "../../../common/form/InputGroup";
import SelectInput from "../../../common/form/SelectInput";
import InOrderForm from "./InOrderForm";
import RandomOrderForm from "./RandomOrderForm";

const SequenceTypeForm = ({form}) => {

    const {control, watch} = form;

    const sequenceType = watch('actionSequence.sequenceType');

    const renderFormByType = () => {
        if(sequenceType) {
            switch (sequenceType) {
                case 'inOrder':
                    return <InOrderForm {...{control}} />
                case 'randomOrder':
                    return <RandomOrderForm {...{control, prefix: 'actionSequence'}} />
                default:
                    return <div>Unknown Sequence Type! Contact the Developer</div>
            }
        }
    }

    const options = [
        {
            value: 'inOrder',
            label: 'In-Order'
        },
        {
            value: 'randomOrder',
            label: 'Random'
        }
    ]

    return (
        <InputGroup name={"Sequence Settings"}>
            <SelectInput 
                name="actionSequence.sequenceType"
                label="Sequence Type"
                options={options}
                control={control}
            />
            {renderFormByType()}
        </InputGroup>
    )
}

export default SequenceTypeForm;