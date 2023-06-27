// import logo from './logo.png';
import { FaBeer } from 'react-icons/fa';

import * as React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import {BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"
import Login from "./components/login.component";
import Register from "./components/register.component";
import Forget from "./components/forget.component";
import Verify from "./components/verify.component";
import Acceuil from "./components/acceuil.component";
import Addreservation from './Reservations/addreservation.component'
import Even from './Reservations/even.component'
import Addterrain from './terrains/addterrain.component'
import Dashboardterrain from './terrains/dashboardterrain.component'
import Addterrainwithinfo from './terrains/addterrainwithinfo.component'
import Dashboardterrainwithinfo from './terrains/dashboardterrainwithinfo.component'
import Clientdata from './clients/clientdata.component'
import Clientdetail from './clients/clientdetail.component'
import Clientstatistique from './clients/clientstatistique.component'
import Occupationterrain   from './tablebords/occupationterrain.component'
import Evolutionreservation from './tablebords/evolutionreservation.component'
import Marketingcomapgne from './marketings/marketingcomapgne.component'
import Addcampaign from './marketings/addcampaign.component'
import Reservationhistorique from './historiques/reservationhistorique.component'
import Chiffredaffaire from './chiffresdaffaires/chiffredaffaire.component'
import Support from './supports/support.component'
import Parametre from './parametres/parametre.component'


import Newreservation from './Reservations/newreservation.component'

import Sidbar from './sidbar/sidbar.component';
// import Sidbar from "./sidbar/sidbar.component";
import {IoNotificationsOutline } from "react-icons/bs";

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
          <Route path="/acceuil" element={<Acceuil/>}></Route>
          <Route path="./sidbar/sidbar.component.js" element={<Sidbar/>}></Route>
          <Route path="/addreservation" element={<Addreservation/>}></Route>
          <Route path="/newreservation" element={<Newreservation/>}></Route>
          <Route path="/even" element={<Even/>}></Route>
          <Route path="/addterrain" element={<Addterrain/>}></Route>
          <Route path="/dashboardterrain" element={<Dashboardterrain/>}></Route>
          <Route path="/addterrainwithinfo" element={<Addterrainwithinfo/>}></Route>
          <Route path="/dashboardterrainwithinfo" element={<Dashboardterrainwithinfo/>}></Route>
          <Route path="/clientdetail" element={<Clientdetail/>}></Route>
          <Route path="/clientdata" element={<Clientdata/>}></Route>
          <Route path="/clientstatistique" element={<Clientstatistique/>}></Route>
          <Route path='/occupationterrain' element={<Occupationterrain/>}></Route>
          <Route path="/evolutionreservation" element={<Evolutionreservation/>}></Route>
          <Route path="/marketingcomapgne" element={<Marketingcomapgne/>}></Route>
          <Route path="/addcampaign" element={<Addcampaign/>}></Route>
          <Route path="/reservationhistorique" element={<Reservationhistorique/>}></Route>
          <Route path="/chiffredaffaire" element={<Chiffredaffaire/>}></Route>
          <Route path="/support" element={<Support/>}></Route>
          <Route path="/parametre" element={<Parametre/>}></Route>
        
          <Route path="/" element={<Login/>}></Route>
          <Route path="*" element={<Login/>}></Route>
        
        </Routes>
      
        
      </Router>
  );
  
}


export default App;
