import React from 'react';
import './TodoCancel.css'

function TodoCancel({closeOpenModal}){
    return(
        <button className='TodoCancel' onClick={closeOpenModal}>Cancelar</button>
    )
}

export { TodoCancel };