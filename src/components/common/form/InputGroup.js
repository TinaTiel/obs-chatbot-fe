
const InputGroup = ({name, children}) => {
    return (
        <div className="w-100 py-2">
            <div className="
                pb-2
                italic
            ">{name}</div>
            <div className="relative
                px-3 pb-2
                border dark:border-c-fg-dark border-c-fg-light
            ">
                <div>{children}</div>
            </div>
        </div>
    );
}

export default InputGroup;