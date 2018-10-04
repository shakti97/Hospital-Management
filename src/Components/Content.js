import React from 'react';
import {MenuBar} from './MenuBar.js';
import {MainContent} from './MainContent.js';

export const Content=(props)=>{
    return (
            <div >
                <div className="row">
                    <MenuBar className='col-md-3'/>
                    <MainContent className='col-md-9'  handlerInput={props.handlerInput}  addPatient={props.addPatient} />
                </div>
            </div>
        )
}

