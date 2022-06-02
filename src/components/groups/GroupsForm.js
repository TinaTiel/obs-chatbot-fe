import {useForm} from 'react-hook-form';
import { useLocation } from 'react-router';
import { useDispatch } from "react-redux";
import { saveGroup } from '../../actions/groups';
import Submit from '../common/SubmitInput';
import TextInput from '../common/TextInput';

const GroupsForm = () => {

    const {state: group} = useLocation();
    const { register, handleSubmit, getValues } = useForm({defaultValues: group});
    const dispatch = useDispatch();

    const onSubmit = (group) => {
        dispatch(saveGroup(group));
    }

    const onKeyDown = (e) => {
        if(e.keyCode===13 && e.ctrlKey) {
            onSubmit(getValues());
        }
    }

    const title = group ? `Edit Group '${group.name}'` : "Create Group"

    return (
        <div className='p-5'>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit(onSubmit)} onKeyDown={onKeyDown} >
                <TextInput
                    label="Name" 
                    register={register("name")} />
                <TextInput textArea
                    label="Description" 
                    register={register("description")} />
                <Submit />
            </form>
        </div>
    )
}

export default GroupsForm;