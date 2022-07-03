import {useForm} from 'react-hook-form';
// import { useLocation } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { saveCommand } from '../../../actions/commands';
import Submit from '../../common/form/SubmitInput';
import TextInput from '../../common/form/TextInput';
import Loading from '../../common/loading/Loading';
import SequenceTypeForm from './sequenceType/SequenceTypeForm';
import ItemListContent from '../../common/list/ItemListContent';
import ItemListContainer from '../../common/list/ItemListContainer';

const CommandForm = () => {

    const dispatch = useDispatch();
    const commandsState = useSelector(state => state?.commandsState);
    // const location = useLocation();
    // const command = location.state?.command || commandsState?.command ;
    const command = {
        "actionSequence": {
            "actions": [],
            "options": {
                
            },
            "sequenceType": "randomOrder"
        },
        "description": "nisi sed ea sit",
        "id": "e46685a8-0895-be75-c8f0-be618204bd50",
        "name": "Intelligent",
        "owner": "468b4de3-004b-97b7-b393-48913103a1cf",
        "permissions": {
            "groups": [],
            "platforms": {
                "twitch": [],
                "youtube": []
            }
        }
    };

    const form = useForm({
        // defaultValues: command, 
        shouldUnregister: true
    });

    const onSubmit = (command) => {
        console.log(command)
        dispatch(saveCommand(command));
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
                <Loading loading={commandsState?.loading}>
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
                        <SequenceTypeForm 
                            form={form} 
                        />
                        <br />
                        <Submit />
                    </form>
                </Loading>
            </ItemListContent>
        </ItemListContainer>
    )
}

export default CommandForm;