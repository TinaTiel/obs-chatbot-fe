const ItemListContent = ({children}) => {

    return (
        <div className="
            overflow-y-auto
            scrollbar
            px-4 py-4
            text-left
            h-full">
            {children}
        </div>
    );

}

export default ItemListContent;