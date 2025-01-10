import React from 'react';
import { TodoIcon } from './TodoIcon'; 

function CompleteIcon({ accion }){
    return(
        <TodoIcon 
        type="check"
        // color="gray"
        accion={accion}
        />
    );
}

export { CompleteIcon };