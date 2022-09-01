import React, { useState } from "react";
import axios from "axios";
import {useLocation} from "react-router-dom"

function Updateuser(){
const {state} = useLocation();
console.log("state",state)

const [getName,setName] = useState(state.username)
const [getEmail,setEmail] = useState(state.email)
const [getPhone,setPhone] = useState(state.phone)

const updateDate =()=>{
   let data = {
         email:getEmail,
        username:getName,
        phone : getPhone,
    }
    axios.put("http://localhost:7070/user/upadteData",data).then(res=>{
        console.log("sucess",res.data)
    }).catch(err=>{
        console.log("err",err.message)
    })
}


    return(<>
    <div className="col-md-2 container">
   <div className="form-outline mb-4">
        <input type="text" className="form-control" value={getName} onChange={(e)=>setName(e.target.value)} />
        <label className="form-label" >Name</label>
    </div> 

      <div className="form-outline mb-4">
        <input type="text" className="form-control" value={getPhone} onChange={(e)=>setPhone(e.target.value)} />
        <label className="form-label" >Phone Number</label>
      </div>

  
  <div className="form-outline mb-4 ">
    <input type="email"  className="form-control" value={getEmail} onChange = {(e)=>setEmail(e.target.value)}  />
    <label className="form-label" >Email address</label>
  </div>

  
  <button type="button" onClick={updateDate} className="btn btn-primary btn-block mb-4">Update</button>
  </div>
    </>)
}

export default Updateuser