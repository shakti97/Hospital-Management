import React from 'react';

export class AuthLogin{
    constructor(){
        super();
        this.AdminDetails={UserName:"admin",Password:"admin"};
        this.UserDetails={};
        this.handlerInput=this.handlerInput.bind(this);
        this.Login=this.Login.bind(this);

    }
    handlerInput(event){
        event.persist();
        const name=event.target.name;
        this.UserDetails={...this.UserDetails,
                [name] : event.target.value
        }
        console.log('UserDetails ', UserDetails);

    }
    Login(){
        if(this.UserDetails.UserName==this.AdminDetails.UserName && this.UserDetails.Password==this.AdminDetails.Password){
            
        }
    }
    render(){
    return(
        <div>
            <form>
                <div class="imgcontainer">
                    <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
                </div>

                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" name='UserName' onChange={this.handlerInput} placeholder="Enter Username" name="uname" required/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" name='Password' onChange={this.handlerInput} placeholder="Enter Password" name="psw" required/>

                    <button type="submit" onClick={this.Login}>Login</button>
                    <label>
                    <input type="checkbox" checked="checked" name="remember"/> Remember me
                    </label>
                </div>

                <div class="container" style="background-color:#f1f1f1">
                <button type="button" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
            </form> 
        </div>
    )}
}