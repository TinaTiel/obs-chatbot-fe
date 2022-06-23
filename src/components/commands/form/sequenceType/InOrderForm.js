import BooleanInput from "../../../common/form/BooleanInput";

const InOrderForm = ({control}) => {

    return (
        <div>
            <BooleanInput 
                control={control} 
                name='actionSequence.reverse' 
                label='Reverse action order' />
        </div>
    )
}

export default InOrderForm;