import {useForm} from 'react-hook-form';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { saveGroup } from '../../actions/groups';
import Submit from '../common/form/SubmitInput';
import TextInput from '../common/form/TextInput';
import Loading from '../common/loading/Loading';

const GroupsForm = () => {

    const dispatch = useDispatch();
    const groupsState = useSelector(state => state?.groupsState);
    const location = useLocation();
    const group = location.state?.group || groupsState?.group ;

    const { register, handleSubmit, getValues } = useForm({
        defaultValues: group
    });

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
            <Loading loading={groupsState?.loading}>
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
            </Loading>
        </div>
    )
}

export default GroupsForm;