
const TextInput = ({
    label,
    register,
    textArea
}) => {

    const renderInput = () => {

        let classes = `
            text-xl p-5
            w-full
            rounded
            dark:bg-c-fg-dark
            dark:text-c-text-primary-dark text-c-text-primary-light
            border dark:border-c-fg-dark border-c-fg-light
        `;
        if(textArea) {
            return <textarea type="text"  {...register} className={classes} 
                rows={4}
            />
        } else {
            return <input type="text" {...register} className={classes} />
        }
    }

    return (
        <div className="w-100 py-5">
            <label className="
               block
               pb-5
            ">{label}</label>
            {renderInput()}
        </div>
    );
}

export default TextInput;