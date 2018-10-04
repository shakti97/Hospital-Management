import React,{Component} from 'react';
import '../CSS/Home.css'

//This is Home Component DashBoard of the Application
export class HomePage extends Component{
    render(){
        return (
            <div >
              <img 
              className='dashBoard' src="//gccontent.blob.core.windows.net/gccontent/blogs/legacy/wijmo/2016/11/01_DynamicDashboard.png" alt="DashBoard"/>
            </div>
        )
    }
} 