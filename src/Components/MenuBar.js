import React,{Component} from 'react';
import {Link} from "react-router-dom"; 
import '../CSS/DashBoard.css';

//This section contains the MenuBar of the DashBoard
export class MenuBar extends Component{
    render(){
        return (
            <div className='MenuBar' >
            <section className='container' >
                <h3>DashBoard</h3>
                <ul >
                    <li>
                        <Link to='/ '><strong className='white'>HomePage</strong></Link>
                    </li>
                    <li>
                        <Link to='/AddPatient'><strong className='white'>AddPatients</strong></Link>
                    </li>
                    <li>
                        <Link to='/PatientDetails'><strong className='white'>PatientDetails</strong></Link>
                    </li>
                </ul>
            </section>
            </div>
        )
    }
} 