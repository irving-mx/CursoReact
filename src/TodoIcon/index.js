import React from 'react';
import { ReactComponent as DeleteSVG } from '../icons/deleteIcon.svg';
import { ReactComponent as CheckSVG } from '../icons/checkIcon.svg';
import './TodoIcon.css';
const iconTypes = {
    "check" :(color) => <CheckSVG  fill={color} />,
    "delete":(color) =>  <DeleteSVG className='Icon-svg' fill={color} />,
}

function TodoIcon({ type, color ,onClick }){
    return(
        <span className={`icon-${type}`}  onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };