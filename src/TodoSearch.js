import './TodoSearch.css';
function TodoSearch(){
    return(
        <input placeholder="Cortar Cebolla"
        onChange={(event)=> {
            console.log(event.target.value);
        }}
        ></input>
        );
    }

export { TodoSearch };