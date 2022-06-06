
const TextInput = ({
    label,
    register,
    textArea
}) => {

    const renderInput = () => {

        let classes = `
            text-c-text-primary-dark dark:text-c-text-primary-light
            text-xl
            p-5
            w-full
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