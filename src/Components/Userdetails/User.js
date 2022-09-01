import React, { useState } from "react";
import axios from "axios";
import "./user.css"
import {useNavigate} from "react-router-dom"

function Userdetails(){

 const navigate = useNavigate()

const [getUser,setUser] = useState('')


const deleteData = (email) =>{
console.log("email",email)
    axios.delete("http://localhost:7070/user/deleteData",{params:{email:email}}).then(res=>{
        console.log("res",res);
        getUserDetails()
       
    })
}

const getUserDetails =()=>{
    axios.get("http://localhost:7070/user/getUser").then(res=>{
        console.log("success",res.data.result);
        setUser(res.data.result)
    }).catch(err=>{
        console.log("err",err.message)
    })
}

if(getUser){
    return(
        <>
        <div className="col-md-2 container">
          <u> <h2>User Details</h2></u>
        </div>
        <div className="tableView">
        <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">UserName</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Email</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
{
    getUser.map((details,index)=>{
        console.log("data",details.username);
        return(
            <>
        <tr>
        <th scope="row">{index+1}</th>
        <td contenteditable="true">{details.username}</td>
        <td contenteditable="true">{details.phone}</td>
        <td contenteditable="true">{details.email}</td>
        <td><button type="button" onClick={()=>navigate('/update',{state:details})}  class="btn btn-success">Update</button></td>
        <td><button type="button" onClick={()=>deleteData(details.email)} class="btn btn-danger">Delete</button></td>
      </tr>
            
            </>
        )
    })
}

  </tbody>
</table>
<hr></hr>

</div>
        </>
    )
    }else{

        return(
            <>
        <div className="col-md-2 container">
        <p>Click to get a userdetails</p>
        <button type="button" class="btn btn-primary" onClick={getUserDetails}>getdetails</button>
        </div>
           </>
        )
    }

} 

export default Userdetails
