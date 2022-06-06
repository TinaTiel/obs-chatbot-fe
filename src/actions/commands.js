import commands from '../api/commands';
import { types } from './index';

export const findCommands = () => {
    return async (dispatch) => {
        dispatch({
            type: types.COMMANDS.FIND,
            payload: { loading: true }
        });
        try {
            const {data} = await commands.get('/commands');
            dispatch({
                type: types.COMMANDS.FIND,
                payload: {data}
            })
            
        } catch (error) {
            dispatch({
                type: types.COMMANDS.FIND,
                payload: {error}
            })
        }
    }
}