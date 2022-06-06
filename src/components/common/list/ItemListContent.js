const ItemListContent = ({children}) => {

    return (
        <div className="
            overflow-y-scroll
            scrollbar
            px-2 py-2
            text-left
            h-full">
            {children}
        </div>
    );

}

export default ItemListContent;