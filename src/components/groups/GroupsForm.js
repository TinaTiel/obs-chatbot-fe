import {useForm} from 'react-hook-form';
import { useLocation } from 'react-router';
import Submit from '../common/form/SubmitInput';
import TextInput from '../common/form/TextInput';
import Loading from '../common/loading/Loading';
import ItemListContainer from '../common/list/ItemListContainer';
import ItemListContent from '../common/list/ItemListContent';
import { useSaveGroupMutation } from '../../services/groups';

const GroupsForm = () => {

    const location = useLocation();
    const [saveGroup, {data, error, isLoading}] = useSaveGroupMutation();

    let group = location.state?.group || data;

    const { control, handleSubmit, getValues } = useForm({
        defaultValues: group
    });

    const onSubmit = (group) => {
        console.log({group})
        saveGroup({id: group?.id, group});
    }

    const onKeyDown = (e) => {
        if(e.keyCode===13 && e.ctrlKey) {
            onSubmit(getValues());
        }
    }

    const title = group ? `Edit Group '${group.name}'` : "Create Group"

    return (
        <ItemListContainer>
            <ItemListContent>
                <Loading loading={isLoading}>
                    <h1>{title}</h1>
                    <form onSubmit={handleSubmit(onSubmit)} onKeyDown={onKeyDown} >
                        <TextInput
                            label="Name"
                            name='name'
                            control={control} />
                        <TextInput textArea
                            label="Description" 
                            name="description"
                            control={control} />
                        <Submit />
                    </form>
                </Loading>
            </ItemListContent>
        </ItemListContainer>
    )
}

export default GroupsForm;