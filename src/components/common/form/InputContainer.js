
const InputContainer = ({name, label, children}) => {

    return (
        <div className="w-100 py-2">
            <label htmlFor={name} className="block pb-2">{label}</label>
            <div>{children}</div>
        </div>
    );
}

export default InputContainer;