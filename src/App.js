// import logo from './logo.png';

import * as React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import {BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"
import Login from "./components/login.component";
import Register from "./components/register.component";
import Forget from "./components/forget.component";
import Verify from "./components/verify.component";

function App() {
  return (
    <Router>
  
  
    
     

    <nav className="navbar bg-body-tertiary">
  <div className="container">
    {/* <a className="navbar-brand" href="#">
      <img src={logo} alt="" width="100" height="34" className="d-inline-block align-text-top"/>
    </a> */}
  </div>
</nav>
<div className="App">
    </div>
    <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/forget" element={<Forget/>}></Route>
          <Route path="/verify" element={<Verify/>}></Route>
          <Route path="/" element={<Login/>}></Route>
          <Route path="*" element={<Login/>}></Route>
        
        </Routes>
      
        
      </Router>
  );
  
}


export default App;
