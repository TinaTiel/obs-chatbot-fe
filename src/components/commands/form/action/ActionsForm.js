import InputGroup from "../../../common/form/InputGroup";
import { useFieldArray } from "react-hook-form";
import Button from "../../../common/button/Button";
import { DragDropContext } from "react-beautiful-dnd";
import ActionsListForm from "./ActionsListForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

const ActionsForm = ({form}) => {

    const prefix = 'actionSequence.actions';

    const {control} = form;
    const fieldArray = useFieldArray({
        control,
        name: prefix
    });

    const onAddAction = (e) => {
        e.preventDefault();
        fieldArray.append({});
    }

    const onDragEnd = (result) => {
        const {source, destination} = result;
        if(source && destination) {
            if(source.index === destination.index) {
                return;
            } else {
                fieldArray.move(source.index, destination.index);
            }
        }
    }

    return (
        <InputGroup name="Actions">
            <DragDropContext onDragEnd={onDragEnd}>
                <ActionsListForm {...{fieldArray, form, prefix}} />
            </DragDropContext>
            <Button className="block w-full
                border-dashed dark:border-c-fg-dark border-c-fg-light
                flex justify-center gap-2
            "
                onClick={onAddAction}><FontAwesomeIcon icon={faSquarePlus} size='xl' /><span>Add Actions</span></Button>
        </InputGroup>
    );
}

export default ActionsForm;