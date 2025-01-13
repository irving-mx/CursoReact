import React from "react";

function useLocalStorage(itemName, initialValue){
    const localStorageItem = localStorage.getItem(itemName)
    let parseItem;
    if(localStorageItem){
        parseItem = JSON.parse(localStorageItem);
    }else{
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parseItem = initialValue;
    }

    const [item, setItem] = React.useState(parseItem);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem)
    };

    return [item, saveItem];
}

export { useLocalStorage };