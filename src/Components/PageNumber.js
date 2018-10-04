import React from 'react';

export const PageNumber=(props)=>{
    return(
    map(number=>{
        return(
            <li id={number} onClick={props.handlePage}>{number}</li>
        )
    })
    )
}