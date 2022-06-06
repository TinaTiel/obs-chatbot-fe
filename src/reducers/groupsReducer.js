import { types } from "../actions"
import _ from 'lodash';

const groupReducer = (state = {}, action) => {
    if(action.payload?.loading || action.payload?.error) {
        return {...action.payload}
    }
    switch(action.type) {
        case types.GROUPS.FIND:
            return {
                list: action.payload.data, 
                map: _.keyBy(action.payload.data, 'id')
            };
        case types.GROUPS.SAVE:
            return {group: {...action.payload}}
        default:
            return state;
    }
}

export default groupReducer;