
import React from 'react';
import '../styles1.css'


export default function Login() {
  return (
  
      <div className="login screen">
        <div className="group-container">
          <div className="groupe-4">
            <img className="group-5" src="group-5.png" alt='group-5' />
            <div className="admin-logo kufam-bold-pale-sky-17-9px">
              <span className="span0 kufam-bold-pale-sky-17-9px">Admin</span><span className="span1">&nbsp; </span><span className="span2">logo</span>
            </div>
          </div>
          <div className="overlap-group">
            <div className="group-39636">
              <div className="login-lab">
                {/* <div className="login-1">Login</div> */}
                <a href="./login" className="login-1">login</a>
                <img className="line-44" src="line-44.png" alt="line" />
              </div>
              <a href="./register" className="signup">Signup</a>
            {/* <div className="signup">Signup</div> */}
            </div>
            <form>
              <input type='hidden' name='user_id' />
            <div className="email">
              <div className="email-1 poppins-medium-pale-sky-24px">Email</div>
              <input  className="input"  placeholder='nom@domaine.com' id="inpt" name="email"/>
            </div>
            <div className="mot-de-passe">
              <div className="mot-de-passe-1">
              <div className="mot-de-passe-2 poppins-medium-pale-sky-24px">Mot de passe</div>
            
             <input  className="input"  placeholder='********' id="inpt" name="mot_pass"  />
             
                
              
            </div>
            <div className="flex-row">

            
            <div className="toggle-checkmark">
              <input type="checkbox" className="rectangle-1" />
            </div>
           
            <div className="restez-connect">Restez connecté</div>
            <br></br>
          </div>
        </div>
       
        
        <button type="submit" class="btn btn-primary btn-block mb-4" id="but">Se connecter</button>
        <center>
        <a href="./forget" className='mot-de-passe-oubli'>Mot de passe oublié ?</a>
        </center>


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
