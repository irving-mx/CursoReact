import { AppUI } from './AppUI'
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
      <AppUI
      
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        selectTodo={selectTodo}
        deleteTodo={deleteTodo}
    />
  );
}




export default App;
