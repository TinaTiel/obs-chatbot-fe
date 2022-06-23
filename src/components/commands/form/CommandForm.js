import {useForm} from 'react-hook-form';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { saveCommand } from '../../../actions/commands';
import Submit from '../../common/form/SubmitInput';
import TextInput from '../../common/form/TextInput';
import Loading from '../../common/loading/Loading';
import SequenceTypeForm from './sequenceType/SequenceTypeForm';
import ItemListContent from '../../common/list/ItemListContent';
import ItemListContainer from '../../common/list/ItemListContainer';
import ItemListHeader from '../../common/list/ItemListHeader';

const CommandForm = () => {

    const dispatch = useDispatch();
    const commandsState = useSelector(state => state?.commandsState);
    const location = useLocation();
    // const command = location.state?.command || commandsState?.command ;
    const command = {
        "actionSequence": {
            "actions": [
                {
                    "actionType": "sendMessage",
                    "message": "ex non"
                },
                {
                    "actionType": "sendMessage",
                    "message": "ullamco laboris veniam ea"
                },
                {
                    "actionType": "obsSourceVisibility",
                    "sceneName": "Credit",
                    "visible": true,
                    "sourceName": "indexing"
                },
                {
                    "actionType": "obsSourceVisibility",
                    "sourceName": "Sports",
                    "sceneName": "withdrawal",
                    "visible": false
                },
                {
                    "actionType": "wait",
                    "waitTimeout": 21586937,
                    "waitDuration": 24300556
                },
                {
                    "actionType": "wait",
                    "waitTimeout": 88659829,
                    "waitDuration": 31675797
                },
                {
                    "actionType": "wait",
                    "waitTimeout": 86964249,
                    "waitDuration": 56848221
                },
                {
                    "actionType": "executeSequence",
                    "commandId": "521c4b3e-b832-8b63-6686-0c0787ccdb64"
                },
                {
                    "actionType": "sendMessage",
                    "message": "nostrud reprehenderit"
                },
                {
                    "actionType": "obsSourceVisibility",
                    "visible": true,
                    "sourceName": "Rubber",
                    "sceneName": "Seamless"
                }
            ],
            "reverse": true,
            "sequenceType": "inOrder"
        },
        "description": "nisi sed ea sit",
        "id": "e46685a8-0895-be75-c8f0-be618204bd50",
        "name": "Intelligent",
        "owner": "468b4de3-004b-97b7-b393-48913103a1cf",
        "permissions": {
            "groups": [
                "54567195-58ff-34d9-7fd3-472e95a10439",
                "a8dc6d08-32a9-932b-1bd7-2fbf8e175739",
                "cd28f96e-6d58-5718-8ef1-6a9ffbe0cfec"
            ],
            "platforms": {
                "twitch": [
                    {
                        "permission": "FOLLOWER",
                        "minDuration": 32391731
                    },
                    {
                        "permission": "SUBSCRIBER",
                        "minDuration": 69488789
                    }
                ],
                "youtube": [
                    {
                        "permission": "ADMIN",
                        "minDuration": 36456255
                    },
                    {
                        "minDuration": 70807298,
                        "permission": "FOLLOWER"
                    }
                ]
            }
        }
    };

    const form = useForm({
        defaultValues: command
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
                            label="Description of the crap" 
                            name="description"
                            control={form.control} />
                        <SequenceTypeForm 
                            form={form} 
                        />
                        <Submit />
                    </form>
                </Loading>
            </ItemListContent>
        </ItemListContainer>
    )
}

export default CommandForm;