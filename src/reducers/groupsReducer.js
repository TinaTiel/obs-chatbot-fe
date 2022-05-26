import { types } from "../actions"
import _ from 'lodash';

const groupReducer = (state = {}, action) => {
    if(action.payload?.loading || action.payload?.error) {
        return {...action.payload}
    }
    switch(action.type) {
        case types.FIND_GROUPS:
            return {
                list: action.payload.data, 
                map: _.keyBy(action.payload.data, 'id')
            };
        default:
            return state;
    }
}

export default groupReducer;