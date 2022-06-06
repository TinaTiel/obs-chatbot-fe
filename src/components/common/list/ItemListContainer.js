const ItemListContainer = ({children}) => {
    return (
        <article className="
        h-full min-h-0
        w-full min-w-0
        flex flex-col">
            {children}
        </article>
    )
}

export default ItemListContainer;