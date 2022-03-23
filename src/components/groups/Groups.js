import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { findGroups } from '../../actions/groups';
import Button from "../Button";

const Groups = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findGroups());
    }, []);

    const groups = [...Array(25).keys()].map(num => {
        return {
            id: num + 1,
            name: `Group #${num + 1}`,
            description: `Some description for group #${num + 1}`
        }
    });
    //const groups = useSelector((state) => state.groups);

    const renderCreate = () => {
        return (
            <div className="flex flex-row gap-x-4">
                <Button text="Create Group" location="#" />
            </div>
        );
    }

    const renderAdmin = () => {
        return (
            <div className="flex flex-row gap-x-4 justify-start">
                <Button text="Edit" location="#" />
                <Button text="Delete" location="#" />
            </div>
        )
    }

    const renderGroups = (groups) => {
        if(!groups) {
            return (
                <div className="ui active inverted dimmer">
                    <div className="ui text loader">Loading</div>
                </div>
            )
        }
        return Object.values(groups).map(group => (
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
                    {renderAdmin()}
                </div>
            </div>
        ));
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
            text-left">
                {renderGroups(groups)}
            </div>
        </article>
    );
};

export default Groups;