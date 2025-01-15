import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodosError } from '../TodosError';
import { CreateTodoButton } from '../CreateTodoButton';
import React from 'react';

function  AppUI({
    error,
    loading,
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
        {loading && (
        <> 
            <TodosLoading/>
            <TodosLoading/>
            <TodosLoading/> 
        </>
        )}
        {error && <TodosError/>}
        {(!loading && totalTodos === 0) && <EmptyTodos/> }

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