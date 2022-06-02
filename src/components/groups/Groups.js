import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { findGroups } from '../../actions/groups';
import NavigableButton from "../common/NavigableButton";
import Loading from "../common/Loading";

const Groups = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findGroups());
    }, [dispatch]);

    const groupState = useSelector((state) => state.groupState);

    const renderCreate = () => {
        return (
            <div className="flex flex-row gap-x-4">
                <NavigableButton text="Create Group" to="/groups/create" />
            </div>
        );
    }

    const renderAdmin = (group) => {
        return (
            <div className="flex flex-row gap-x-4 justify-start">
                <NavigableButton text="Edit" to={`/groups/edit/${group.id}`} options={{state: {group}}} callToAction />
                <NavigableButton text="Delete" to="#" />
            </div>
        )
    }

    const renderGroups = (groups) => {
        if(groups) {
            return groups.map(group => (
                <div key={group.id} className='
                flex flex-row justify-between items-center
                dark:hover:bg-c-fg-dark hover:bg-c-fg-light
                py-4 px-2'>
                    <article className="
                    dark:text-c-text-secondary-dark
                    flex flex-col md:items-start items-center gap-4">
                        <h1 className="text-2xl">{group.name}</h1>
                        <p className="italic text-m">{group.description}</p>
                    </article>
                    <div>
                        {renderAdmin(group)}
                    </div>
                </div>
            ));
        }
        
    }

    return (
        <article className="
        h-full min-h-0
        w-full min-w-0
        flex flex-col">
            <header className="
            dark:bg-c-fg-dark md:dark:bg-inherit
            border-b border-fg-light dark:border-fg-dark/25
            md:px-4
            ">
                <div className="
                flex flex-row 
                items-center justify-between 
                py-4">
                    <div>
                        <h2 className="text-2xl md:text-4xl">
                            Groups
                        </h2>
                    </div>
                    <div>
                        {renderCreate()}
                    </div>
                </div>
            </header>
            <div className="
            overflow-y-scroll
            scrollbar
            px-2 py-2
            text-left
            h-full">
                <Loading loading={groupState.loading}>
                    {renderGroups(groupState.list)}
                </Loading>
            </div>
        </article>
    );
};

export default Groups;