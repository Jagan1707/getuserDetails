import React, { Component } from "react";
import axios from "axios";
import style from "./signin.css"


class Register extends Component{
constructor(){
    super()
    this.changeName = this.changeName.bind(this)
    this.changeNumber = this.changeNumber.bind(this)
    this.changeemail = this.changeemail.bind(this)
    this.changepassword = this.changepassword.bind(this)
    

    this.state = {
        username :"",
        phone : "",
        email : "",
        password : ""
    }
 
}


changeName(p){
    this.setState({username : p.target.value})
}

changeNumber(p){
    this.setState({phone:p.target.value})
}
changeemail(p){
    this.setState({email:p.target.value})
}

changepassword(p){
    this.setState({password:p.target.value})
}

Register = async()=>{
    const data = {
        username : this.state.username,
        phone : this.state.phone,
        email : this.state.email,
        password : this.state.password
    }
    axios.post('http://localhost:7070/user/Register',data).then(result=>{
        console.log("result",result)
    }).catch(err=>{
        console.log("err",err.message)
    })


}


    render(){

        console.log("hello",this.state.username)
        
        return(
            <>
            <div className="back">
            <br></br>
            <div className="con">
            <h1>Register</h1><br></br>

                <form>
  <div className="row mb-4">
    <div className="col-6">
      <div className="form-outline">
        <input type="text" className="form-control" value={this.state.username} onChange={this.changeName} />
        <label className="form-label" >Name</label>
      </div>
    </div>
  </div>
  <div className="row mb-4">
    <div className="col-6">
      <div className="form-outline">
        <input type="text" className="form-control" value={this.state.phone} onChange={this.changeNumber} />
        <label className="form-label" >Phone Number</label>
      </div>
    </div>
  </div>

  
  <div className="form-outline mb-4 col-6">
    <input type="email"  className="form-control" value={this.state.email} onChange= {this.changeemail} />
    <label className="form-label">Email address</label>
  </div>

  
  <div className="form-outline mb-4 col-6">
    <input type="password"  className="form-control" value={this.state.password} onChange = {this.changepassword} />
    <label className="form-label" >Password</label>
  </div>
  
  <button type="button" onClick={this.Register} className="btn btn-primary btn-block mb-4">Sign up</button>
</form>
</div>
<br></br>
<br></br>
<br></br>
</div>

            </>
        )
      }
}

export default Register