import TextInput from "../../../../common/form/TextInput";

const SendMessageForm = ({prefix, control}) => {

    return (
        <div>
            <TextInput textArea
                name={`${prefix}.message`}
                label='Message'
                control={control}
            />
        </div>
    )
}

export default SendMessageForm;