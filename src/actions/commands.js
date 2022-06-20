import commands from '../api/commands';
import { types } from './index';
import { v4 as uuidv4 } from 'uuid';

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

export const saveCommand = (command) => {
    return async (dispatch) => {
        dispatch({
            type: types.COMMANDS.SAVE,
            payload: { loading: true }
        });
        try {
            const id = command.id? command.id : uuidv4();
            await commands.put(`/commands/${id}`, command);
            dispatch({
                type: types.COMMANDS.SAVE,
                payload: {...command, id}
            })
            
        } catch (error) {
            dispatch({
                type: types.COMMANDS.SAVE,
                payload: {error}
            })
        }
    }
}