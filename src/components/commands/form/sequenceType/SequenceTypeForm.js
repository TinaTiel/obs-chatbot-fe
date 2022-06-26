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
                    return <RandomOrderForm {...{control}} />
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
        <div>
            <SelectInput 
                name="actionSequence.sequenceType"
                label="Sequence Type"
                options={options}
                control={control}
            />
            {renderFormByType()}
        </div>
    )
}

export default SequenceTypeForm;