import SelectInput from "../../../common/form/SelectInput";
import SendMessageForm from "./chat/SendMessageForm";
import ObsSourceVisibilityForm from "./obs/ObsSourceVisibilityForm";
import WaitForm from "./system/WaitForm";
import ExecuteSequenceForm from "./system/ExecuteSequenceForm";
import Button from "../../../common/button/Button";
import { Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const ActionTypeForm = ({form, field, prefix, index, remove}) => {

    const {control, watch} = form;
    const name = `${prefix}.${index}`;

    const actionType = watch(`${name}.actionType`);

    const onRemoveAction = (e, index) => {
        console.log({e, index})
        e.preventDefault();
        remove(index);
    }

    const actionTypes = {
        sendMessage: {
            label: "Send Chat Message",
            form: <SendMessageForm {...{prefix: name, control}} />
        },
        obsSourceVisibility: {
            label: "Show/Hide Source",
            form: <ObsSourceVisibilityForm {...{prefix: name, control, watch}} />
        },
        wait: {
            label: "Wait",
            form: <WaitForm {...{prefix: name, control}} />
        },
        executeSequence: {
            label: "Execute Command",
            form: <ExecuteSequenceForm {...{prefix: name, control}} />
        }
    }

    const renderFormByType = () => {
        if(actionType) {
            return actionTypes[actionType].form;
        }
    }

    const options = Object.keys(actionTypes).map(key => {
        return {value: key, label: actionTypes[key].label};
    })

    return (
        <Draggable
            draggableId={field.id}
            index={index}
        >
            {({draggableProps, dragHandleProps, innerRef}, snapshot) => ( 
                <div
                    {...draggableProps}
                    ref={innerRef}
                    className="
                        flex w-100
                        py-3   
                        gap-2
                    "
                >
                    <div 
                        {...dragHandleProps}
                        className="
                            flex items-center
                            pr-2
                            text-xl
                            border-r dark:border-c-fg-dark border-c-fg-light"
                    >
                        <FontAwesomeIcon icon={faBars} size='xl' />
                    </div>
                    <div className="grow">
                        <div className="w-100">
                            <SelectInput 
                                name={`${name}.actionType`}
                                label="Action Type"
                                options={options}
                                control={control}
                            />
                            <div className="pl-4">
                                {renderFormByType()}
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button 
                            className="
                                h-min
                                dark:border-c-fg-dark border-c-fg-light

                            "
                            onClick={e => onRemoveAction(e, index)}
                        >
                            <FontAwesomeIcon icon={faXmark} size='lg' />
                        </Button>
                    </div>
                </div>
            )}
        </Draggable>
    );
}

export default ActionTypeForm;