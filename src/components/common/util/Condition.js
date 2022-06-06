const Condition = ({predicate, children}) => {
    if(predicate) {
        return <>{children}</>
    } else {
        return <></>
    }
}

export default Condition;