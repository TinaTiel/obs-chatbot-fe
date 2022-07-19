import ItemListContent from "../common/list/ItemListContent";
import ItemListContainer from "../common/list/ItemListContainer";
import ItemListHeader from "../common/list/ItemListHeader";
import NavigableButton from "../common/button/NavigableButton";
import Loading from "../common/loading/Loading";
import CommandsListItem from "./CommandsListItem";
import { useFindAllCommandsQuery } from "../../services/commands";

const CommandsList = () => {

    const {data, error, isLoading} = useFindAllCommandsQuery();

    const renderItems = () => {
        
        return data?.map(command => 
            <CommandsListItem 
                key={command.id} 
                command={command}
            />
        );
        
    }

    return (
        <ItemListContainer>
            <ItemListHeader>
                <div>
                    <h2 className="text-2xl md:text-4xl">
                        Commands
                    </h2>
                </div>
                <div>
                    <div className="flex flex-row gap-x-4">
                        <NavigableButton text="Create Command" to="/commands/create" />
                    </div>
                </div>
            </ItemListHeader>
            <ItemListContent>
                <Loading loading={isLoading}>
                    {renderItems()}
                </Loading>
            </ItemListContent>
        </ItemListContainer>
    );
};

export default CommandsList;