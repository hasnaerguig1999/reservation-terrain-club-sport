import React from 'react';
import '../style3.css'
import { IoIosNotificationsOutline} from "react-icons/io";
import { FiEdit} from "react-icons/fi";
import { BsFilter} from "react-icons/bs";
import{RiErrorWarningLine} from "react-icons/ri";
import{GrStatusWarning} from "react-icons/gr";
import{IoWarningOutline} from "react-icons/io5";
import Accueil from './acceuil.component';
import Sidbar from '../sidbar/sidbar.component';







export default function Acceuil() {
  return (
    <div>
    <Sidbar />

      <div className='rectangled-353'
      >
         {/* <button className="butttt">
                  HHhhhhhh
                  </button> */}
           <div className='cnt'>
              <div className="row">
               
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <center>
          <div className='hh6'>
      <p className="card-title" >Réservation Brouillon   <FiEdit className='FiEdit1'/></p>
      </div>
      </center>
      <button href="#" className="btn btn-primary" id="buttone1">3</button>
       
        
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
      <center>
      <div className='hh6'>
        <p className="card-title">Réservation en ligne   <FiEdit className='FiEdit2'/></p>
        </div>
        </center>
      <button href="#" className="btn btn-primary" id="buttone2">5</button>
     
        
        
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
      <center>
      <div className='hhhh6'>
        <p className="card-title">Nouveaux Clients  <FiEdit className='FiEdit3'/></p>
        
        </div>
        </center>
      <button href="#" className="btn btn-primary" id="buttone3">2</button>
     
      
       
      </div>
    </div>
  </div>
</div>
</div>

      </div>
      <div className='framed-83'></div>
      <div className='groupd-39649'>
        <br></br>
     <BsFilter className='filt' />
        {/* <img className='iconsd-medium-filterd' src="iconsd-filters.png" /> */}
        <div className='terrainsd'>
          <div className='itemd-1'>
            <div className='containerd'>
              <select className='optiond'>
                <option value="">Choisir un Terrain</option>
                </select>
                {/* <img className='submenud' src="submenud.png" /> */}
              </div> 
             
            </div>
            
        </div>
        <button className='text-2d'>ce mois</button> 
        <button className='text-3d'>Aujourd'hui</button>
      </div>
      <div className='framed-85'>
        <div className='overlapd-groupd-containerd'>
        
        </div>
        <div className='groupd-containerd'>
          <div className='groupd-43'>
            <div className='icond-0 icond-8'>
              {/* <img className='iconsd-medium' src="iconsd.png" /> */}
              <RiErrorWarningLine className='warning' />
              </div>
              <div className='addressd inter normal-abbey-18px'>5 Créneaux libres</div>
            </div> 
          <div className='groupd-44'> 
           <div className='icond-1 icond-3'>
              {/* <img className='iconsd-medium-1' src="iconsd-1.png" /> */}
              <IoWarningOutline  className='warningtriangle'/>
            </div>
             <p className='addressd-1  adressd-3 inter normal-abbey-18px'>10 réservation en<br></br> attente de paiment</p>
            </div>
          <div className='groupd-45'>
            <div className='icond-2 icond-4'>
              {/* <img className='iconsd-medium-info' src="iconsd-info.png" /> */}
              <RiErrorWarningLine className='warningorang' />

              </div>
              <p className='addressd-2 adressd-4 inter normal-abbey-18px'>2 réservation annulées</p>
            </div>
            <div className='firstdiv'>
              <div className='container'>
           {/* <h2>reservations</h2>  */}
          {/* here */}

          <div className='frame-84'>
            <div className='overlapz-groupz'>
              <div className='x-axis'>
                <div className='textz-1'>
                  Réservation
                </div>
                <div className='default-width-line'>
               
                  <div className='x0 inter-normal-black-coral-pearl-10px'>50</div>
                  {/* <hr className='dashed5' ></hr> */}
                  <hr className='dashed5'></hr>
                  
                  </div>
                  <div className='default-width'>
                  <div className='x0-1 x0-5 inter-normal-black--coral-pearl-10px'>40</div>
                  <hr className='dashed4' ></hr>
                   </div>
                <div className='default-width-line'>
                  <div className='x0-2 x0-5 inter-normal-black-coral-pearl-10px'>30</div>
                  <hr className='dashed' ></hr>
                 </div>
                <div className='default-width-line'>
                  <div className='x0-3 x0-5 inter-normal-black-coral-pearl-10px'>20</div>
                  <hr className='dashed2' ></hr>
                </div>
                <div className='default-width-line'>
                  <div className='x0-4 x0-5 inter-normal-black-coral-pearl-10px'>10</div>
                  <hr className='dashed' ></hr>
                  
                  </div>
                  <div className='default-width-line'>
                    <div className='numbrez inter-normal-black-coral-pearl-10px'>0</div>
                    <hr className='dashed' ></hr>
                  </div>
              </div>
              </div>
              <div className='groupz-39626'>
                <div className='textz inter-semi-bold-bombay-15px'>07:00</div>
                <div className='textz inter-semi-bold-bombay-15px'>08:00</div>  
                <div className='textz inter-semi-bold-bombay-15px'>09:00</div>
                <div className='textz inter-semi-bold-bombay-15px'>10:00</div>
                <div className='textz inter-semi-bold-bombay-15px'>11:00</div>
                <div className='textz inter-semi-bold-bombay-15px'>12:00</div>
                <div className='textz inter-semi-bold-bombay-15px'>13:00</div>
                <div className='textz inter-semi-bold-bombay-15px'>14:00</div>
                <div className='textz inter-semi-bold-bombay-15px'>15:00</div>
                <div className='textz inter-semi-bold-bombay-15px'>16:00</div>
                <div className='textz inter-semi-bold-bombay-15px'>17:00</div>
                <div className='textz inter-semi-bold-bombay-15px'>18:00</div>
                <div className='textz inter-semi-bold-bombay-15px'>19:00</div>
                <div className='textz inter-semi-bold-bombay-15px'>20:00</div>
                <div className='textz inter-semi-bold-bombay-15px'>21:00</div>
                <div className='textz inter-semi-bold-bombay-15px'>22:00</div>
                <div className='textz inter-semi-bold-bombay-15px'>23:00</div>
                

                </div>
                {/* <img className='path'src="path.png" /> */}
               
            </div>




           </div>
           
          </div>
          </div>
         
          </div>
          <div className='groupd-39'>
          
              
  </div>
 
       <div className='groupd-46'>
        <h1 className='textd'>Réservations</h1>
        <button className='text-1d'> Nouvelle Réservation</button>
        
        {/* <img className='groupd-36' src="groupd-36.png" /> */}
        </div>
        {/* <button className="butttt">
                  HHhhhhhh
                  </button> */}
  
        </div>
         
  );
}
