import React,{Component} from 'react';
import {Main} from './Containers/main';
// import { Route, Switch } from "react-router-dom";
import {AuthLogin} from './LoginAuth/AuthLogin.js';
import './App.css';
export class App extends Component{
  constructor(props){
    super(props);
    this.state={isLogin: false};
    this.AdminDetails={UserName:"admin",Password:"admin"};
    this.UserDetails={};
    this.handlerInput=this.handlerInput.bind(this);
    this.LoginVerifier=this.LoginVerifier.bind(this);
  }
  handlerInput(event){
    event.persist();
    const name=event.target.name;
    this.UserDetails={...this.UserDetails,
            [name] : event.target.value
    }

}
LoginVerifier(){
  if(this.UserDetails.UserName===this.AdminDetails.UserName && this.UserDetails.Password===this.AdminDetails.Password){
      this.setState({isLogin:true});
  }
  else{
      alert('UserName or Password Invalid');
  }
}
  render(){
    return(
        <div>
          {this.state.isLogin ? <Main/> : <AuthLogin handlerInput={this.handlerInput} login={this.LoginVerifier}/>}
        </div>
    );
  }
}