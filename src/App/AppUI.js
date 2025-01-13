import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import {TodoItem} from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton';
import React from 'react';

function  AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    selectTodo,
    deleteTodo,
}){
    return(

        <React.Fragment>
        <TodoCounter completed={completedTodos} total={totalTodos}  />

        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

        <TodoList>
        {searchedTodos.map((todo,index) => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}  
            onCompleted={ () => selectTodo(todo.text)} 
            onDeleted={ () => deleteTodo(todo.text)}
            />
        ))}
        </TodoList>

        <CreateTodoButton/>
        </React.Fragment>
        )
}

export { AppUI };