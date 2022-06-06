const ItemListHeader = ({children}) => {
    return (
        <header className="
            dark:bg-c-fg-dark md:dark:bg-inherit
            border-b border-fg-light dark:border-fg-dark/25
            md:px-4
            ">
            <div className="
            flex flex-row 
            items-center justify-between 
            py-4">
                {children}
            </div>
        </header>
    )
}

export default ItemListHeader;