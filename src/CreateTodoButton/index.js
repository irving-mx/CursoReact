import './CreateTodoButton.css'
import masIcon from '../icons/masIcon.svg'
function CreateTodoButton(){
    return(
        <button 
            onClick={(event) => { 
            console.log("Le diste click al boton de agregar");
            console.log(event);
            console.log(event.target);
            }}>
            <img src={masIcon} alt='imagen de flecha mas' />
        </button>
    );
}

export { CreateTodoButton };