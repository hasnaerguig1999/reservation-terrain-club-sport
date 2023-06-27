import React from 'react';
import '../clientstatistique.css';
import Sidbar from '../sidbar/sidbar.component';
import { BiSearch } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { BiFemaleSign } from "react-icons/bi"
import { AiOutlineEye} from "react-icons/ai"
// import { RiEdit2Line } from "react-icons/ri";
// import { AiOutlineDelete } from "react-icons/ai";
export default function Clientstatistique() {
  return(
  <div>
    <Sidbar />
    <div className="clientq-suiteq screenq">
      <div className="overlapq-groupq5">
        <div className="groupq-64"></div>
    <div className="rectanglek-353"></div>
    <h1 className='titlek lora-medium-black-40px'>Nombre de client par sport</h1>
    <div className='cnt'>
              <div className="rowq">
               
  <div className="col-sm-3" id="colq">
    <div className="card">
      <div className="card-body">
        <center>
          <div className='hh6'>
      <p className="card-title" > Paddle   <span className='mya'>100</span></p>
      </div>
      </center>
      <div href="#" className="btn btn-primary" id="buttone1q">
        <img className='img1' src='layerqq.png'/>
      </div>
       
        
      </div>
    </div>
  </div>
  <div className="col-sm-3" id="colq">
    <div className="card">
      <div className="card-body">
      <center>
      <div className='hh6'>
        <p className="card-title">Tennis  <span className='myakhamsin'>150</span></p>
        </div>
        </center>
      <div href="#" className="btn btn-primary" id="buttone2q">
        <img className='img1' src='vectoqq.png'/>
      </div>
     
        
        
      </div>
    </div>
  </div>
  <div className="col-sm-3" id="colq">
    <div className="card">
      <div className="card-body">
      <center>
      <div className='hhhh6'>
        <p className="card-title">Mini-foot <span className='myasbaain'>170</span></p>
        
        </div>
        </center>
      <div href="#" className="btn btn-primary" id="buttone3qq">
        <img className='img1' src='groupqq2.png'/>
      </div>
     
      
       
      </div>
    </div>
  </div>
</div>


      
    <p className='rpartition-par-sportk lora-medium-black-40px'>Répartition des clients  par sport</p>
    <div className="overlapk-groupk">
      {/* <div className='paddlek inter-medium-abbey-18-1px'>Paddle</div> */}
      {/* <div className='numberk-1 numberk-4'>100</div> */}
    </div>
    </div>
    
    {/* <div className="rectanglek-360"></div> */}
    {/* <img className="layerk-2" /> */}
    <div className="overlapk-groupk1">
      {/* <div className="overlapk-groupk-1 overlapk-groupk-3"> */}
        {/* <div className='tennisk inter-medium-abbey-18-1px'>Tennis</div> */}
        {/* <div className='numberk-2 numberk-4'>150</div> */}
        {/* </div> */}
        {/* <div className="rectanglek-359"></div> */}
        {/* <img className="groupk" /> */}
      </div>
      {/* <div className="overlapk-groupk2"> */}
        {/* <div className="overlapk-groupk-2 overlapk-groupk-3"> */}
          {/* <div className='minik-footk inter-medium-abbey-18-1px'>Mini foot</div> */}
          {/* </div> */}
          {/* <div className="rectanglek-359-1"></div> */}
          {/* <img className="groupk-1" /> */}
          {/* <div className='numberk-3 numberk-4'>170</div> */}
        {/* </div> */}
        <div className='pq'>
        <p className='nombrek-de-clientk-par-statutk inter-bold-black-20px'>Nombre de clients par statut</p>
        </div>
        <div className='groupk-80'>
          <div className='groupk-78'>
            <div className='groupk-75'>
              <div className='abonnk'></div>
              <div className='orangellipseq'>
              <div className='abonnsk inter-medium-abbey-24px'>Abonnés</div>
              </div>
              </div>
              <div className='groupk-74'>
                <div className='numberk inter-medium-abbey-32px'>100</div>
                 <img className="trendingk-up trendingk" />
                 <div className='textk-1'>5.4 </div>
              </div>
            </div>
            <div className='overlapk-groupk3'>
              <img className="trendingk-down trendingk" />
              <div className='groupk-79'>
                <div className='groupk-76'>
                  <div className='container'>
                  <div className='orngelli'>
                  <div className='abonnk-1' id='elliq'></div>
                  </div>
                  </div>
                  
                  <div className='fornon'>
                  <div className='non-abonnsk inter-medium-abbey-24px'>Non abonnés</div>
                </div>
                <div className='groupk-77'>
                  <div className='khamsin'>
                  <div className='numberk inter-medium-abbey-32px'>50</div>
                  </div>
                  <div className='percentk'>0.4%</div>
                  </div>
                </div>
                </div>
              </div>
        </div>
        <div className='overlapk-groupk4'>
          <img className='x40-57'  src='x40-57.png'/>
          <img className='x20-29'  src='x20-29.png'/>
          <img className='x10-14' src='x10-14.png' />
          </div>
          <div className='groupk-89'>
            <div className='ellipsek'></div>
              <div className='tennisk-57 inter-bold-black-13-9px' id='tinisq'>
                <span className='inter-bold-black-13-9px'>Tennis</span>
                <span className='inter-normal-black-13-9px'>(57%)</span>
                </div>
            </div>
            <div className='groupk-90'>
              <div className='ellipsek-1'></div>
              <div className='ellipsek-3'></div>
              <div className='minik-footk-29 inter-bold-black-13-9px' id='miniq'>
                <span className='inter-bold-black-13-9px' >Mini foot</span>
                <span className='inter-normal-black-13-9px'>(29%)</span>
                </div>
              </div>
              <div className='textk'></div>
              <div className='groupk-91'>
                <div className='ellipsek-2 ellipsek-3' id='elpsb'></div>
                <div className='paddlek-14 inter-bold-black-13-9px' >
                  <div className="paddql">
                  <span className='inter-bold-black-13-9px'>Paddle</span>
                  <span className='inter-normal-black-13-9px'>(14%)</span>
                  </div>
                  </div>
                </div>
            </div>
            </div>
    </div>);
}