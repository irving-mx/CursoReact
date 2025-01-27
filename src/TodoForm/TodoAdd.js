import React from 'react';
import './TodoAdd.css'

function TodoAdd({newTodo}){
return(
    <button className='TodoAdd' onClick={newTodo}>Añadir</button>
)
}

export { TodoAdd };