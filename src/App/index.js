import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import {TodoItem} from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton';
import { useLocalStorage } from './useLocalStorage';
import React from 'react';

// const defaultTodos = [
//   {text: 'Cortar Cebolla', completed: true},
//   {text: 'Tomar el Curso de Intro a React.js', completed: false},
//   {text: 'Llorar con la llorina', completed: false},
//   {text: 'Escuchar la cumbia de la UAM', completed: false},
//   {text: 'Echarte un perreo', completed: false},
//   {text: 'Ir a las posadas', completed: true},
//   {text: 'Comer mucha comida', completed: true}
// ]

// localStorage.setItem("defaultTodos_V1", defaultTodos);

// localStorage.removeItem("defaultTodos_V1");



function App() {
  // const localStorageTodos = localStorage.getItem("defaultTodos_V1");
  // let parseTodos;
  // if(localStorageTodos){
  //   parseTodos = JSON.parse(localStorageTodos);
  // }else{
  //   parseTodos = [];  
  // }
  // const saveTodos = (newTodos) => {
  //   localStorage.setItem("defaultTodos_V1",JSON.stringify(newTodos));
  //   setTodos(newTodos);
  // }

  const [todos, saveTodos] = useLocalStorage("defaultTodos_V1", []);

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


  console.log('Palabra:  '+searchValue)
  console.log(searchedTodos)
  return (
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
  );
}




export default App;
