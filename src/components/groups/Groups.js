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

    const groups = useSelector((state) => state.groups);

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
            <div key={group.id} className='flex flex-row justify-between items-center
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
        <>
            <div className="border-b border-fg-light dark:border-fg-dark/25">
                <div className="flex flex-row items-center justify-between py-4">
                    <div>
                        <h2 className="text-2xl md:text-4xl">
                            Groups
                        </h2>
                    </div>
                    <div>
                        {renderCreate()}
                    </div>
                </div>
            </div>
            <div className="flex flex-col divide-y text-left">
                
                    {renderGroups(groups)}
            
            </div>
        </>
    );
};

export default Groups;