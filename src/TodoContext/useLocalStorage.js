import React from "react";

function useLocalStorage(itemName, initialValue){

    const [item, setItem] = React.useState(initialValue);
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);



    React.useEffect(()=>{
        setTimeout(()=>{
            try{
                const localStorageItem = localStorage.getItem(itemName)
                let parseItem;
                if(localStorageItem){
                    parseItem = JSON.parse(localStorageItem);
                    setItem(parseItem);
                }else{
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parseItem = initialValue;
                }
        
                setLoading(false);
            }
            catch(error){
                setError(true);
                setLoading(false);
            }
        }, 10000) 
    }, );



    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem)
    };

    return {item,
            saveItem,
            error,
            loading};
}

export { useLocalStorage };