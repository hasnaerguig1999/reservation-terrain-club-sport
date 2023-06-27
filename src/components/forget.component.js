

import React from 'react';
import '../styles1.css'



export default function Forget() {
  return (
  
      <div className="login screen">
        <div className="group-container">
          <div className="groupe-4">
            <img className="group-5" src="group-5.png" alt='group-5' />
            <div className="admin-logo kufam-bold-pale-sky-17-9px">
              
              <span className="span0 kufam-bold-pale-sky-17-9px">Admin</span><span className="span1">&nbsp; </span><span className="span2">logo</span>
            </div>
          </div>
          <div className="">
            <div className="group-39636">
              <div className="login-lab">
             
                
              </div>
           
            </div>
            <form>
              <input type='hidden' name='user_id' />
            <div className="email">
              <div className="email-3 poppins-medium-pale-sky-24px">Veuillez vérifier vos e-mails </div>
              <div className="inptee">Ne vous inquiétez pas pour votre compte </div>

              <input  className="input"  placeholder='nom@domaine.com' id="inpt" name="email"/>
            </div>
          
        
        <button type="submit" className="but1" >SEND</button>
      


</form>
      </div>
      </div>
    
      <div className="overlap-group1">
        <div className="rectangleeg-381"></div>
          <img className="groupe-71" src="group-71.png" alt="group-71" />
          <img className="graphiquee" src="graphique.png" alt="graphique" />
          <h1 className="titlee">Bienvenue !</h1>
        </div>
      </div>
  
  );
}
