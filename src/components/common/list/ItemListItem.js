const ItemListItem = ({children}) => {
    return (
        <div className='
        flex flex-row justify-between items-center
        dark:hover:bg-c-fg-dark hover:bg-c-fg-light
        py-4 px-2'>
            {children}
        </div>
    );
}

export default ItemListItem;