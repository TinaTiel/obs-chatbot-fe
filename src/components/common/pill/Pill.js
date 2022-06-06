const Pill = ({icon, text, color}) => {

    const selectedColor = color ? `bg-${color}` : 'bg-gray-400';

    return (
        <div className={`
            inline-block
            px-2
            rounded-full 
            ${selectedColor}
        `}>{icon} {text}</div>
    );
}

export default Pill;