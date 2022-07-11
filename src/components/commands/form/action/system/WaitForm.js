import DurationInput from "../../../../common/form/DurationInput";

const WaitForm = ({prefix, control}) => {

    return (
        <div>
            <DurationInput 
                control={control}
                name={`${prefix}.waitDuration`}
                label='Wait Duration'
            />
            <DurationInput 
                control={control}
                name={`${prefix}.waitTimeout`}
                label='Max Timeout (optional)'
            />
        </div>
    )
}

export default WaitForm;