import {useEffect} from "react";
import ItemListContent from "../common/list/ItemListContent";
import ItemListContainer from "../common/list/ItemListContainer";
import ItemListHeader from "../common/list/ItemListHeader";
import NavigableButton from "../common/button/NavigableButton";
import {findCommands} from '../../actions/commands';
import { useDispatch, useSelector } from "react-redux";
import CommandsListItem from "./CommandsListItem";

const CommandsList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findCommands());
    }, [dispatch]);

    const commandsState = useSelector((state) => state.commandsState);

    const renderItems = () => {
        const {list} = commandsState;
        if(list) {
            return list.map(command => <CommandsListItem 
                    key={command.id} 
                    command={command}
                >{command.name}</CommandsListItem>
            );
        }
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
                {renderItems()}
            </ItemListContent>
        </ItemListContainer>
    );
};

export default CommandsList;