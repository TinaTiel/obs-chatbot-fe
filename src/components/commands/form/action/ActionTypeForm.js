import SelectInput from "../../../common/form/SelectInput";
import SendMessageForm from "./chat/SendMessageForm";
import ObsSourceVisibilityForm from "./obs/ObsSourceVisibilityForm";
import WaitForm from "./system/WaitForm";
import ExecuteSequenceForm from "./system/ExecuteSequenceForm";
import Button from "../../../common/button/Button";
import { Draggable } from "react-beautiful-dnd";

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
            form: <SendMessageForm {...{control}} />
        },
        obsSourceVisibility: {
            label: "Show/Hide Source",
            form: <ObsSourceVisibilityForm {...{control}} />
        },
        wait: {
            label: "Wait",
            form: <WaitForm {...{control}} />
        },
        executeSequence: {
            label: "Execute Command",
            form: <ExecuteSequenceForm {...{control}} />
        }
    }

    const renderFormByType = () => {
        if(actionType) {
            return actionTypes[actionType].form;
        } else {
            return <div>Unknown Action Type! Contact the Developer</div>
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
                    className="flex w-100
                        my-2
                        gap-2
                    "
                >
                    <div 
                    {...dragHandleProps}
                        className="
                            text-xl
                            border-r dark:border-c-fg-dark border-c-fg-light"
                        >
                        Drag Me
                    </div>
                    <div>
                    <div>
                        {field.id}
                        <SelectInput 
                            name={`${name}.actionType`}
                            label="Action Type"
                            options={options}
                            control={control}
                        />
                        {renderFormByType()}
                    </div>
                    </div>
                    <div>
                        <Button callToAction onClick={e => onRemoveAction(e, index)}>X</Button>
                    </div>
                </div>
            )}
        </Draggable>
    );
}

export default ActionTypeForm;