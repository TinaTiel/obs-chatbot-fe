import { combineReducers } from "redux";
import commandsReducer from "./commandsReducer";
import groupsReducer from "./groupsReducer";

export default combineReducers({
    groupsState: groupsReducer,
    commandsState: commandsReducer
});