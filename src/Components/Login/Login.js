import React, { Component } from "react";
import style from './login.css'
import axios from "axios";
import { Link } from "react-router-dom";
class Login extends Component{
    constructor(){
        super()
        this.changeEmai = this.changeEmai.bind(this)
        this.changePassword = this.changePassword.bind(this)

        this.state = {
            email : "",
            password : ""
        }

    }

    changeEmai(p){
        this.setState({email : p.target.value})
    }
    changePassword(p){
        this.setState({password : p.target.value})
    }




    render(){

        console.log("h",this.state.email,this.state.password)
        return(
            <>
        <div className="back1">
        <div className="con1">
            <h1>Login</h1>
        <form>
  <div className="form-outline mb-2 col-6">
    <input type="email" className="form-control" value={this.state.email} onChange = {this.changeEmai} />
    <label className="form-label" >Email address</label>
  </div>


  <div className="form-outline mb-4 col-6">
    <input type="password"  className="form-control" value={this.state.password} onChange={this.changePassword} />
    <label className="form-label">Password</label>
  </div>

  <div className="text-center">
  <div className="row mb-4">
    <div className="col">
   
      <a href="#!">Forgot password?</a>
    </div>
  </div>


  <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
    <p>Not a member? <Link to='/signup'>Register</Link></p>


  </div>
</form>
<br></br>
<br></br>
<br></br>
<br></br>
</div></div>
            </>
        )
    }
}

export default Login