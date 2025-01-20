import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }){
    const {item: todos,
            saveItem: saveTodos,
            error,
            loading,
        } = useLocalStorage("defaultTodos_V1", []);
    
    const [openModal, setOpenModal] = React.useState(true);
    const [searchValue, setSearchValue] = React.useState('');
    const completedTodos = todos.filter((todo)=>todo.completed).length;
    const totalTodos = todos.length;
    const searchedTodos = todos.filter(search => search.text.toLowerCase().includes(searchValue.toLowerCase()));
    
    
    const selectTodo = (text) => {
        const newTodos = [...todos];
        console.log("Seleccione: " + text)
        const indexTodos = newTodos.findIndex( todo => todo.text === text); 
        newTodos[indexTodos].completed = true;
        saveTodos(newTodos);
    }
    
    const deleteTodo = (text) => {
        const newTodos = [...todos];
        console.log("Seleccione: " + text)
        const indexTodos = newTodos.findIndex( todo => todo.text === text); 
        newTodos.splice(indexTodos, 1)
        saveTodos(newTodos);
    }
    
return (
    <TodoContext.Provider value={
        {error,
        loading,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        selectTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        }
    }>
        { children }
    </TodoContext.Provider>
)
}

export { TodoContext, TodoProvider };