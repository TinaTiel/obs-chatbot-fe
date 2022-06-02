import groups from '../api/groups';
import { types } from './index';
import { v4 as uuidv4 } from 'uuid';

export const findGroups = () => {
    return async (dispatch) => {
        dispatch({
            type: types.FIND_GROUPS,
            payload: { loading: true }
        });
        try {
            const {data} = await groups.get('/groups');
            dispatch({
                type: types.FIND_GROUPS,
                payload: {data}
            })
            
        } catch (error) {
            dispatch({
                type: types.FIND_GROUPS,
                payload: {error}
            })
        }
    }
}

export const saveGroup = (group) => {
    return async (dispatch) => {
        dispatch({
            type: types.SAVE_GROUP,
            payload: { loading: true }
        });
        try {

            const id = group.id? group.id : uuidv4();
            const {data} = await groups.put(`/groups/${id}`, group);
            dispatch({
                type: types.SAVE_GROUP,
                payload: {data}
            })
            
        } catch (error) {
            dispatch({
                type: types.SAVE_GROUP,
                payload: {error}
            })
        }
    }
}