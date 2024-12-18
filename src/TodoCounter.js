import './TodoCounter.css';
function TodoCounter({completed, total}){
    return(
        <h1>
        Has Completado <b>{completed}</b> de <b>{total}</b> TODOS
        </h1>
        );
    }

export { TodoCounter };