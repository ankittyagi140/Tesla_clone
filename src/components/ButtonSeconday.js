import React from 'react';
import './ButtonSecondary.css';

const ButtonSecondary=({name,type,onClick})=>{
    return (
        <button className="button_secondary" type={type} onClick={onClick}>{name}</button>
    )
}
export default ButtonSecondary;