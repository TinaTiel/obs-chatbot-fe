import React from "react";
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
                        
                        return <React.Fragment key={field.id} >
                            {index > 0 ? <hr className="dark:border-c-fg-dark border-c-fg-light"/> : null}
                            <ActionTypeForm {...{form, field, prefix, index, remove}} />
                        </React.Fragment>
                    })}
                    {placeholder}
                </div>
            )}
        </Droppable>
    );
}

export default ActionsListForm;