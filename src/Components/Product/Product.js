import React, { Component } from "react";
import axios from "axios";
import {Button,Form} from "semantic-ui-react"


class Addproduct extends Component{
render(){
    return(
        <>
        <h1>Product Added</h1>
        <hr></hr>
        <div className="container">
        <form>
  <div class="mb-3">
    <label  class="form-label">product-Name</label>
    <input type="email" class="form-control" />
  </div>
  <div class="mb-3">
    <label class="form-label">Password</label>
    <input type="password" class="form-control"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form></div>
        </>
    )
}
}

export default Addproduct