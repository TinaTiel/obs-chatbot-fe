import { useFindAllGroupsQuery } from "../../services/groups";
import NavigableButton from "../common/button/NavigableButton";
import ItemListContent from "../common/list/ItemListContent";
import ItemListContainer from "../common/list/ItemListContainer";
import Loading from "../common/loading/Loading";
import GroupsListItem from "./GroupsListItem";
import ItemListHeader from "../common/list/ItemListHeader";

const GroupsList = () => {

    const {data, error, isLoading} = useFindAllGroupsQuery();

    const renderItems = () => {
        return data?.map(group => 
            <GroupsListItem 
                key={group.id} 
                group={group} 
            />
        );
    }

    return (
        <ItemListContainer>
            <ItemListHeader>
                <div>
                    <h2 className="text-2xl md:text-4xl">
                        Groups
                    </h2>
                </div>
                <div>
                    <div className="flex flex-row gap-x-4">
                        <NavigableButton text="Create Group" to="/groups/create" />
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

export default GroupsList;