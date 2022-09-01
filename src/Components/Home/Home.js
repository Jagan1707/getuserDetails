import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component{

    render(){
        return(
            <>
            <h3 onClick={()=>window.location.href = '/signup'}>WELCOME HOME PAGE</h3>
           <Link to={'/signup'}>Sign-Up</Link><br></br>
           <Link to={'/sigin'}>Sign-in</Link>
           
          
            </>
        )
    }
}

export default Home