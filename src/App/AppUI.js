import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodosError } from '../TodosError';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { TodoCounterLoading} from '../TodoCounterLoading';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import React from 'react';

function  AppUI(
//     {
//     error,
//     loading,
//     completedTodos,
//     totalTodos,
//     searchValue,
//     setSearchValue,
//     searchedTodos,
//     selectTodo,
//     deleteTodo,
// }

){
    const {
        loading,
        error,
        searchedTodos,
        selectTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return(

        <React.Fragment>
            {loading && <TodoCounterLoading />}
            {!loading && (
                <>
                    <TodoCounter />
                    <TodoSearch />
                </>
            )}
            
            { 
                <TodoList>
                {loading && (
                <> 
                    <TodosLoading/>
                    <TodosLoading/>
                    <TodosLoading/>
                </>
                )}
                {error && <TodosError/>}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos/> }
        
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
                }
            

            {/* <TodoList>
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
            </TodoList> */}

            <CreateTodoButton setOpenModal={setOpenModal} />

            {
                openModal && (
                    <Modal>
                        <TodoForm/>
                    </Modal>
                )
            }
        </React.Fragment>
        );
}

export { AppUI };