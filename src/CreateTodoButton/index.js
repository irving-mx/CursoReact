import './CreateTodoButton.css'
import masIcon from '../icons/masIcon.svg'
// import { TodoContext } from '../TodoContext';
import React from 'react';
function CreateTodoButton( {setOpenModal} ){

    return(
        <button 
            onClick={(event) => { 
            console.log("Le diste click al boton de agregar");
            console.log(event);
            console.log(event.target);
            setOpenModal(state => !state);
            }}>
            <img src={masIcon} alt='imagen de flecha mas' />
        </button>
    );
}

export { CreateTodoButton };