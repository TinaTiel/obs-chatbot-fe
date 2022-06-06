import NavigableButton from "../common/button/NavigableButton";
import ItemListItem from "../common/list/ItemListItem";
import Condition from "../common/util/Condition";

const CommandsListItem = ({command}) => {

    return (
        <ItemListItem>
            <article className="
            dark:text-c-text-secondary-dark
            flex flex-col md:items-start items-center gap-4">
                <h1 className="text-2xl">{command.name}</h1>
                <p className="italic text-m">{command.description}</p>
            </article>
            <div>
                <div className="flex flex-row gap-x-4 justify-start">
                    <NavigableButton text="Edit" to={`/commands/edit/${command.id}`} options={{state: {command}}} callToAction />
                    <NavigableButton text="Delete" to="#" />
                </div>
            </div>
        </ItemListItem>
    );
}

export default CommandsListItem;