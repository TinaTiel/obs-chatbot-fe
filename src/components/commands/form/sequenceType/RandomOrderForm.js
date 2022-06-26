import BooleanInput from "../../../common/form/BooleanInput";
import NumericInput from "../../../common/form/NumericInput";

const RandomOrderForm = ({prefix, control}) => {

    return (
        <div>
            <NumericInput control={control}
                name={`${prefix}.pickQty`}
                label="Pick Quantity"
            />
            <BooleanInput control={control} 
                name={`${prefix}.maintainOrder`} 
                label="Maintain Order" 
            />
        </div>
    )
}

export default RandomOrderForm;