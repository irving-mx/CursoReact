import React from 'react';
import { ReactComponent as DeleteSVG } from './icons/deleteIcon.svg';
import { ReactComponent as CheckSVG } from './icons/checkIcon.svg';
import './TodoIcon.css';
const iconTypes = {
    "check" : <CheckSVG />,
    "delete" : <DeleteSVG />,
}

function TodoIcon({ type, accion }){
    return(
        <span className={`icon-${type}`}  onClick={accion}>
            {iconTypes[type]}
        </span>
    );
}

export { TodoIcon };