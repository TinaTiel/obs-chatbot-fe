import NavigableButton from "../common/button/NavigableButton";
import ItemListItem from "../common/list/ItemListItem";

const GroupsListItem = ({group}) => {

    return (
        <ItemListItem>
            <article className="
            dark:text-c-text-secondary-dark
            flex flex-col md:items-start items-center gap-4">
                <h1 className="text-2xl">{group.name}</h1>
                <p className="italic text-m">{group.description}</p>
            </article>
            <div>
                <div className="flex flex-row gap-x-4 justify-start">
                    <NavigableButton text="Edit" to={`/groups/edit/${group.id}`} options={{state: {group}}} callToAction />
                    <NavigableButton text="Delete" to="#" />
                </div>
            </div>
        </ItemListItem>
    );
}

export default GroupsListItem;