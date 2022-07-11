import { Droppable, Draggable } from "react-beautiful-dnd";
import ActionTypeForm from "./ActionTypeForm";

const ActionsListForm = ({fieldArray, form, prefix}) => {

    const {fields, remove} = fieldArray;

    return (
        <Droppable droppableId="actions">
            {({droppableProps, innerRef, placeholder}, snapshot) => (
                <div 
                    ref={innerRef}
                    {...droppableProps}
                >
                    {fields.map((field, index) => 
                        <ActionTypeForm key={field.id} {...{form, field, prefix, index, remove}} />
                    )}
                    {placeholder}
                </div>
            )}
        </Droppable>
    );
}

export default ActionsListForm;