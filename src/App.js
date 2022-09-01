import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Addproduct from "./Components/Product/Product"
import Register from './Components/Register/Singin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/Login';
import {BrowserRouter,Routes,Route,Link,Switch} from "react-router-dom"
import Home from './Components/Home/Home';
import Userdetails from './Components/Userdetails/User';
import Updateuser from './Components/Userdetails/Update';

// class App extends Component{
//   render(){
//     return(
//       <>
//      <BrowserRouter>
     
//      <Routes>
//       <Route path='/signup' element = {<Register/>}/>
//       <Route path='/sigin' element = {<Login/>}/>
//       <Route path='/home' element = {<Home/>}/>
//       <Route path='/update' element = {<Updateuser/>}/>
//       <Route path='/' element = {<Userdetails/>}/>
//      </Routes>
//      </BrowserRouter>
//       </>
//     )
//   }
// }

function App(){
  return(<>
       <BrowserRouter>
     
           <Routes>
            <Route path='/signup' element = {<Register/>}/>
            <Route path='/sigin' element = {<Login/>}/>
            <Route path='/home' element = {<Home/>}/>
            <Route path='/update' element = {<Updateuser/>}/>
            <Route path='/' element = {<Userdetails/>}/>
           </Routes>
          </BrowserRouter>
  
  </>)
}

export default App;
