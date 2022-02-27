import groups from '../api/groups';
import { types } from './index';

export const findGroups = () => {
    return async (dispatch) => {
        const {data} = await groups.get('/groups');
        dispatch({
            type: types.FIND_GROUPS,
            payload: data
        })
    }
}