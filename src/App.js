import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import {TodoItem} from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar el Curso de Intro a React.js', completed: false},
  {text: 'Llorar con la llorina', completed: false},
  {text: 'Escuchar la cumbia de la UAM', completed: false},
  {text: 'Echarte un perreo', completed: false}
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed="8" total="100"/>

      <TodoSearch />

      <TodoList>
      {defaultTodos.map((todo,index) => (
        <TodoItem key={index} text={todo.text} completed={todo.completed} />
      ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}




export default App;
