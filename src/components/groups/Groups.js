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
            <>
                <Button text="New Group..." location="#" />
            </>
        );
    }

    const renderAdmin = () => {
        return (
            <div className="right floated content">
                <button className="ui button primary">Edit</button>
                <button className="ui button red">Delete</button>
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
            <div key={group.id} className='item'>
                {renderAdmin()}
                <div className="content">
                    <div className="header">{group.name}</div>
                    <div className="description">{group.description}</div>
                </div>
            </div>
        ));
    }

    return (
        <div>
            <div className="flex flex-row items-center">
                <div className="grow">
                    <h2 className="text-4xl">
                        Groups
                    </h2>
                    <h3 className="dark:text-c-text-secondary-dark italic">
                        Groups allow you to grant command permissions to one or many viewers.
                    </h3>
                </div>
                <div className="">
                    {renderCreate()}
                </div>
            </div>
            <div className="">
                {renderGroups(groups)}
            </div>
        </div>
    );
};

export default Groups;