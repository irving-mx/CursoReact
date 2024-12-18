import React from 'react';
import './TodoSearch.css';

function TodoSearch(){
    const [searchValue, setSearchValue] = React.useState('');
    console.log('Palabra:  '+searchValue)
    return(
        <input placeholder="Cortar Cebolla"
        value={searchValue}
        onChange={(event)=> {
            setSearchValue(event.target.value);
        }}
        ></input>
        );
    }

export { TodoSearch };