import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { findGroups } from '../../actions/groups';

const Groups = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findGroups());
    }, []);

    const groups = useSelector((state) => state.groups);

    const renderCreate = () => {
        return (
            <div className="ui right floated">
                <button className="ui button primary">Create...</button>
            </div>
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
            <div className="ui clearing">
                <div className="content">
                    <div className="header">
                        <h2>Groups</h2>
                    </div>
                    <div className="description">
                        Manage groups here
                    </div>
                </div>
                {renderCreate()}
            </div>
            <div className="ui celled list">
                {renderGroups(groups)}
            </div>
        </div>
    );
};

export default Groups;