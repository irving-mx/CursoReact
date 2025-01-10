import React from 'react';
import { TodoIcon } from './TodoIcon';
function DeleteIcon({ onClick }){
    return(
        <TodoIcon
        type="delete"
        // color="black"
        onClick={onClick}
        />
    );
}

export { DeleteIcon };