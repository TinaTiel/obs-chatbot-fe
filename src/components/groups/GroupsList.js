import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { findGroups } from '../../actions/groups';
import NavigableButton from "../common/button/NavigableButton";
import ItemListContent from "../common/list/ItemListContent";
import ItemListContainer from "../common/list/ItemListContainer";
import Loading from "../common/loading/Loading";
import GroupsListItem from "./GroupsListItem";
import ItemListHeader from "../common/list/ItemListHeader";

const GroupsList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findGroups());
    }, [dispatch]);

    const groupsState = useSelector((state) => state.groupsState);

    const renderItems = () => {
        const {list} = groupsState;
        if(list) {
            return list.map(group => <GroupsListItem 
                    key={group.id} 
                    group={group} 
                />
            );
        }
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
                <Loading loading={groupsState.loading}>
                    {renderItems()}
                </Loading>
            </ItemListContent>
        </ItemListContainer>
    );
};

export default GroupsList;