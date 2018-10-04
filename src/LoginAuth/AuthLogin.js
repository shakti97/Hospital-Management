import React from 'react';
import '../CSS/LoginForm.css';
export const AuthLogin=(props)=>{
    return(
        <div>
            <div className="login-form">
            <form >
		        <div className="avatar">
			        <img src="/examples/images/avatar.png" alt="Avatar"/>
		        </div>
                <h2 className="text-center">Member Login</h2>   
                <div className="form-group">
        	        <input type="text" className="form-control" name="UserName" onChange={props.handlerInput} placeholder="Username" required="required"/>
                </div>
		        <div className="form-group">
                    <input type="password" className="form-control" name="Password" 
                    onChange={props.handlerInput} placeholder="Password" required="required"/>
                </div>        
                <div className="form-group">
                    <button type="submit" onclick={props.login} className="btn btn-primary btn-lg btn-block">Sign in</button>
                </div>
		
            </form>
            </div>
        </div>
    )}