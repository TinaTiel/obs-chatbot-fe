import InputGroup from "../../../common/form/InputGroup";
import { useFieldArray } from "react-hook-form";
import Button from "../../../common/button/Button";
import { DragDropContext } from "react-beautiful-dnd";
import ActionsListForm from "./ActionsListForm";

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
        fieldArray.move(source.index, destination.index);
    }

    return (
        <InputGroup name="Actions">
            <DragDropContext onDragEnd={onDragEnd}>
                <ActionsListForm {...{fieldArray, form, prefix}} />
            </DragDropContext>
            <Button callToAction onClick={onAddAction}>Add Action</Button>
        </InputGroup>
    );
}

export default ActionsForm;