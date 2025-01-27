import React from "react";
import './TodoForm.css';
import { TodoAdd } from './TodoAdd'
import { TodoCancel } from './TodoCancel'
import { TodoContext } from "../TodoContext";

function TodoForm(){
    const [task, setTask] = React.useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleChange = (event)=>{
        setTask(event.target.value) 
    }

    const handleAddTodo = ()=>{
        if(task.trim() === ''){
            console.log("El campo esta vacio");
        }else{
            newTodo(task);
            setOpenModal(false)
            setTask('');
        }
    }
    const closeOpenModal = () => {
        setOpenModal(false)
    }
    const {
        setOpenModal,newTodo
    } = React.useContext(TodoContext)
    return(
        <div>
            <form  onSubmit={handleSubmit}>
                <label
                className="label-TODO"
                htmlFor="task">Escribe tu nuevo TODO</label>
                <input
                className="input-TODO"
                type="text"
                id="task"
                value={task}
                onChange={handleChange}
                placeholder="Escribe un nuevo TODO"
                />
            </form>

            <section className="buttons">
                <TodoCancel closeOpenModal={closeOpenModal}/>
                <TodoAdd newTodo={handleAddTodo}/>

            </section>
        </div>
    )
}

export { TodoForm };