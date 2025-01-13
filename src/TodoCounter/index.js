import './TodoCounter.css';
function TodoCounter({completed, total}){
    return(
        <>
            {total === completed ? (
                <h1>
                Felicidades haz completado TODOS  🎉 🎄🎅🎄🎅🎄🎅🎄
                </h1>
            ): (
                <h1>
                Has Completado <b>{completed}</b> de <b>{total}</b> TODOS
                </h1>
            )}
        </>
        );
    }

export { TodoCounter };