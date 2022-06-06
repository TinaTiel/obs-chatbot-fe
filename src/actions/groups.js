import groups from '../api/groups';
import { types } from './index';
import { v4 as uuidv4 } from 'uuid';

export const findGroups = () => {
    return async (dispatch) => {
        dispatch({
            type: types.GROUPS.FIND,
            payload: { loading: true }
        });
        try {
            const {data} = await groups.get('/groups');
            dispatch({
                type: types.GROUPS.FIND,
                payload: {data}
            })
            
        } catch (error) {
            dispatch({
                type: types.GROUPS.FIND,
                payload: {error}
            })
        }
    }
}

export const saveGroup = (group) => {
    return async (dispatch) => {
        dispatch({
            type: types.GROUPS.SAVE,
            payload: { loading: true }
        });
        try {
            const id = group.id? group.id : uuidv4();
            await groups.put(`/groups/${id}`, group);
            dispatch({
                type: types.GROUPS.SAVE,
                payload: {...group, id}
            })
            
        } catch (error) {
            dispatch({
                type: types.GROUPS.SAVE,
                payload: {error}
            })
        }
    }
}