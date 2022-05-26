import LoadingIcon from "./LoadingIcon";

const Loading = ({loading, children}) => {

    if(loading) {
        return (
            <div className="
                h-full
                flex flex-col justify-center items-center
                ">
                <div className='animate-fade-in'>
                    <LoadingIcon />
                </div>
            </div>
        );
    } else {
        return (
            <div className="animate-fade-in">
                {children}
            </div>
        );
    }
}

export default Loading;