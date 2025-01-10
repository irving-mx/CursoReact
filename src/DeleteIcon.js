import React from 'react';
import { TodoIcon } from './TodoIcon';
function DeleteIcon({ accion }){
    return(
        <TodoIcon
        type="delete"
        // color="black"
        accion={accion}
        />
    );
}

export { DeleteIcon };