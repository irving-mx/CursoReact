import './CreateTodoButton.css'
import masIcon from './icons/masIcon.svg'
function CreateTodoButton(){
    return(
        <button>
            <img src={masIcon} alt='imagen de flecha mas' />
        </button>
    );
}

export { CreateTodoButton };