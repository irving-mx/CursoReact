import './TodoItem.css';
import checkIcon from './icons/checkIcon.svg';
import deleteIcon from './icons/deleteIcon.svg';

function TodoItem({text, completed}){
    return(
    <li>
        <span className={`check-icon ${completed && "check-icon--active"}`}>
            <img src={checkIcon} alt='icono de aprovado' />
        </span>
        <p className={`text-tarea ${completed && "text-area--complete"}`}>{text}</p>
        <span className='close-icon'>
            <img src={deleteIcon} alt='icono de eliminar' />
        </span>
    </li>
    );
}

export {TodoItem};
