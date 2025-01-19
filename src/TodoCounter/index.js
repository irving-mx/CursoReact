import React from 'react';
import './TodoCounter.css';
import { TodoContext} from '../TodoContext'
function TodoCounter(){
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);
    return(
        <>
            {totalTodos === completedTodos ? (
                <h1>
                Felicidades haz completado TODOS  🎉 🎄🎅🎄🎅🎄🎅🎄
                </h1>
            ): (
                <h1>
                Has Completado <b>{completedTodos}</b> de <b>{totalTodos}</b> TODOS
                </h1>
            )}
        </>
        );
    }

export { TodoCounter };