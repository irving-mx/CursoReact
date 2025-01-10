import React from 'react';
import { TodoIcon } from './TodoIcon'; 

function CompleteIcon({ onClick }){
    return(
        <TodoIcon 
        type="check"
        // color="gray"
        onClick={onClick}
        />
    );
}

export { CompleteIcon };