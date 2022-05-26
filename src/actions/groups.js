import groups from '../api/groups';
import { types } from './index';

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