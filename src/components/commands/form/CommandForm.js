import {useForm} from 'react-hook-form';
import Submit from '../../common/form/SubmitInput';
import TextInput from '../../common/form/TextInput';
import Loading from '../../common/loading/Loading';
import SequenceTypeForm from './sequenceType/SequenceTypeForm';
import ItemListContent from '../../common/list/ItemListContent';
import ItemListContainer from '../../common/list/ItemListContainer';
import ActionsForm from './action/ActionsForm';
import { useLocation } from 'react-router';
import { useSaveCommandMutation } from '../../../services/commands';

const CommandForm = () => {

    const location = useLocation();
    const [saveCommand, {data, error, isLoading}] = useSaveCommandMutation();

    const command = location.state?.command || data;

    const form = useForm({
        defaultValues: command, 
        shouldUnregister: true
    });

    const onSubmit = (command) => {
        console.log(command)
        saveCommand({id: command?.id, command})
    }

    const onKeyDown = (e) => {
        if(e.keyCode===13 && e.ctrlKey) {
            onSubmit(form.getValues());
        }
    }

    const title = command ? `Edit Command '${command.name}'` : "Create Command"

    return (
        <ItemListContainer>
            <ItemListContent>
                <Loading loading={isLoading}>
                    <h2 className="text-2xl md:text-4xl">
                        {title}
                    </h2>
                    <form onSubmit={form.handleSubmit(onSubmit)} onKeyDown={onKeyDown} >
                        <TextInput
                            label="Name"
                            name="name"
                            control={form.control}
                        />
                        <TextInput textArea
                            label="Description" 
                            name="description"
                            control={form.control} />
                        <SequenceTypeForm {...{form}} />
                        <ActionsForm {...{form}} />
                        <br />
                        <Submit />
                    </form>
                </Loading>
            </ItemListContent>
        </ItemListContainer>
    )
}

export default CommandForm;