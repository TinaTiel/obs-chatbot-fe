import { Droppable } from "react-beautiful-dnd";
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
                    {fields.map((field, index) => {
                        
                        return <>
                            {index > 0 ? <hr className="dark:border-c-fg-dark border-c-fg-light"/> : null}
                            <ActionTypeForm key={field.id} {...{form, field, prefix, index, remove}} />
                        </>
                    })}
                    {placeholder}
                </div>
            )}
        </Droppable>
    );
}

export default ActionsListForm;