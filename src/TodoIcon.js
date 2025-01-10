import React from 'react';
import { ReactComponent as DeleteSVG } from './icons/deleteIcon.svg';
import { ReactComponent as CheckSVG } from './icons/checkIcon.svg';
import './TodoIcon.css';
const iconTypes = {
    "check" : <CheckSVG />,
    "delete" : <DeleteSVG />,
}

function TodoIcon({ type, onClick }){
    return(
        <span className={`icon-${type}`}  onClick={onClick}>
            {iconTypes[type]}
        </span>
    );
}

export { TodoIcon };