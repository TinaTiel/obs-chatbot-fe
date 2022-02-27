import { types } from "../actions"
import _ from 'lodash';

export default (state = {}, action) => {
    switch(action.type) {
        case types.FIND_GROUPS:
            return {...state, ..._.keyBy(action.payload, 'id')}
        default:
            return state;
    }
}