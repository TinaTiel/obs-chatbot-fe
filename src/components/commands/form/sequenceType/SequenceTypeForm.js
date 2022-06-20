import SelectInput from "../../../common/form/SelectInput";
import InOrderForm from "./InOrderForm";
import RandomOrderForm from "./RandomOrderForm";

const SequenceTypeForm = ({form}) => {

    const {control, watch} = form;

    const sequenceType = watch('actionSequence.sequenceType');

    console.log(sequenceType)

    const renderFormByType = () => {
        switch (sequenceType) {
            case 'inOrder':
                return <InOrderForm {...{form}} />
            case 'randomOrder':
                return <RandomOrderForm {...{form}} />
            default:
                return <div>Unknown</div>
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